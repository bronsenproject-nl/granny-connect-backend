'use strict'

// https://github.com/vitaly-t/pg-promise
// last () are very important

// connnect to PostGreSQL instance via commandline
// psql -h <host> -p <port> -U <username> -W <password> <database>
const pgp = require('pg-promise')();

module.exports = (config) => {
  var connection = {
     host:      config.get('database:host') // server name or IP address;
    ,port:      config.get('database:port')
    ,database:  config.get('database:schema')
    ,user:      config.get('database:user')
    ,password:  config.get('database:password')
  }
  return pgp(connection); // database instance;
}