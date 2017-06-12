'use strict'

const nconf  = require('nconf');
const util   = require('util');

module.exports = () => {
  var defaults = {
    'env'       : 'production'
   ,'port'      : 11000
   ,'database'  : { 
      database    : 'grannyconnect'
     ,host        : 'database'
     ,user        : 'root'
     ,password    : 'my-secret'
    }
   ,'token'     : {
      secret : '87qiwudIUD&@^uy3e9qwdsoqlsn'
    }
  };

  nconf
    /* cascading config */
    // precede arguments
    .argv()
    // over a config file
    //.file({ file: '/etc/somewhere/somefile.json' })
    // over environment vars
    .env()
    // over defaults
    .defaults(defaults)
  ;

  Object.keys(nconf.stores).forEach(function(key) {
    console.log('Reading config from '+ key +' '+ (nconf.stores[key].file ? '('+nconf.stores[key].file+')' : ''));
  });
  console.log('Config leads to:\n'+ util.inspect(nconf.get()));

  return nconf;
};

