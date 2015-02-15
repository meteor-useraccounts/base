/* global
  Logger: false,
  UA: false,
  UALog: true,
  UserAccounts: true
*/


// ------------------------------------
//  Creates the logger for this package
// ------------------------------------
UALog = new Logger('useraccounts:init');

var uaLogLevelSettings;
if (Meteor.settings.public && Meteor.settings.public.useraccounts) {
  uaLogLevelSettings = Meteor.settings.public.useraccounts.logLevel;
}
else if (Meteor.settings && Meteor.settings.useraccounts) {
  uaLogLevelSettings = Meteor.settings.useraccounts.logLevel;
}

if (uaLogLevelSettings && uaLogLevelSettings.init) {
  Logger.setLevel('useraccounts:init', uaLogLevelSettings.init);
}

if (Meteor.isServer && process.env.USERACCOUNTS_CORE_LOGLEVEL) {
  Logger.setLevel('useraccounts:init', process.env.USERACCOUNTS_INIT_LOGLEVEL);
}

// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


// --------------------------
//  Base Class Instantiation
// --------------------------

UALog.debug('Instantiating UserAccounts object');
UserAccounts = new UA();
