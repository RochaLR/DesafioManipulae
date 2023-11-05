const { defineConfig } = require("cypress");
const fs = require('fs')
const fse = require('fs-extra')

const getFiles = () => {
  if (fs.existsSync(`${__dirname}/cypress/screenshots`)) {
    return fs.readdirSync(`${__dirname}/cypress/screenshots`, 'ascii') // leitura de arquivos dentro de screenshots
  }

  return []
}

const rmFiles = (path) => {
  fse.removeSync(`${__dirname}/cypress/screenshots`) // exclusao da pasta screenshots para evitar envios duplicados
  return null
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        getFiles: () => {
          return getFiles()
        },
        rmFiles: () => {
          return rmFiles()
        },
      })
    },
  },
});

