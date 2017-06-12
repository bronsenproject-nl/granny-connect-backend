'use strict'

const routes     = require('express').Router()
const bodyParser = require('body-parser')

module.exports = (context) => {

  const user_model  = require('../models/user')(context.dbconn)
  const User = require('../transfer/User')

  // curl -v -H 'content-type:application/json' -d '{"email": "tom.ritsema@hasslefree.nl", "password": "tompwd"}' localhost:11000/auth/login
  routes.post('/login', bodyParser.json({ extended: true }), (req, res, next) => {
    context.doorman.login(req, res, () => { return user_model.findByEmailAndPassword(req.body.email, req.body.password) })
  })


  // curl -v -H 'content-type:application/json' -d '{"username": "tom", "password": "tompwd"}' localhost:11000/auth/signup
  routes.post('/signup', bodyParser.json({ extended: true }), (req, res, next) => {
    let user = new User(req.body.id, req.body.fullname, req.body.cellphone, req.body.address, req.body.email, req.body.notes)
    user_model.save(user).then((id) => {
      res.json(id)
    })
    .catch((reason) => {
      context.logger.error(reason)
      res.sendStatus(500)
    })
  })

  // https://www.joshmorony.com/creating-role-based-authentication-with-passport-in-ionic-2-part-2/
  // auth validity check, doorman returns 401 when auth token not valid
  // curl -v -H 'Authorization: Bearer <token>' localhost:11000/auth/protected
  routes.get('/protected', context.doorman.shouldBeAuthenticated, (req, res, next) => {
    return res.status(200).send('ok')
  })

  return routes
}
