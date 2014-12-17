Ext.data.JsonP.Trainer({"tagname":"class","name":"Trainer","autodetected":{},"files":[{"filename":"Trainer.js","href":"Trainer.html#Trainer"}],"members":[{"name":"clearNotifications","tagname":"method","owner":"Trainer","id":"method-clearNotifications","meta":{}},{"name":"getExerciseClasses","tagname":"method","owner":"Trainer","id":"method-getExerciseClasses","meta":{}},{"name":"getExercises","tagname":"method","owner":"Trainer","id":"method-getExercises","meta":{}},{"name":"getPopupExercises","tagname":"method","owner":"Trainer","id":"method-getPopupExercises","meta":{}},{"name":"getScheduledExercises","tagname":"method","owner":"Trainer","id":"method-getScheduledExercises","meta":{}},{"name":"getTodaysExercise","tagname":"method","owner":"Trainer","id":"method-getTodaysExercise","meta":{}},{"name":"initExercises","tagname":"method","owner":"Trainer","id":"method-initExercises","meta":{}},{"name":"minifyExercise","tagname":"method","owner":"Trainer","id":"method-minifyExercise","meta":{}},{"name":"onLoad","tagname":"method","owner":"Trainer","id":"method-onLoad","meta":{}},{"name":"setExerciseSchedule","tagname":"method","owner":"Trainer","id":"method-setExerciseSchedule","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Trainer","short_doc":"Class Trainer\n\nThe Trainer class keeps track of all of a user's exercises and is responsible for:\n\n\nProviding a list ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Trainer.html#Trainer' target='_blank'>Trainer.js</a></div></pre><div class='doc-contents'><p>Class Trainer</p>\n\n<p>The Trainer class keeps track of all of a user's exercises and is responsible for:</p>\n\n<ul>\n<li><p>Providing a list of exercises to display in popup</p></li>\n<li><p>Scheduling exercises</p></li>\n<li><p>Calculating notification to display on the bliss icon in chrome</p></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clearNotifications' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-clearNotifications' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-clearNotifications' class='name expandable'>clearNotifications</a>( <span class='pre'>[time]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clear all scheduled exercises ...</div><div class='long'><p>Clear all scheduled exercises</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Number (optional)<div class='sub-desc'><p>Unix timestamp in seconds as to when the clearing took place. Defaults to current time\n but can optionally be set to past to clear exercises that have been scheduled longer than X seconds</p>\n</div></li></ul></div></div></div><div id='method-getExerciseClasses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-getExerciseClasses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-getExerciseClasses' class='name expandable'>getExerciseClasses</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all exercise classes, not instantiated in an array. ...</div><div class='long'><p>Returns all exercise classes, not instantiated in an array.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>exercise</p>\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Machine name</p>\n</div></li><li><span class='pre'>display_name</span> : String<div class='sub-desc'><p>Display name to display to user</p>\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>Description to display to user</p>\n</div></li><li><span class='pre'>fields</span> : Object<div class='sub-desc'><p>Fields as originally defined by the exercise sub-class (see /ui/exercises/ for sub-classes)</p>\n</div></li><li><span class='pre'>templates</span> : String[]<div class='sub-desc'><p>Array of templates defined, or a callback to return templates</p>\n</div></li><li><span class='pre'>Etc</span> : Object<div class='sub-desc'><p>All other fields (not listed here) defined in sub-class (see /ui/exercises/ for sub-classes)</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-getExercises' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-getExercises' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-getExercises' class='name expandable'>getExercises</a>( <span class='pre'></span> ) : Object[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of all exercises including non-scheduled and disabled exercises ...</div><div class='long'><p>Returns an array of all exercises including non-scheduled and disabled exercises</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>exercise</p>\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the machine name of the exercise</p>\n</div></li><li><span class='pre'>dataClass</span> : String<div class='sub-desc'><p>the name of the key used for storage to chrome or parse</p>\n</div></li><li><span class='pre'>display_name</span> : String<div class='sub-desc'><p>the display name of the exercise</p>\n</div></li><li><span class='pre'>is_scheduled</span> : Boolean<div class='sub-desc'><p>true if the exercise is scheduled</p>\n</div></li><li><span class='pre'>scheduled_time</span> : Number<div class='sub-desc'><p>The unix time stamp of when the exercise became scheduled most recently</p>\n</div></li><li><span class='pre'>first_scheduled</span> : Number<div class='sub-desc'><p>The unix time stamp of when the exercise first became scheduled</p>\n</div></li><li><span class='pre'>wait_time</span> : Number<div class='sub-desc'><p>Seconds since the exercise became scheduled</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Options for the exercise</p>\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>Description to display to user</p>\n</div></li><li><span class='pre'>fields</span> : Object<div class='sub-desc'><p>Fields as originally defined by the exercise sub-class (see /ui/exercises/ for sub-classes)</p>\n</div></li><li><span class='pre'>templates</span> : String[]<div class='sub-desc'><p>Array of templates defined, or a callback to return templates</p>\n</div></li><li><span class='pre'>Etc</span> : Object<div class='sub-desc'><p>All other fields (not listed here) defined in sub-class (see /ui/exercises/ for sub-classes)</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-getPopupExercises' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-getPopupExercises' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-getPopupExercises' class='name expandable'>getPopupExercises</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of minimal exercises (containing only fields needed for display) to display in chrome extension popu...</div><div class='long'><p>Returns an array of minimal exercises (containing only fields needed for display) to display in chrome extension popup window</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>exercise</p>\n\n\n\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Machine name for the exercise</p>\n\n\n\n</div></li><li><span class='pre'>display_name</span> : String<div class='sub-desc'><p>Name to display to the user when referring to the exercise</p>\n\n\n\n</div></li><li><span class='pre'>displayInPopup</span> : Boolean<div class='sub-desc'><p>True if exercise should be displayed in the popup (scheduled popup version only)</p>\n\n\n\n</div></li><li><span class='pre'>is_scheduled</span> : Boolean<div class='sub-desc'><p>True is exercise is scheduled</p>\n\n\n\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>A description to display to the user, set in the exercise sub-class definition</p>\n\n\n\n</div></li><li><span class='pre'>last_featured</span> : Number<div class='sub-desc'><p>Unix time stamp when the exercise was last \"Today's Exercise\"</p>\n\n\n\n</div></li><li><span class='pre'>scheduled_time</span> : Number<div class='sub-desc'><p>Unix time stamp when the exercise was last scheduled</p>\n\n\n\n</div></li><li><span class='pre'>repeat</span> : Number<div class='sub-desc'><p>Delay in day of how often the exercise should be re-scheduled, controlled by settings form</p>\n\n\n\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p>Delay in days after install before the exercise will be scheduled for the first time</p>\n\n\n\n</div></li></ul></div></li></ul></div></div></div><div id='method-getScheduledExercises' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-getScheduledExercises' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-getScheduledExercises' class='name expandable'>getScheduledExercises</a>( <span class='pre'></span> ) : Object[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an array of all exercises that are currently scheduled ...</div><div class='long'><p>Returns an array of all exercises that are currently scheduled</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>exercise</p>\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>display_name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>is_scheduled</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>scheduled_time</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>Description to display to user</p>\n</div></li><li><span class='pre'>fields</span> : Object<div class='sub-desc'><p>Fields as originally defined by the exercise sub-class (see /ui/exercises/ for sub-classes)</p>\n</div></li><li><span class='pre'>templates</span> : String[]<div class='sub-desc'><p>Array of templates defined, or a callback to return templates</p>\n</div></li><li><span class='pre'>Etc</span> : Object<div class='sub-desc'><p>All other fields (not listed here) defined in sub-class (see /ui/exercises/ for sub-classes)</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-getTodaysExercise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-getTodaysExercise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-getTodaysExercise' class='name expandable'>getTodaysExercise</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Return a minimal version of the exercise (containing only fields needed for display)\n that will be presented to the u...</div><div class='long'><p>Return a minimal version of the exercise (containing only fields needed for display)\n that will be presented to the user today (if using today's popup version)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>exercise</p>\n\n\n\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Machine name for the exercise</p>\n\n\n\n</div></li><li><span class='pre'>display_name</span> : String<div class='sub-desc'><p>Name to display to the user when referring to the exercise</p>\n\n\n\n</div></li><li><span class='pre'>displayInPopup</span> : Boolean<div class='sub-desc'><p>True if exercise should be displayed in the popup (scheduled popup version only)</p>\n\n\n\n</div></li><li><span class='pre'>is_scheduled</span> : Boolean<div class='sub-desc'><p>True is exercise is scheduled</p>\n\n\n\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>A description to display to the user, set in the exercise sub-class definition</p>\n\n\n\n</div></li><li><span class='pre'>last_featured</span> : Number<div class='sub-desc'><p>Unix time stamp when the exercise was last \"Today's Exercise\"</p>\n\n\n\n</div></li><li><span class='pre'>scheduled_time</span> : Number<div class='sub-desc'><p>Unix time stamp when the exercise was last scheduled</p>\n\n\n\n</div></li><li><span class='pre'>repeat</span> : Number<div class='sub-desc'><p>Delay in day of how often the exercise should be re-scheduled, controlled by settings form</p>\n\n\n\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p>Delay in days after install before the exercise will be scheduled for the first time</p>\n\n\n\n</div></li></ul></div></li></ul></div></div></div><div id='method-initExercises' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-initExercises' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-initExercises' class='name expandable'>initExercises</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes exercises, called on Trainer creation to set the delay, enabled, repeat\n parameters based on values from ...</div><div class='long'><p>Initializes exercises, called on Trainer creation to set the delay, enabled, repeat\n parameters based on values from Storage</p>\n</div></div></div><div id='method-minifyExercise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-minifyExercise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-minifyExercise' class='name expandable'>minifyExercise</a>( <span class='pre'>exercise</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Takes a fully loaded exercise and returns minimal version for display in popup ...</div><div class='long'><p>Takes a fully loaded exercise and returns minimal version for display in popup</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>exercise</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>exercise</p>\n\n\n\n<ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Machine name for the exercise</p>\n\n\n\n</div></li><li><span class='pre'>display_name</span> : String<div class='sub-desc'><p>Name to display to the user when referring to the exercise</p>\n\n\n\n</div></li><li><span class='pre'>displayInPopup</span> : Boolean<div class='sub-desc'><p>True if exercise should be displayed in the popup (scheduled popup version only)</p>\n\n\n\n</div></li><li><span class='pre'>is_scheduled</span> : Boolean<div class='sub-desc'><p>True is exercise is scheduled</p>\n\n\n\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>A description to display to the user, set in the exercise sub-class definition</p>\n\n\n\n</div></li><li><span class='pre'>last_featured</span> : Number<div class='sub-desc'><p>Unix time stamp when the exercise was last \"Today's Exercise\"</p>\n\n\n\n</div></li><li><span class='pre'>scheduled_time</span> : Number<div class='sub-desc'><p>Unix time stamp when the exercise was last scheduled</p>\n\n\n\n</div></li><li><span class='pre'>repeat</span> : Number<div class='sub-desc'><p>Delay in day of how often the exercise should be re-scheduled, controlled by settings form</p>\n\n\n\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p>Delay in days after install before the exercise will be scheduled for the first time</p>\n\n\n\n</div></li></ul></div></li></ul></div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Executes callback when the Trainer loads, must be used to do anything with Trainer ...</div><div class='long'><p>Executes callback when the Trainer loads, must be used to do anything with Trainer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to execute when trainer has loaded\n i.e. var trainer = new Trainer(); trainer.onLoad(function() { var exercise = trainer.getTodaysExercise(); });</p>\n</div></li></ul></div></div></div><div id='method-setExerciseSchedule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Trainer'>Trainer</span><br/><a href='source/Trainer.html#Trainer-method-setExerciseSchedule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Trainer-method-setExerciseSchedule' class='name expandable'>setExerciseSchedule</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Runs on Trainer creation \n    Sets exercise.is_scheduled   - true if exercise is scheduled \n    exercise.notification...</div><div class='long'><p>Runs on Trainer creation <br>\n    Sets exercise.is_scheduled   - true if exercise is scheduled <br>\n    exercise.notification   - true if exercise should have a popup notification displayed <br>\n    exercise.scheduled_time  - timestamp when exercise became scheduled <br>\n    exercise.wait_time      - seconds the exercise has been scheduled for <br></p>\n</div></div></div></div></div></div></div>","meta":{}});