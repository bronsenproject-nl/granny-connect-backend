'use strict'


module.exports = (dbconn) => {
  const CareTaker = require('../transfer/CareTaker')
  const caretaker_model = require('../models/caretaker')(dbconn)

  const mapDbObjectToTransferObject = (caretaker_row) => {
    return new CareTaker(caretaker_row.caretaker_id
                       ,caretaker_row.name)
  }

//  return {
//    findByEventId : (event_id) => {
//      return new Promise((resolve, reject) => {
//        category_model.findByEventId(event_id)
//          .then((categories) => {
//            let ctgrs = []
//            categories.forEach((category) => {
//              ctgrs.push(mapDbObjectToTransferObject(category))
//            })
//            resolve(ctgrs)
//          })
//          .catch((reason) => reject(reason))
//      })
//    }
//  }
}

