const { defineConfig } = require("cypress");
//const { allureCypress } = require("allure-cypress/reporter");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

/*
module.exports = defineConfig({
  e2e: {

     setupNodeEvents(on, config) {      
     allureWriter(on, config);
     return config;

    },
  },
});
*/



/*
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
};
*/

/*
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
*/

/*
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./allure-results",
        links: [
          { type: "issue", urlTemplate: "https://issues.example.com/%s" },
          { type: "tms", urlTemplate: "https://tms.example.com/%s" },
        ],
      });
    },
  },
});
*/


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config );
      return config;
      
    },
  },
});

