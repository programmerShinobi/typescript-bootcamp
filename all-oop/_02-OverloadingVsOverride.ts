// Overloading : Mengubah parameter
class Calculator {
    add(a: number|string, b: number|string ): number|string{
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        } else {
            return a.toString() + b.toString()
        }
    }
}

let newCalculator = new Calculator();
console.info(newCalculator.add(1, 2));
console.info(newCalculator.add('Hello ', 'Shinobi'));


//--------------------------------------------------------------
//--------------------------------------------------------------


// Override : Mengubah statement
class Shape {
    area(): number{
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let newShape = new Shape();
console.info(newShape.area());

let newCircle = new Circle(5);
console.info(newCircle.area());