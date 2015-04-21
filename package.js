'use strict';

// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package

var Both = ['client', 'server'];
var Client = 'client';


Package.describe({
  name: 'useraccounts:base',
  summary: 'UserAccounts base package.',
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

  api.imply([
    'useraccounts:core',
  ], Both);

  // Requires all other packages loads before this asking for weak dependencies.
  api.use('useraccounts:semantic-ui-templates', Client, {
    weak: true
  });
  api.use('useraccounts:password@2.0.0', Both, {
    weak: true
  });
  api.use('useraccounts:oauth@2.0.0', Both, {
    weak: true
  });

  // Base Class instantiation
  api.addFiles([
    'src/_globals.js',
    'src/main.js'
  ], Both);

  api.use([
    'templating'
  ], Client);

  api.addFiles([
    'src/helpers.js'
  ], Client);

});
