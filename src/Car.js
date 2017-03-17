function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.color = color;
  this.seats = seats;

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.passengers = passengers || [];
}


Car.prototype.sell = function(newOwner) {
  this.previousOwners.push(this.owner)
  this.owner = newOwner
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function() {
  this.running = true
}

Car.prototype.off = function () {
  this.running = false
}

Car.prototype.driveTo = function (place) {
  if (this.running === true) {
    console.log("Car is driving to " + place)
    return true
  }
  return false
}

Car.prototype.park = function () {
  if (this.running !== true) {
    return true
  }
  return false
}

Car.prototype.pickUp = function (newPassenger) {
  if (this.running === true && this.passengers.length < this.seats - 1) {
    this.passengers.push(newPassenger)
    return true
  }
  return false
}

Car.prototype.dropOff = function (newPassenger) {
  if (this.passengers.includes(newPassenger) && this.running === true) {
    this.passengers.splice(this.passengers.indexOf(newPassenger),1)
    return true
  }
  return false
}

Car.prototype.passengerCount = function () {
  return this.passengers.length
}
// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
