var username = "instructor";
var password = "Letmein1234";
var instructorId = 5;
//! Number
var age = 40;
var currentYear = 2018;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//! String
var companyName;
companyName = 'Eleven Fifty';
var appName = 'Twitter';
appName = 'Instragram';
//! Boolean
var isLoggineIn = true;
var isGoldLevelUser = true;
//! Array
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);
//! Any
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//! Void
function sayHelloToAll() {
    console.log('Hello to all!');
}
;
//! Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//! Tuple
var usernameAndId;
usernameAndId = [1, 'kennisreally40'];
// usernameAndId = ['kenn26', 2]; //! this wouldn't work
//! Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//# sourceMappingURL=01-types.js.map