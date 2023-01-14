/**
 * Abstract
 *      ===> Blueprint atau template untuk superclass(parent class),
 *           parent class akan mewarisi attribute
 *           dan method dari abstract class.
 *      
 *      ===> Abstract class masih sama dengan interface, 
 *           dimana method di implementasikan di subclass.
 * 
 */

abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log("Car started.");
    }
    stop(): void {
        console.log("Car stopped.");
    }
}

class Motorcycle extends Vehicle {
    start(): void {
        console.log("Motorcycle started.");
    }
    stop(): void {
        console.log("Motorcycle stopped.");
    }
}

let car = new Car();
car.start(); // Output: Car started.
car.stop(); // Output: Car stopped.

let motorcycle = new Motorcycle();
motorcycle.start(); // Output: Motorcycle started.
motorcycle.stop(); // Output: Motorcycle stopped.

