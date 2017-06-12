'use strict'

const mysql = require('mysql')

module.exports = (config) => {
  // https://github.com/mysqljs/mysql
  return mysql.createPool({
     connectionLimit : 10
    ,database  : config.get('database:database')
    ,host      : config.get('database:host')
    ,user      : config.get('database:user')
    ,password  : config.get('database:password')
    //,debug     : true
  })
}
