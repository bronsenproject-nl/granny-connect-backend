'use strict'


module.exports = (dbconn) => {

  return {
    findAll : () => {
      return new Promise((resolve, reject) => {
        dbconn.query('SELECT * FROM caretaker', [], (error, categories) => {
          if (error) return reject(error)
          resolve(caretakers)
        })
      })
    }
   ,findById : (caretaker_id) => {
      return new Promise((resolve, reject) => {
        dbconn.query('SELECT * FROM caretaker WHERE id=?', [caretaker_id], (error, category) => {
          if (error) return reject(error)
          resolve(caretakers)
        })
      })
    }
  }
}

