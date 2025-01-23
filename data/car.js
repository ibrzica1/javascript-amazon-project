

class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = carDetails.speed;
    this.isTrunkOpen = carDetails.isTrunkOpen;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, trunk is ${trunkStatus}`);
  }

  go() {
    if(this.isTrunkOpen === true) {
      console.log('Can not move if the trunk is open');
    } else {
      if (this.speed < 200) {
    this.speed += 5;}
  else {'Cant go over 200 km/h'} };
  }

  brake() {
    this.speed -= 5;
  }

  openTrunk() {
    if (this.speed === 0) {
    this.isTrunkOpen = true;
    console.log('Trunk is open');
    } else {
      console.log('Cant open trunk if moving');
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  displayInfo() {
   
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h`)
  }
}

const car1 = new Car({
brand: 'Toyota',
model: 'Corolla',
speed: 0});

const car2 = new Car({
brand: 'Tesla',
model: 'Model 3',
speed: 0,
});

console.log(car1.displayInfo());
console.log(car2);

class RaceCar extends Car {
  acceleration;
  

constructor(carDetails) {
  super(carDetails);
  this.acceleration = carDetails.acceleration;
}

  go() {
    console.log(this.speed);
    this.speed += this.acceleration;
      if (this.speed > 300) {
       this.speed = 300; }
       }
  
  openTrunk() {
    console.log('Race cars dont have trunks');
  }

  closeTrunk() {
    console.log('Race cars dont have trunks');
  }
}

const raceCar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  speed: 0,
  acceleration: 20
})

raceCar1.openTrunk();
raceCar1.go();
raceCar1.displayInfo();



