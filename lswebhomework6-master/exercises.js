//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten

  return num * 10;
}

function subtractFive(num) {
  //return num after subtracting five

  return num - 5;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false

  return str1.length === str2.length;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false

  return x === y;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false

  return num < 90;
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false

  return num > 50;
}

function add(x, y) {
  //add x and y together and return the value

  return x + y;
}

function subtract(x, y) {
  //subtract y from x and return the value

  return x - y;
}

function divide(x, y) {
  //divide x by y and return the value

  return x/y;
}

function multiply(x, y) {
  //multiply x by y and return the value
  return x * y;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y

  return x % y;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if (num % 2 === 0){
    return true;
  } else{
    return false;
  }
}

function isOdd(num) {
  //return true if num is odd
  //otherwise return false
  if (num % 2 !== 0){
    return true;
  } else{
    return false;
  }
}

function square(num) {
  //square num and return the new value
  return num * num;
}

function cube(num) {
  //cube num and return the new value
  return num * num * num;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var newValue = Math.pow(num, exponent);
  return newValue;
}

function roundNumber(num) {
  //round num and return it
  return Math.round(num);
}

function roundUp(num) {
  //round num up and return it
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var str2 = '!';
  return str.concat(str2);
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  return firstName + ' '  + lastName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
    var str1 = 'Hello ';
    var str3 = '!';
    var full = str1.concat(name, str3);
    return full;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var area = width * length;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var area = base * height / 2;
  return area;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var area = Math.PI * (radius * radius);
  return Math.round(area);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  var volume = length * width * height;
  return volume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
