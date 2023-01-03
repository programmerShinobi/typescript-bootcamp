class Car {
    brand: string =``;
    speed: number=0;
    price: number=0;
    
    getBrand(): string{
        return `Merk mobil ini ${this.brand}`; // this. untuk call atribute di dalam class itu sendiri
    }

    getPrice() {
        return `Harga mobil ini ${this.price}`;
    }

    getSpeed() {
        return `Merk mobil ${this.brand} dengan kecepatan ${this.price} ini memiliki kecepatan ${this.speed}`;
    }
}

let mobilBaru = new Car();
mobilBaru.brand = 'Toyota';
mobilBaru.speed = 1000;
mobilBaru.price = 150000000;


console.info(mobilBaru.getBrand());


