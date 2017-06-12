'use strict'


module.exports = (dbconn) => {

  return {
    findAll : () => {
      return dbconn.any('SELECT * FROM caretaker', [])
        .then(caretakers => {
          console.log(caretakers);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          dbconn.end();
        });
    }
   ,findById : (caretaker_id) => {
      return dbconn.query('SELECT * FROM caretaker WHERE id=?', [caretaker_id])
        .then(caretakers => {
          console.log(caretakers);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          dbconn.end();
        });
    }
  }
}

