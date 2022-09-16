const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    projectId: "x51ui9",
    watchForFileChanges: true,
    defaultCommandTimeout: 4000,
    // baseUrl: "https://opensource-demo.orangehrmlive.com/",

    setupNodeEvents(on, config) {
      on('task', {downloadFile}) 
    },
  },
});
