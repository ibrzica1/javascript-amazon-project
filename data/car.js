

class Car {
  brand;
  model;
  speed = 0;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }

  go() {
    this.speed += 5;
  }

  brake() {
    this.speed -= 5;
  }
}

const car1 = new Car({
brand: 'Toyota',
model: 'Corolla',
speed: 0});

const car2 = new Car({
brand: 'Tesla',
model: 'Model 3',
speed: 0});

console.log(car1);
console.log(car2);
car1.go();
car1.go();
car2.go();

car1.displayInfo();
car2.displayInfo();