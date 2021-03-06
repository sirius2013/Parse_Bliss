Parse.initialize(Bliss.appId, Bliss.javascriptId);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    Storage.loadAll(function() {
    switch (request.action) {
      case "update_notifications":
        updateNotifications(request.callback);
        checkForMissedDay();
        break;
      case "exerciseComplete":
        updateNotifications();
        if (request.normal_exercise) {
          calculateNewUseDayStreak();
        }
        break;
      case 'clear-notifications':
        var trainer = new Trainer();
        trainer.onLoad(function() {
          trainer.clearNotifications();
          chrome.browserAction.setBadgeText({text: ''}); 
          updateNotifications();
        });
        break;
      case 'trackerSubmit':
        chrome.tabs.query({}, function(tabs) {
          for (var x = 0; x < tabs.length; x++) {
            chrome.tabs.sendMessage(tabs[x].id, {action: 'trackerSubmit'}, function(response) {
              Bliss.log(response.farewell);
            });
          }
        });
    }
  });
  }
);

function updateNotifications(callback) {
  Storage.reload(function() {
    User(function(user) {
      try {
        if (user) {
          var previous_notification_count = Storage.get('notification_count') ? Storage.get('notification_count') : 0;
          var popup_version = Bliss.getPopupVersion();
          var trainer = new Trainer();
          trainer.onLoad(function() {
            var scheduled = trainer.getScheduledExercises();
            var exercises = trainer.getPopupExercises();
            var todays_exercise = trainer.getTodaysExercise();
            //Save popup todays exercise for todays / challenge popup version
            //Useful to do this here so it's available if we manually change popup version in testing
            Storage.set('popup_todays_exercise', todays_exercise);

            if (popup_version == 'scheduled') {
              var notification_count = trainer.getNotificationCount();
              notification_count = notification_count > 0 ? String(notification_count) : '';
              Storage.set({'notification_count': notification_count});
              var new_alert = Storage.get('popup_new');
              if (new_alert) {
                chrome.browserAction.setBadgeText({text: 'New!'}); 
                chrome.browserAction.setBadgeBackgroundColor({color: '#FF9900'}); 
              }
              else {
                chrome.browserAction.setBadgeText({text: notification_count}); 
              }
              Storage.set('popup_exercises', exercises);
              if (previous_notification_count != notification_count) {
                logNotifications(scheduled, previous_notification_count, notification_count);
              }
            }
            //todays / challenge popup version
            else {
              var badge_text = '';
              if (!todays_exercise.completed && todays_exercise.is_scheduled) {
                if (popup_version == 'challenge') {
                  var challenge_day = Number(Storage.get('use_day_count')) + 1;
                  badge_text = 'DAY' + challenge_day;
                }
                else {
                  badge_text = moment.unix(Bliss.getTime()).format('M-D');
                }
              }
              chrome.browserAction.setBadgeText({text: badge_text}); 
            }
            if (callback) {
              callback.call();
            }
          });
        }
      }
      catch (error) {
        console.log('ERROR');
        console.log(error);
        Bliss.logError(error, 'background-notifications');

      }
    });
  });
}

function logNotifications(scheduled, previous_notification_count, notification_count) {
  //Send log of notification data to Bliss HQ
  var scheduled_names = getScheduledNames(scheduled);
  Bliss.logEvent('new_notification', {count: notification_count, 
                                      previous: previous_notification_count, 
                                      scheduled: scheduled_names });
}

function getScheduledNames(scheduled) {
  var scheduled_names = {};
  $.each(scheduled, function(key, exercise) {
    scheduled_names[exercise.name] = exercise.wait_time;
  });
  return scheduled_names;
}

/**
 *  Install / Update Handler
 */
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == "install") {
    User.createAccount(function() {
      var url = getInstallUrl();
      chrome.tabs.create({url: Bliss.getLocalUrl(url)});
      Storage.set('bliss_install_time', Bliss.getTime());
      Storage.set('bliss_install_version', Bliss.getVersion());
      Storage.set('use_day_count', 0);
      Storage.set('use_day_streak', 0);
      Bliss.logEvent('install', {version: Bliss.getVersion()});
      updateNotifications();
    });
  }
  else if (details.reason == "update") {
    Storage.onLoad(function() {
      var now = Bliss.getTime();
      var current_version = Bliss.getVersion();
      var install_version = Storage.get('bliss_install_version');
      updateNotifications();
      checkForMissedDay();
      Bliss.logEvent('update', {version: current_version});
    });
  }
});

/**
 * Run tests to determine which slides user will see on registration
 */

function getInstallUrl() {
  var url = "/ui/deploy/deploy.htm?exercise=";
  var slides = [];
  
  slides.push('GratitudeExercise');

  var show_challenge = new SplitTest('seven-day-challenge').values(['challenge', 'todays', 'scheduled']);
  if (show_challenge) {
    slides.push('SevenDayChallenge');
  }
  else {
    slides.push('SevenDayChallenge');
  }
  
  slides.push('ExtendedTrackerExercise');

  var show_intro = new SplitTest('new-install-intro-form').truefalse();
  if (show_intro) { 
    slides.push('IntroForm');
  }

  url += slides.join(',');
  url += '&install=1';

  return url;

}

/**
 *
 * NOTE: Should ONLY be called after a user submits an exercise, because it increases the use_day_streak
 * assuming the user just submitted an exercise
 *
 * Calculate number of days user has used Bliss and record in Storage
 */
function calculateNewUseDayStreak() {
  Storage.reload(function() {
    var use_day_streak = Storage.get('use_day_streak') ? Number(Storage.get('use_day_streak')) : 0;
    var use_day_count  = Storage.get('use_day_count') ? Number(Storage.get('use_day_count')) : 0;
    var last_use_day   = Storage.get('last_use_day');
    var today          = moment.unix(Bliss.getTime()).startOf('day');

    if (last_use_day) {
      //If today is different than last use day, increase streak and use day count by 1
      if (!moment.unix(last_use_day).startOf('day').isSame(today, 'day')) {
        //Last use day is not today, so this is first exercise of the day, increase streak!
        use_day_streak++;
        use_day_count++;
      }

      //However, if user missed a day, reset streak to 1
      if (checkForMissedDay()) {
        //User missed yesterday, but submitted today, so streak = 1
        use_day_streak = 1;
      }
    }
    else { 
      //alert('first day used!');
      //If it's the first day used
      use_day_streak = 1;
      use_day_count  = 1;
    }
    Storage.set('use_day_streak', use_day_streak);
    Storage.set('use_day_count', use_day_count);
    Storage.set('last_use_day', Bliss.getTime());

    //Update 7 Day Challenge variable if we have 7 use days
    if (Storage.get('7_day_challenge') == 'accepted' && use_day_count >= 7) {
      Storage.set('7_day_challenge', 'complete');
    }
  });
}

  //  Storage.set('replace_background', false);
var replace_background = true;
chrome.tabs.onCreated.addListener(function(tab) {
  if (replace_background && tab.url == "chrome://newtab/") {
    var url = Bliss.getLocalUrl('newtab.htm');
    chrome.tabs.update(tab.id, {url: url});
  }
});

chrome.alarms.create('update_notifications', {periodInMinutes: 15});
chrome.alarms.onAlarm.addListener(function(alarm) {
  updateNotifications();
  checkForMissedDay();
});

//Reset use day streak to zero if user missed a day
function checkForMissedDay() {
  var last_use_day   = Storage.get('last_use_day');
  if (last_use_day) {
    var yesterday = moment.unix(Bliss.getTime()).startOf('day').subtract(1, 'day');
    var today     = moment.unix(Bliss.getTime()).startOf('day');
    last_use_day  = moment.unix(last_use_day).startOf('day')
    if (!last_use_day.isSame(yesterday, 'day') && !last_use_day.isSame(today, 'day')) {
      Storage.set('use_day_streak', 0);
      return true;
    }
  }
}

//Give our dev instance another color icon
if (Bliss.dev) {
  if (Bliss.getEnvironment() == 'chrome') {
    chrome.browserAction.setIcon({'path': {'19': 'logo_19-dev.png', '38': 'logo_128-dev.png'}});
  }
}
