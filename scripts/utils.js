// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process')

const LCERROR = '\x1b[31m%s\x1b[0m' //red
const LCWARN = '\x1b[33m%s\x1b[0m' //yellow
const LCINFO = '\x1b[36m%s\x1b[0m' //cyan
const LCSUCCESS = '\x1b[32m%s\x1b[0m' //green

exports.__esModule = true
const logger = class {
  static error(message, ...optionalParams) {
    console.error(LCERROR, message, ...optionalParams)
  }
  static warn(message, ...optionalParams) {
    console.warn(LCWARN, message, ...optionalParams)
  }
  static info(message, ...optionalParams) {
    console.info(LCINFO, message, ...optionalParams)
  }
  static success(message, ...optionalParams) {
    console.info(LCSUCCESS, message, ...optionalParams)
  }
}
exports.logger = logger

exports.execPromise = (cmd) => {
  return new Promise(function (resolve, reject) {
    exec(cmd, function (err, stdout) {
      if (err) {
        logger.error(
          'Error when running command',
          cmd,
          '\n',
          'Run this command manually to see more details'
        )
        return reject(err)
      }
      resolve(stdout)
    })
  })
}

exports.addAfter = (content, searchText, textToAdd) => {
  return content.replace(searchText, searchText + textToAdd)
}

exports.addBefore = (content, searchText, textToAdd) => {
  return content.replace(searchText, textToAdd + searchText)
}

exports.deleteText = (content, searchText) => {
  return content.replace(searchText, '')
}
