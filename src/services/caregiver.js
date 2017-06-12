'use strict'


module.exports = (dbconn) => {
  const CareGiver = require('../transfer/CareGiver')
  const caregiver_model = require('../models/caregiver')(dbconn)

  const mapDbObjectToTransferObject = (caretaker_row) => {
    return new CareGiver(caregiver_row.caregiver_id
                        ,caregiver_row.name)
  }

  return {
    findAll : () => {
      return new Promise((resolve, reject) => {
        caregiver_model.findAll()
          .then((caregivers) => {
            let cgivers = []
            caregivers.forEach((caregiver) => {
              cgivers.push(mapDbObjectToTransferObject(caregiver))
            })
            resolve(cgivers)
          })
          .catch((reason) => reject(reason))
        })
   }
  ,findById : (caregiver_id) => {
      return new Promise((resolve, reject) => {
        caregiver_model.findById(caregiver_id)
          .then((caregivers) => {
          let cgivers = []
          caregivers.forEach((caregiver) => {
            cgivers.push(mapDbObjectToTransferObject(caregiver))
          })
          resolve(cgivers)
        })
        .catch((reason) => reject(reason))
      })
    }
  }
}

