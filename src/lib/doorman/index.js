'use strict'

const jwt = require('jsonwebtoken')

module.exports = (secret) => {
  return {
    // middleware
    // checks validity of token
    shouldBeAuthenticated : (req, res, next) => {
        getUserPropsFromToken(req.headers['authorization'], secret)
          .then((props) => {
            req.user = props
            return next()
          })
          .catch((reason) => {
            //console.error(reason)
            return res.sendStatus(401)
          })
    }
    // retrieveUserProps() should return a promise
   ,login : (req, res, retrieveUserProps) => {
      retrieveUserProps()
        .then((props) => {
          return respondWithToken(secret, res, props);
        })
        .catch((reason) => {
          console.error(reason)
          return res.sendStatus(401)
        })
    }
   ,logout : () => { }
  }
}


function respondWithToken(secret, res, props) {
  const token = jwt.sign({
    'props' : props
  }, secret, { 'expiresIn' : '1h' })
  res.json({ token : token })
}

// decodes token and fetches user id
function getUserPropsFromToken(token, secret) {
  return new Promise((resolve, reject) => {
    if (!token) return reject('no token found')
    const actual_token = token.replace(/^\s*Bearer\s*/, '')
    //console.log('getUserPropsFromToken, encoded '+ actual_token)
    jwt.verify(actual_token, secret, (error, decoded) => {
      //console.log('getUserPropsFromToken, decoded ', decoded)
      if (error) return reject(error)
      return resolve(decoded.props)
    })
  })
}

