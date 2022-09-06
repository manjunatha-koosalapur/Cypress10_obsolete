const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true,
    defaultCommandTimeout: 6000,
    "baseUrl": "https://opensource-demo.orangehrmlive.com/",
    setupNodeEvents(on, config) {
      on('task', {downloadFile}) 
    },
  },
});
