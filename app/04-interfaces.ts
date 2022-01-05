//! Properties
interface Animal2 {
    name: string;
    numberOfLegs: number;
}

let lassie: Animal2 = {
    name: 'Lassie',
    numberOfLegs: 4
}

//! Methods
// sayHello(name: string) : string {
//     let someNum = 1 + 2;
//     let someOtherNum = 1 + 2;
//     return name;
// }

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;
    setTimeOfPurchase(d: Date) {
        console.log('Apples purchased on ', d);
    }
}
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));