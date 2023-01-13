class vehiclePurchase {
    id: number;
    noPolice: string;
    vehicleType: string;
    year: number;
    price: number;
    taxInYear: number;
    seat: number;
    transactionDate: Date;
    rent: number;
    driver: number;
    order: number;
    orderPerKM: number;
    total: number;
    vehicles: vehiclePurchase[] = [];

    constructor(
        id: number = 0,
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
        this.id = id;
        this.noPolice = noPolice;
        this.vehicleType = vehicleType;
        this.year = year;
        this.price = price;
        this.taxInYear = taxInYear;
        this.seat = seat;
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKM = orderPerKM;
        this.total = total;
    }

    // No. 1 : Menampilakn hasil dari fungsi GetTotalVehicle : TotalRow()
    GetTotalVehicle(idCount: number): object{
        return {
            'Interface Method' : 'GetTotalVehicle()',
            'Return Value' : idCount
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
            'Interface Method' : `GetTotalVehicle(${vehicleType})`,
            'Return Value' : count
        }
    }

    // No. 3 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
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
            'Interface Method' : `GetTotalIncomeVehicle(${vehicleType})`,
            'Return Value' : count
        }
    }
    
} 


// Membuat objek dari kelas vehiclePurchase
let vP1 = new vehiclePurchase(1, 'D 1001 UM', 'SUV', 2010, 350000000, 350000000/100, 4, new Date(2023, 1,10), 500000, 150000, 0, 0,650000);
let vP2 = new vehiclePurchase(2, 'D 1002 UM', 'SUV', 2010, 350000000, 350000000/100, 4, new Date(2023, 1,10), 500000, 150000, 0, 0,650000);
let vP3 = new vehiclePurchase(3, 'D 1003 UM', 'SUV', 2010, 350000000, 350000000/100, 5, new Date(2023, 1,12), 500000, 150000, 0, 0,650000);
let vP4 = new vehiclePurchase(4, 'D 1004 UM', 'SUV', 2015, 350000000, 350000000/100, 5, new Date(2023, 1,13), 500000, 150000, 0, 0,650000);
let vP5 = new vehiclePurchase(5, 'D 11 UK', 'TAXI', 2002, 175000000, 175000000/100, 4, new Date(2023, 1,12), 0, 0, 45, 4500,202500);
let vP6 = new vehiclePurchase(6, 'D 12 UK', 'TAXI', 2015, 225000000, 225000000/100, 4, new Date(2023, 1,13), 0, 0, 75, 4500,337500);
let vP7 = new vehiclePurchase(7, 'D 13 UK', 'TAXI', 2020, 275000000, 275000000/100, 4, new Date(2023, 1,13), 0, 0, 90, 4500,405000);
let vP8 = new vehiclePurchase(8, 'ID8089', 'PrivateJet', 2015, 350000000, 350000000/100, 12, new Date(2022, 12,23), 35000000, 15000000, 0, 0,50000000);
let vP9 = new vehiclePurchase(9, 'ID8099', 'PrivateJet', 2018, 350000000, 350000000/100, 12, new Date(2022, 12,25), 55000000, 25000000, 0, 0,80000000);

// Deklarasi totalVP menjadi object dari class vehiclePurchase
let totalVP = new vehiclePurchase();
// Menambahkan objek ke dalam array 'vehicles'
totalVP.vehicles.push(vP1, vP2, vP3, vP4, vP5, vP6, vP7, vP8, vP9);

// No. 1 : Menampilakn hasil dari fungsi GetTotalVehicle : TotalRow()
console.info(`\nRow : 1   ----------------------------------------------------`);
console.info(totalVP.GetTotalVehicle(totalVP.vehicles.length))

// No. 2 : Menampilkan hasil dari fungsi GetTotalVehicle berdasarkan VehicleType : TotalRow(VehicleType)
console.info(`\nRow : 2   ------------------------------------------------------`);
console.info(totalVP.GetTotalVehicleType('SUV'));

// No. 3 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 3   ------------------------------------------------------`);
console.info(totalVP.GetTotalIncomeVehicle('SUV'));

// No. 4 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 4   ------------------------------------------------------`);
console.info(totalVP.GetTotalIncomeVehicle('TAXI'));

// No. 5 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 5   ------------------------------------------------------`);
console.info(totalVP.GetTotalIncomeVehicle('PrivateJet'));

// No. 6 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(AllVehicleType)
console.info(`\nRow : 5   ------------------------------------------------------`);
console.info(totalVP.GetTotalIncomeVehicle(''));
