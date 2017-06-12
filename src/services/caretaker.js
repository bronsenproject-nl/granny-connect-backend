'use strict'


module.exports = (dbconn) => {
  const CareTaker = require('../transfer/CareTaker')
  const caretaker_model = require('../models/caretaker')(dbconn)

  const mapDbObjectToTransferObject = (caretaker_row) => {
    return new CareTaker(caretaker_row.caretaker_id
                        ,caretaker_row.name)
  }

  return {
    findAll : () => {
      return new Promise((resolve, reject) => {
        caretaker_model.findAll()
          .then((caretakers) => {
            let ctakers = []
            caretakers.forEach((caretaker) => {
              ctakers.push(mapDbObjectToTransferObject(caretaker))
            })
            resolve(ctakers)
          })
          .catch((reason) => reject(reason))
      })
    }
    ,findById : (caretaker_id) => {
      return new Promise((resolve, reject) => {
        caretaker_model.findById(caretaker_id)
          .then((caretakers) => {
            let ctakers = []
            caretakers.forEach((caretaker) => {
              ctakers.push(mapDbObjectToTransferObject(caretaker))
            })
            resolve(ctakers)
          })
          .catch((reason) => reject(reason))
      })
    }
  }

}

