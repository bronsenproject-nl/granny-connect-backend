
/*
  const CareGiver = require('./transfer/CareGiver')
  let p = new CareGiver(...);
*/

class CareGiver {
  id:string
  name:string

  constructor (id:string, name:string) {
    this.id = id
    this.name = name
  }
}

export = CareGiver
