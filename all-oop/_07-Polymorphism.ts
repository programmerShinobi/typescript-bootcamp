/**
 * Polymorphism
 *      ===>  Kemampuan sebuah object dimana tipe object-nya
 *            dapat kita ubah menjadi object lain
 *            dengan syarat dua object yang berbeda
 *            memiliki relasi parent-child
 * 
 */

class Animal {
    makeSound() {
        console.log("Animal make different sounds :")
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!")
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow meow!")
    }
}

class Cow extends Animal {
    makeSound() {
        console.log("Moo moo!")
    }
}
let animal = new Animal()
animal.makeSound(); // Animal make different sounds :

let animals: Animal[] = [new Dog(), new Cat(), new Cow()];

for (let animal of animals) {
    animal.makeSound();
}

/*
    Output :
        - Woof woof!
        - Meow meow!
        - Moo moo!
 */

