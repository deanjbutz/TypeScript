//! Properties

class Person {
    firstName: string;
    lastName: string;

    //! Methods
    sayHello(){
        console.log('Hello', this.firstName);
    }

    sayHelloToFullname(){
        console.log('Hello', this.firstName, this.lastName);
        
    }
}
let phil: Person = new Person();
phil.firstName = "Phil";
phil.lastName = "Lesh";
phil.sayHello();
phil.sayHelloToFullname();

let sheriff: Person = new Person();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullname();

//! Constructors
class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}
let battleship: Game = new Game('Battleship', 'Hasbro');
console.log(battleship); // Game {gameName: 'Battleship', gameMaker: 'Hasbro'}

//! Inheritence
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 140;
myCar.make = 'Toyota'

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

// practice

class Animal {
    species: string;
    class: string;
    isBipedal: boolean;
}

class Bear extends Animal {
    hibernates: boolean;
}

class Tiger extends Animal {
    isRussian: boolean;
}

let blackBear = new Bear();
blackBear.species = 'Black Bear'
blackBear.class = "Mammal"
blackBear.hibernates = true;
console.log(blackBear); // Bear {species: 'Black Bear', class: 'Mammal', hibernates: true}

let bengalTiger = new Tiger();
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

class Store {
    constructor(public name: string, public city: string){}
}
let ikea: Store = new Store('Ikea', 'Cincinnati')

//! Accessors

class Employee extends Person {
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
let salaryResult: string = newEmployee.getSalary();
console.log('The salary is:', salaryResult);
