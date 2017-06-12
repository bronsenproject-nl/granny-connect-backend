'use strict'


module.exports = (dbconn) => {
  const CareTeam = require('../transfer/CareTeam')
  const careteam_model = require('../models/careteam')(dbconn)

  const mapDbObjectToTransferObject = (careteam_row) => {
    return new CareTeam(careteam_row.careteam_id
                       ,careteam_row.name)
  }

  return {
    findAll : () => {
      return new Promise((resolve, reject) => {
        careteam_model.findAll()
          .then((careteams) => {
            let cteams = []
            careteams.forEach((careteam) => {
              cteams.push(mapDbObjectToTransferObject(careteam))
            })
            resolve(cteams)
          })
          .catch((reason) => reject(reason))
        })
    }
   ,findById : (careteam_id) => {
      return new Promise((resolve, reject) => {
        careteam_model.findById(careteam_id)
          .then((careteams) => {
            let cteams = []
            careteams.forEach((careteam) => {
              cteams.push(mapDbObjectToTransferObject(careteam))
            })
            resolve(cteams)
          })
          .catch((reason) => reject(reason))
        })
    }
  }
}

