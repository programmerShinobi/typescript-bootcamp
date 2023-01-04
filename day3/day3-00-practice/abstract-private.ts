// abstraction

abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
        
    }
    abstract getSalary(): number;
    fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    componentStatement(): string{
        return `${this.fullName()} makes ${this.getSalary()} a month`;
    }
    
}

class FUllTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, protected rate: number, protected hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

let emp = new FUllTimeEmployee('FaQih', 'shinobi', 50000, 30);
console.info(emp.getSalary());
console.info(emp.componentStatement());

