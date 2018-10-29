
var cars = []
addOneCarPerDay(cars, 8);


function getNewCar() {
  var car = {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  }
  return car
}


function addCar(cars, new_car) {
  cars.push(new_car);
  console.log("Adding new car to fleet. Fleet size is now " + cars.length);
}


function addOneCarPerDay(cars, numdays) {
  for (var i = 0; i < numdays; i++) {
    var new_car = getNewCar();
    addCar(cars, new_car);
    commandFleet(cars);
  }
}

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var car = cars[i]
    var action = act(car)
    console.log("Car:" + [i]  + " " + action);
  }
}

function act(car) {
  var distance_between_cities = 50;
  if (car['gas'] < 60) {
    return fillUpGas(car);
  } else if (car['passengers'] < 10) {
    return pickUpPassenger(car);
  } else {
      if (car['gas'] < distance_between_cities) {
        return fillUpGas(car);
    }
    var drove_to = drive(car, distance_between_cities)
    return drove_to
  }
}

function pickUpPassenger(car) {
  car['passengers'] += 1;
  car['gas'] -= 10;
  return ("Picked up passenger. Car now has " + car.passengers + " passengers");

}

function fillUpGas(car) {
  var old_gas = car['gas'];
  car['gas'] = 100;
  return "Filled up to " + getGasDisplay(car['gas']) + " from old gas " + getGasDisplay(old_gas)
}
// return `Filled up to ${getGasDisplay(car.gas)} from old gas ${getGasDisplay(car.gas)}`

function getGasDisplay(car) {
  return car+"%"
}

function drive(car, city_distance) {
  if (car['gas'] < city_distance) {
    return fillUpGas(car);
  }
}

function getDestination(car) {
  if (car['city'] === 'Toronto'); {
    return 'Mississauga';
  } else if (car['city'] === 'Mississauga') {
      return 'London';
  }
  // } else if (car['city'] === 'London') {
  //   return 'Toronto';
  // }
}



// function pickUpPassenger(car) {
//   car['passengers'] += 1
//   car('gas') -= 10
//   console.log("Picked up passenger. Car now has " + car.passengers + " passengers");
// }
//
// function getDestination(car) {
//   if (car('city') === 'Toronto') {
//     'Mississauga'
//   } else if (car('city') === 'Mississauga') {
//     'London'
//   } else if (car('city') === 'London') {
//     'Toronto'
//   }
// }
