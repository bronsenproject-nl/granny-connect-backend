'use strict'


module.exports = (dbconn) => {
  const CareGiver = require('../transfer/CareGiver')
  const caregiver_model = require('../models/caregiver')(dbconn)

  const mapDbObjectToTransferObject = (caretaker_row) => {
    return new CareGiver(caregiver_row.caregiver_id
                       ,caregiver_row.name)
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

