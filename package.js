/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:vaporyjs-accounts',
  version: '0.0.10',
  summary: 'A simple module for creating, managing and using Vapory accounts in browser',
  git: 'https://github.com/vaporyjs/vaporyjs-accounts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.export(['Accounts'], ['client']);

  api.addFiles('dist/vaporyjs-accounts.js', 'client');
  api.addFiles('package-init.js', 'client');
});