'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'gist-it-octane',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_MODULE_UNIFICATION: true
        EMBER_METAL_TRACKED_PROPERTIES: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    "ember-toggle" : {
      includedThemes: ['skewed'],
      excludedThemes: ['light', 'ios', 'flip'],
      excludeBaseStyles: false, // defaults to false
      defaultShowLabels: true,  // defaults to false
      defaultTheme: 'skewed',    // defaults to 'default'
      defaultSize: 'small',     // defaults to 'medium'
      defaultOffLabel: 'Off', // defaults to 'Off'
      defaultOnLabel: 'On'    // defaults to 'On'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV.percy = {
      breakpointsConfig: {
        // mobile: 375,
        // tablet: 768,
        desktop: 1280
      },
      defaultBreakpoints: ['desktop'] // [ 'mobile' ]
    }
  }

  if (environment === 'production') {

  }

  return ENV;
};
