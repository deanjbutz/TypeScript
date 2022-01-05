//! Properties
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    //! Methods
    Person.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    Person.prototype.sayHelloToFullname = function () {
        console.log('Hello', this.firstName, this.lastName);
    };
    return Person;
}());
var phil = new Person();
phil.firstName = "Phil";
phil.lastName = "Lesh";
phil.sayHello();
phil.sayHelloToFullname();
var sheriff = new Person();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullname();
//! Constructors
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
console.log(battleship); // Game {gameName: 'Battleship', gameMaker: 'Hasbro'}
//! Inheritence
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 140;
myCar.make = 'Toyota';
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
// practice
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var blackBear = new Bear();
blackBear.species = 'Black Bear';
blackBear.class = "Mammal";
blackBear.hibernates = true;
console.log(blackBear); // Bear {species: 'Black Bear', class: 'Mammal', hibernates: true}
var bengalTiger = new Tiger();
bengalTiger.class = "Mammal";
bengalTiger.isRussian = false;
console.log(bengalTiger); // Tiger {class: 'Mammal', isRussian: false}
//! Parameter Properties
// class Store {
//     constructor(name: string; city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
// let ikea: Store = new Store('Ikea', 'Cincinnati')
//? OR 
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Cincinnati');
//! Accessors
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
var salaryResult = newEmployee.getSalary();
console.log('The salary is:', salaryResult);
//# sourceMappingURL=03-classes.js.map