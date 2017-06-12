'use strict'


module.exports = (dbconn) => {
  const CareTaker = require('../transfer/CareTaker')
  const caretaker_model = require('../models/caretaker')(dbconn)

  const mapDbObjectToTransferObject = (caretaker_row) => {
    return new CareTaker(caretaker_row.caretaker_id
                       ,caretaker_row.name)
  }

  return {
      findByAll : => {
        return new Promise((resolve, reject) => {
          caretaker_model.findByAll()
            .then((caretakers) => {
              let cts = []
              caretakers.forEach((caretaker) => {
                cts.push(mapDbObjectToTransferObject(caretaker))
              })
              resolve(cts )
            })
            .catch((reason) => reject(reason))
        })
      }
    }

  return {
    findById : (caretaker_id) => {
      return new Promise((resolve, reject) => {
        caretaker_model.findById(caretaker_id)
          .then((caretakers) => {
            let cts = []
            caretakers.forEach((caretaker) => {
              cts.push(mapDbObjectToTransferObject(caretaker))
            })
            resolve(cts )
          })
          .catch((reason) => reject(reason))
      })
    }
  }
}

