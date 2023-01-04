/**
 * Override
 * Class yang menghubah statement
 */


class sum {
    operation(a: number, b: number): number {
        return a + b
    }
}

class multiply extends sum {
    operation(a: number, b: number): number {
        return a * b;
    }
}

let multi = new multiply();
let result = multi.operation(10, 20);

console.info(`Result after performing calling the operation method is ` + result);

console.info(`-----------------------------------------------------------`);

class EmployeeInterface {
    about(): void {
        console.info(`Inside the employee class `);
    }
}

class Men extends EmployeeInterface {
    gender: string = "Male";
    about(): void {
        super.about();
        console.info(`The gender of the employee is ` + this.gender);
    }
}

let new_men = new Men();
new_men.about();