/* global
  UALog: true,
  UserAccounts: true
*/
'use strict';


// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');


// -------------------
//  Startup operations
// -------------------
UALog.trace('Starting up UserAccounts object');
UserAccounts.__startup();
