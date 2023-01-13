class vehiclePurchase {
    noPolice: string;
    vehicleType: string;
    year: number;
    price: number;
    taxInYear: number;
    seat: number;
    vehicles: vehiclePurchase[] = [];

    constructor(
        noPolice: string = '',
        vehicleType: string = '',
        year: number = 0,
        price: number = 0,
        taxInYear: number = 0,
        seat: number = 0
    ) {
        this.noPolice = noPolice;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.taxInYear = taxInYear;
        this.seat = seat;
    }

    // No. 1 : Menampilakn hasil dari fungsi GetTotalVehicle : TotalRow()
    GetTotalVehicle(): object{
        let count = 0;

        /**
         * Pengecekan setiap objek dari kelas vehiclePurchase
         * yang disimpan dalam array "this.vehicles".
         */
        for (let vehicle of this.vehicles) {
            count++
        }
        return {
            InterfaceMethod : 'GetTotalVehicle()',
            ReturnValue : count
        }
    }

    // No. 2 : Menampilkan hasil dari fungsi GetTotalVehicle berdasarkan VehicleType : TotalRow(VehicleType)
    GetTotalVehicleType(vehicleType: string): object {
        // deklarasikan count
        let count = 0;

        /**
         * Pengecekan setiap objek dari kelas vehiclePurchase
         * yang disimpan dalam array "this.vehicles".
         */
        for (let vehicle of this.vehicles) {
            if (vehicle.vehicleType === vehicleType) {
                count++;
            }
        }
        
        // Mengembalikan nilai dari variabel 'idCount'
        return {
            InterfaceMethod : `GetTotalVehicle(${vehicleType})`,
            ReturnValue : count
        }
    }
    
} 

class income extends vehiclePurchase {
    transactionDate: Date = new Date();
    rent: number = 0;
    driver: number = 0;
    order: number = 0;
    orderPerKM: number = 0;
    total: number = 0;
    vehicles: income[]=[];

    constructor(
        noPolice: string = '',
        vehicleType: string = '',
        year: number = 0,
        price: number = 0,
        taxInYear: number = 0,
        seat: number = 0,
        transactionDate: Date = new Date(),
        rent: number = 0,
        driver: number = 0,
        order: number = 0,
        orderPerKM: number = 0,
        total: number = 0
    ) {
        super(noPolice, vehicleType, year, price, taxInYear, seat);
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKM = orderPerKM;
        this.total = total;
    }

    // No. 3 ~ 6 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
    GetTotalIncomeVehicle(vehicleType: string): object {
        // deklarasikan count
        let count = 0;

        if (vehicleType) {
            /**
             * Pengecekan setiap objek dari kelas vehiclePurchase
             * yang disimpan dalam array "this.vehicles".
             */
            for (let vehicle of this.vehicles) {
                if (vehicle.vehicleType === vehicleType) {
                    count+=vehicle.total
                }
            }
        } else {
            /**
             * Pengecekan setiap objek dari kelas vehiclePurchase
             * yang disimpan dalam array "this.vehicles".
             */
            for (let vehicle of this.vehicles) {
                count+=vehicle.total
            }
        }

        
        // Mengembalikan nilai dari variabel 'idCount'
        return {
            InterfaceMethod : `GetTotalIncomeVehicle(${vehicleType})`,
            ReturnValue : count
        }
    }

}

// Membuat objek dari kelas vehiclePurchase
let iN1 = new income('D 1001 UM', 'SUV', 2010, 350000000, 350000000/100, 4, new Date(2023,1,10), 500000, 150000,0,0,650000);
let iN2 = new income('D 1002 UM', 'SUV', 2010, 350000000, 350000000/100, 4, new Date(2023,1,10), 500000, 150000,0,0,650000);
let iN3 = new income('D 1003 UM', 'SUV', 2010, 350000000, 350000000/100, 5, new Date(2023,1,12), 500000, 150000,0,0,650000);
let iN4 = new income('D 1004 UM', 'SUV', 2015, 350000000, 350000000/100, 5, new Date(2023,1,13), 500000, 150000,0,0,650000);
let iN5 = new income('D 11 UK', 'TAXI', 2002, 175000000, 175000000/100, 4, new Date(2023,1,12), 0, 0,45,4500,202500);
let iN6 = new income('D 12 UK', 'TAXI', 2015, 225000000, 225000000/100, 4, new Date(2023,1,13), 0, 0,75,4500,337500);
let iN7 = new income('D 13 UK', 'TAXI', 2020, 275000000, 275000000/100, 4, new Date(2023,1,13), 0, 0,90,4500,405000);
let iN8 = new income('ID8089', 'PrivateJet', 2015, 350000000, 350000000/100, 12, new Date(2022,12,23), 35000000, 15000000,0,0,50000000);
let iN9 = new income('ID8099', 'PrivateJet', 2018, 350000000, 350000000/100, 12, new Date(2022,12,25), 55000000, 25000000,0,0,80000000);

// Deklarasi totaliN menjadi object dari class income
let totaliN = new income();
// Menambahkan objek ke dalam array 'vehicles'
totaliN.vehicles.push(iN1, iN2, iN3, iN4, iN5, iN6, iN7, iN8, iN9);

// No. 1 : Menampilakn hasil dari fungsi GetTotalVehicle : TotalRow()
console.info(`\nRow : 1   -------------------------------------------------------------`);
console.info(totaliN.GetTotalVehicle())

// No. 2 : Menampilkan hasil dari fungsi GetTotalVehicle berdasarkan VehicleType : TotalRow(VehicleType)
console.info(`\nRow : 2   -------------------------------------------------------------`);
console.info(totaliN.GetTotalVehicleType('SUV'));

// No. 3 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 3   -------------------------------------------------------------`);
console.info(totaliN.GetTotalIncomeVehicle('SUV'));

// No. 4 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 4   -------------------------------------------------------------`);
console.info(totaliN.GetTotalIncomeVehicle('TAXI'));

// No. 5 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 5   -------------------------------------------------------------`);
console.info(totaliN.GetTotalIncomeVehicle('PrivateJet'));

// No. 6 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(AllVehicleType)
console.info(`\nRow : 6   -------------------------------------------------------------`);
console.info(totaliN.GetTotalIncomeVehicle(''));

