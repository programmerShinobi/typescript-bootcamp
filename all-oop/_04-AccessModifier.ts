/**
 * Access Modifier
 *      ===> Keyword (public, protected, private) yang digunakan
 *           untuk mengkontrol access data attributes 
 * 
 *  -> public : dapat diakses dimanapun
 *  -> protected : dapat diakses hanya di class utama & class turunannya (parent & child)
 *  -> private : dapat diakses hanya di class utama (parent)
 * 
 */

class Person {
    public name: string;
    private age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    sayHello():string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }

    displaySalary(): string {
        return `My salary is  ${this.salary}`;
    }
}

class Employee extends Person{
    displaySalary():string{
        return `My salary is ${this.salary}`;
    }
}

let newPerson = new Person ("FaQih", 27, 10000);
console.info(newPerson.name);
console.info(newPerson.displaySalary());
console.info(newPerson.sayHello());

let newEmployee = new Employee("iLmi", 23, 9000);
console.info(newEmployee.name);
console.info(newEmployee.displaySalary());
console.info(newEmployee.sayHello());