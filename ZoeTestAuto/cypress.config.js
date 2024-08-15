const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dashboard-test.zoefin.com',    //Se define la UrlBase como parámetro
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
