class Car {
    static getSpecs(car) {
        
        const entries = Object.entries(car);
        let message = [];
        for (let i = 0; i < entries.length; i++) {
      
            let value = entries[i][1];
            let key = entries[i][0];
  
            message.push(`${key}: ${value}`)
        }   
        return message.join(', ');
    }
    constructor({ maxSpeed, price }) {
        this.maxSpeed = maxSpeed
        this.speed = 0
        this.isOn = false
        this.distance = 0
        this.price = price 
  }
    get priceCar() {
      return this._price
  }
    set priceCar(value) {
      this._price = value
  }
    turnOn() {  
        this.isOn = !this.isOn
      return !this.isOn  
  }
    turnOff() {
      this.isOn = !this.isOn
      this.speed = 0
      return !this.isOn && this.speed
  }
    accelerate(value) {
        if (value <= this.maxSpeed) {
            this.speed += value;
        }
        if (value > this.maxSpeed) {
            this.speed = this.maxSpeed
        }
        return value;
  }
    decelerate(value) {
        this.speed = this.speed - value < 0 ? 0 : this.speed - value;
        // if (this.speed - value > 0) {
        //   this.speed -= value
        // }
        // if (this.speed - value < 0) {
        //     this.speed = 0
        // }
        return this.speed
  }
    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed
        }
        
        return this.distance
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
//'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
// console.log(Car.split(' '))

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000