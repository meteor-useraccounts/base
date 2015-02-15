// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package

var Both = ['client', 'server'];
var Client = 'client';
var Server = 'server';


Package.describe({
  name: 'useraccounts:init',
  summary: 'UserAccounts initialization package.',
  version: '2.0.0',
  git: 'https://github.com/meteor-useraccounts/init.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  // Logger
  api.use([
    'jag:pince@0.0.5',
    'useraccounts:core@2.0.0'
  ], Both);

  // Requires all other packages loads before this asking for weak dependencies.
  // api.use('useraccounts:password@2.0.0', Both, { weak: true });
  // api.use('useraccounts:oauth@2.0.0',    Both, { weak: true });

  // Base Class instantiation
  api.addFiles([
    'src/main.js'
  ], Both);

  api.export([
    'UserAccounts',
  ], Both);
});
