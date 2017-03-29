


function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  };
}

function addCar(cars, newCar) {
  cars.push(newCar);
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  return "Picked up passenger. Car now has " + car.passengers + " passengers.";
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Missisauga';
  } else if (car.city === 'Missisauga') {
    return 'London';
  } else if (car.city === 'London') {
    return 'Toronto';
  }
}

function drive(car) {
  if (car.gas < distance) {
    return fillUpGas(car);
  }
  car.city = getDestination(car);
  car.gas -= distance;
  return "Drove to " + car.city + "."
}

function fillUpGas(car) {
  car.gas = 100;
  return "Filled up on gas.";
}

function dropOffPassengers(car) {
  var oldPassengers = car.passengers;
  car.passengers = 0;
  return 'Dropped off ' + oldPassengers + ' passengers.'
}

function act(car) {
  if (car.gas < 20) {
    return fillUpGas(car);

  } else if (car.passengers < 3) {
    return pickUpPassenger(car);

  } else {
    if (car.gas < distance) {
      return fillUpGas(car);
    }
    var droveTo = drive(car);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + " " + passengersDropped;
  }
}

function commandFleet(cars) {
  for (var i=0; i < cars.length; i++) {
    var car = cars[i];
    var action = act(car);
    console.log(action);
  }
  console.log('---');
}

function addOneCarPerDay(cars, numDays) {
  for (var i=0; i < numDays; i++) {
    var newCar = getNewCar();
    addCar(cars, newCar);
    commandFleet(cars);
  }
}

var cities = ['Toronto', 'Missisauga', 'London'];
var distance = 50;
var cars = [];

addOneCarPerDay(cars, 10);
