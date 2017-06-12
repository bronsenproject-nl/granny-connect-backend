'use strict'

// usage:
//   node index --env development
const pkg     = require('../package.json')
const config  = require('./lib/config')(pkg.name)

const express = require('express')
const app     = express()

const log4js  = require('log4js')
const logger  = log4js.getLogger(pkg.name)

const cors    = require('cors')
const helmet  = require('helmet')

const Context = require('./context')


/* start service */
const server = app.listen(config.get('port'), () => {
  logger.info('Service %s listening at http://%s:%s in mode %s', pkg.name, server.address().address, server.address().port, config.get('env') )

  /* assume app is a microservice */
  // Only trust x-forwarded-for header if this is a not front-facing app. Assume front-facing app will be listening to a trusted port (80|443)
  if (server.address().port !== 80 && server.address().port !== 443) app.set('trust proxy', 'loopback, linklocal, uniquelocal')

  // set CORS for all routes
  app.use(cors())

  // guard app
  app.use(helmet())

  // setup an application context
  const context = new Context(
      logger
     ,config
     ,require('./lib/doorman')(config.get('token:secret'))
     ,require('./lib/dbconn')(config)
  )

  /* load routes */
//  app.use('/auth', require('./routes/auth')(context))
  app.use('/caregiver', require('./routes/caregiver')(context))
  app.use('/caretaker', require('./routes/caretaker')(context))
})

