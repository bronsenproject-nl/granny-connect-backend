
/*
  const CareTaker = require('./transfer/CareTaker')
  let p = new CareTaker(...);
*/

class CareTaker {
  id:string
  name:string

  constructor (id:string, name:string) {
    this.id = id
    this.name = name
  }
}

export = CareTaker
