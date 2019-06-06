'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var isDevMode = (EmberApp.env() !== "production") && (EmberApp.env() !== "test");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

    'ember-service-worker': {
      versionStrategy: 'every-build',     // every-build | project-version
      registrationStrategy: 'async',      // async | inline
      enabled: !isDevMode,
      serviceWorkerFileName: 'sw.js'
    },

    'esw-cache-first': { // RegExp patterns specifying which URLs to cache.
      patterns: [
        '/images/(.+)',
        'https://fonts.googleapis.com/css(.+)',
        'https://fonts.gstatic.com/s/',
        '/ember-monaco/frame.html',
        '/ember-monaco/(.+)'
      ]
    },

    'prember': {
      urls: [ '/' ]
    },

    'ember-prism': {
      'components': ['scss', 'javascript'], //needs to be an array, or undefined.
      'plugins': ['line-highlight', 'line-numbers']
    },

    'ember-toggle': {
      includedThemes: ['skewed'],
      excludedThemes: ['light', 'ios', 'flip'],
      excludeBaseStyles: false, // defaults to false
      defaultShowLabels: true,  // defaults to false
      defaultTheme: 'skewed',    // defaults to 'default'
      defaultSize: 'small',     // defaults to 'medium'
      defaultOffLabel: 'Off', // defaults to 'Off'
      defaultOnLabel: 'On'    // defaults to 'On'
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};


// function getApp(defaults, environment) {
//   switch (environment) {

//     case "production":
//       return new EmberApp(defaults, {
//         fingerprint: {
//           enabled: true
//         },
//       });

//     default:
//       return new EmberApp(defaults, {
//         fingerprint: {
//           enabled: false
//         },
//       });

//   }
// }
