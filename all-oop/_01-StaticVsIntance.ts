class Car {
    licensePlate: string = '';
    rpm: number = 0;
    speed: number = 0;
    gear: number = 0;
    fuelLevel: number = 0;
    engineTemperatur: number = 0.0;

    static totalCar = 0;
}

class CarClient{
    static Client(): number|string {
        // call static attribute
        Car.totalCar = 4;
        
        // call instance attribute
        let car = new Car();
        car.licensePlate = "D 1001 HJ";

        return Car.totalCar +`\n`+ car.licensePlate;
    }

    newClient() {
        // call static attribute
        Car.totalCar = 10;

        // call instance attribute
        let car = new Car();
        car.licensePlate = "D 1002 HJ";

        return Car.totalCar + `\n` + car.licensePlate;
    } 
}


// view static method
console.info(CarClient.Client());

// view instance method
let newCarClient = new CarClient();
console.info(newCarClient.newClient());
