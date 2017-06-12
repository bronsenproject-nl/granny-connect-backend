'use strict'

const routes = require('express').Router()

module.exports = (context) => {
  const category_service = require('../services/caretaker')(context.dbconn)

  const authenticate = (req, res, next) => {
    if (context.config.get('env') === 'production' ) {
      return context.doorman.shouldBeAuthenticated(req, res, next)
    }
    context.logger.debug('Do not check authentication in mode '+context.config.get('env'))
    next()
  }

  const shouldHaveRole = (role) => {
    return (req, res, next) => {
      context.logger.debug("Check whether user '"+(req.user && req.user.id)+"' has role '"+role+"'")
      if (!(req.user && req.user.roles && req.user.roles[role])) {
        return res.sendStatus(500)
      }
      next()
    }
  }

  // returns all categories
  // curl -v -H 'Authorization: Bearer <token>' localhost:11000/category
  routes.get('/', authenticate, shouldHaveRole('admin'), (req, res, next) => {
    category_service.findAll()
      .then((categories) => res.json(categories))
      .catch((reason) => res.sendStatus(500))
  })


  // curl -v -H 'Authorization: Bearer <token>' localhost:11000/category/<categoryid>
  routes.get('/:caretaker_id', authenticate, (req, res, next) => {
    category_service.findById(req.params.category_id)
      .then((pkg) => res.json(pkg))
      .catch((reason) => res.sendStatus(500))
  })


  return routes
}
