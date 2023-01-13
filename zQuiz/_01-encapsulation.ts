interface Vehicle {
  getTotalVehicle(): number;
}

class Car implements Vehicle {
  private totalVehicle: number = 9;
  
  getTotalVehicle(): number {
    return this.totalVehicle;
  }
}

let car = new Car();
console.log(car.getTotalVehicle()); // Output: 9

//----------------------------------------------
interface Vehicle {
  getTotalVehicle(type: string): any;
}

class Car_2 implements Vehicle {
  private totalSUV: number = 4;
  
  getTotalVehicle(type: string): number {
    if(type === "SUV") {
      return this.totalSUV;
    } else {
      return 0;
    }
  }
}

let Car_2 = new Car_2();
console.log(car.getTotalVehicle("SUV")); // Output: 4
