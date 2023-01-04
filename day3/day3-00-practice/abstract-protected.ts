// abstraction
abstract class EmployeeProtected {
    constructor(protected firstName: string, private lastName: string) {}
    abstract getSalary(): number; 
    abstract getFirstName(): string;
    fullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    componentStatement(): string{
        return `${this.fullName()} makes ${this.getSalary()} a month`;
    }   
}

class FUllTimeEmployeeProtected extends EmployeeProtected {
    constructor(firstName: string, lastName: string, protected rate: number, protected hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
    getFirstName(): string {
        return `${this.firstName}`;
    }
}

let emp2 = new FUllTimeEmployeeProtected('FaQih', 'shinobi', 50000, 30);
console.info(emp2.getSalary());
console.info(emp2.componentStatement());
// console.info(emp.getFirstName());

