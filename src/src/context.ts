
/*
  const Context = require('./context')
  let context = new Context(logger, config, doorman, dbconn)
*/

class Context {
  // TODO: logger:Logger etc
  logger:any
  config:any
  doorman:any
  dbconn:any

  constructor(logger:any, config:any, doorman:any, dbconn:any) {
    this.logger = logger
    this.config = config
    this.doorman = doorman
    this.dbconn = dbconn
    if (!(logger && config && doorman && dbconn)) {
      throw new Error('Incorrect context')
    }
  }
}

export = Context

