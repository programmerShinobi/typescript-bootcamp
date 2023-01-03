class Cars {
    protected brand: string =``;
    protected speed: number=0;
    protected price: number=0;
    
    getBrand(): string{
        return `Merk mobil ini ${this.brand}`; // this. untuk call atribute di dalam class itu sendiri
    }

    getPrice() {
        return `Harga mobil ini ${this.price}`;
    }

    getSpeed() {
        return `Merk mobil ${this.brand} dengan kecepatan ${this.price} ini memiliki kecepatan ${this.speed}`;
    }

    setBrand(brand: string) {
        this.brand = brand;
    }
    
    setSpeed(speed: number) {
        this.speed =speed
    }

    setPrice(price: number) {
        this.price = price;
    }
}

let Toyota = new Cars();
Toyota.setBrand('Toyota Avanza');
Toyota.setSpeed(1000);
Toyota.setPrice(150000000);

console.info(Toyota.getBrand());
console.info(Toyota.getSpeed());
console.info(Toyota.getPrice());
