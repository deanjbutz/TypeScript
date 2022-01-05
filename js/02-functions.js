function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(addNumbers(1, 2)); // 3
// console.log(addNumbers(1,2,3); // 3
// console.log(addNumbers(1,2,3,'four')); // 3
// practice
function returnFullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
console.log(returnFullName('Dean', 'Butz')); // Dean Butz
function sayHello(name) {
    return name;
}
console.log(sayHello('Dean')); // Dean
// console.log(sayHello(1)); // 1
// practice
function validateLogin(username, password) {
    if (username === 'elevenfiftyuser' && password === 'Letmein1234!') {
        return true;
    }
    else {
        return false;
    }
}
console.log(validateLogin('elevenfiftyuser', 'Letmein1234!')); // true
console.log(validateLogin('elevenfiftyuser', 'letmein1234!')); // false
console.log(validateLogin('1150user', 'Letmein1234!')); // false
//! Optionals
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
console.log(addNumbersWithOptional(1, 2)); // undefined <br> 3
console.log(addNumbersWithOptional(1, 2, 'This is optional')); // This is optional <br> 3
// practice
function fullName(first, last, middle) {
    if (middle) {
        return "".concat(first, " ").concat(middle, " ").concat(last);
    }
    else {
        return "".concat(first, " ").concat(last);
    }
}
console.log(fullName('Dean', 'Butz', 'Joseph')); // Dean Joseph Butz
console.log(fullName('Dean', 'Butz')); // Dean Butz
//# sourceMappingURL=02-functions.js.map