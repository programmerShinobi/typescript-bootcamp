/**
 * Constructor 
 *      ===> special method yang langsung dipanggil
 *           ketika compiler meng-create object instance
 *           (pada saat di call menggunakan operator new ClassName())
 * 
 *      ==>  Menambah parameter tanda kurung '()' ke dalam class
 * 
 */

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.info(`Hello, my name is ${this.name} and age is ${this.age} years old`);
    }
}

let newPerson = new Person("FaQih", 27);
newPerson.sayHello();
