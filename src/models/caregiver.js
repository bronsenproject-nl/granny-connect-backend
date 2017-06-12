'use strict'


module.exports = (dbconn) => {

  return {
    findAll : () => {
      return new Promise((resolve, reject) => {
        dbconn.query('SELECT * FROM caregiver', [], (error, categories) => {
          if (error) return reject(error)
          resolve(caregivers)
        })
      })
    }
   ,findById : (caregiver_id) => {
      return new Promise((resolve, reject) => {
        dbconn.query('SELECT * FROM caregiver WHERE id=?', [caregiver_id], (error, category) => {
          if (error) return reject(error)
          resolve(caregiver)
        })
      })
    }
  }
}

