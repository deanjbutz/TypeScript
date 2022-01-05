
let username: string = "instructor";
let password: string = "Letmein1234";
let instructorId: number = 5;


//! Number
let age: number = 40;
let currentYear: number = 2018;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//! String
let companyName: String;
companyName = 'Eleven Fifty';

let appName: string = 'Twitter';
appName = 'Instragram';

//! Boolean
let isLoggineIn: boolean = true;
let isGoldLevelUser: boolean = true;

//! Array
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya'];
let allScores: Array<number> = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);

//! Any
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//! Void
function sayHelloToAll() : void {
    console.log('Hello to all!');
};

//! Null and Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//! Tuple
let usernameAndId: [number, string];
usernameAndId = [1, 'kennisreally40'];
// usernameAndId = ['kenn26', 2]; //! this wouldn't work

//! Enum
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2];
console.log(cardType);