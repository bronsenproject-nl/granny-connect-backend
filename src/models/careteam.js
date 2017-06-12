'use strict'

module.exports = (dbconn) => {

  return {
    findAll : () => {
      return dbconn.any('SELECT * FROM caregiver', [])
        .then(caregivers => {
          console.log(caregivers);
        })
        .catch(error =>  {
          console.log(error);
        })
        .finally(() => {
          dbconn.end();
        });
    }
   ,findById : (caregiver_id) => {
      return dbconn.query('SELECT * FROM caregiver WHERE id=?', [caregiver_id])
        .then(caregivers => {
          console.log(caregivers);
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

