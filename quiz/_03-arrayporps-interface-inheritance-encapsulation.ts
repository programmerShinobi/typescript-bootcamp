let vehicleClass = [
    {
        noPolice: 'D 1001 UM',
        purch_vehicleType: 'SUV',
        purch_year: 2010,
        purch_price: 350000000,
        purch_taxInYear: 3500000,
        purch_seat: 4,
        transactionDate: new Date(2023, 1, 10),
        rent: 500000,
        driver: 150000,
        order: 0,
        orderPerKM: 0,
        total:650000
    },
    {
        noPolice: 'D 1002 UM',
        purch_vehicleType: 'SUV',
        purch_year: 2010,
        purch_price: 350000000,
        purch_taxInYear: 3500000,
        purch_seat: 4,
        transactionDate: new Date(2023, 1, 10),
        rent: 500000,
        driver: 150000,
        order: 0,
        orderPerKM: 0,
        total:650000
    },
    {
        noPolice: 'D 1003 UM',
        purch_vehicleType: 'SUV',
        purch_year: 2015,
        purch_price: 350000000,
        purch_taxInYear: 3500000,
        purch_seat: 5,
        transactionDate: new Date(2023, 1, 12),
        rent: 500000,
        driver: 150000,
        order: 0,
        orderPerKM: 0,
        total:650000
    },
    {
        noPolice: 'D 1004 UM',
        purch_vehicleType: 'SUV',
        purch_year: 2015,
        purch_price: 350000000,
        purch_taxInYear: 3500000,
        purch_seat: 5,
        transactionDate: new Date(2023, 1, 13),
        rent: 500000,
        driver: 150000,
        order: 0,
        orderPerKM: 0,
        total:650000
    },
    {
        noPolice: 'D 11 UK',
        purch_vehicleType: 'TAXI',
        purch_year: 2002,
        purch_price: 175000000,
        purch_taxInYear: 1750000,
        purch_seat: 4,
        transactionDate: new Date(2023, 1, 12),
        rent: 0,
        driver: 0,
        order: 45,
        orderPerKM: 4500,
        total:202500
    },
    {
        noPolice: 'D 12 UK',
        purch_vehicleType: 'TAXI',
        purch_year: 2015,
        purch_price: 225000000,
        purch_taxInYear: 2250000,
        purch_seat: 4,
        transactionDate: new Date(2023, 1, 13),
        rent: 0,
        driver: 0,
        order: 75,
        orderPerKM: 4500,
        total:337500
    },
    {
        noPolice: 'D 13 UK',
        purch_vehicleType: 'TAXI',
        purch_year: 2020,
        purch_price: 275000000,
        purch_taxInYear: 2750000,
        purch_seat: 4,
        transactionDate: new Date(2023, 1, 13),
        rent: 0,
        driver: 0,
        order: 90,
        orderPerKM: 4500,
        total:405000
    },
    {
        noPolice: 'ID8089',
        purch_vehicleType: 'PrivateJet',
        purch_year: 2015,
        purch_price: 150000000000,
        purch_taxInYear: 1500000000,
        purch_seat: 12,
        transactionDate: new Date(2022, 12, 23),
        rent: 35000000,
        driver: 15000000,
        order: 0,
        orderPerKM: 0,
        total:50000000
    },
    {
        noPolice: 'ID8089',
        purch_vehicleType: 'PrivateJet',
        purch_year: 2018,
        purch_price: 175000000000,
        purch_taxInYear: 1750000000,
        purch_seat: 15,
        transactionDate: new Date(2022, 12, 25),
        rent: 55000000,
        driver: 25000000,
        order: 0,
        orderPerKM: 0,
        total:80000000
    }

];

interface vehicleInterface{
    GetTotalVehicle(): object;
    GetTotalVehicleType(purch_vehicleType: string): object;
}

class purchase implements vehicleInterface {
    protected ArrayProp: any[];
    constructor(arrayProp:any[]) {
        this.ArrayProp = arrayProp 
    }

    // No. 1 : Menampilakn hasil dari fungsi GetTotalVehicle : TotalRow()
    GetTotalVehicle(): object{
        let count = 0;
        /**
         * Pengecekan setiap objek dari kelas vehiclePurchase
         * yang disimpan dalam array "this.vehicles".
         */
        for (let vehicle of this.ArrayProp) {
            count++
        }
        return {
            InterfaceMethod : 'GetTotalVehicle()',
            ReturnValue : count
        }
    }

    // No. 2 : Menampilkan hasil dari fungsi GetTotalVehicle berdasarkan VehicleType : TotalRow(VehicleType)
    GetTotalVehicleType(purch_vehicleType: string): object {
        // deklarasikan count
        let count = 0;

        /**
         * Pengecekan setiap objek dari kelas vehiclePurchase
         * yang disimpan dalam array "this.vehicles".
         */
        for (let vehicle of this.ArrayProp) {
            if (vehicle.purch_vehicleType === purch_vehicleType) {
                count++;
            }
        }
        
        // Mengembalikan nilai dari variabel 'idCount'
        return {
            InterfaceMethod : `GetTotalVehicle(${purch_vehicleType})`,
            ReturnValue : count
        }
    }
    
} 

class income extends purchase {
    constructor(ArrayProp: any[]) {
        super(ArrayProp)
    
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
            for (let vehicle of this.ArrayProp) {
                if (vehicle.vehicleType === vehicleType) {
                    count+=vehicle.total
                }
            }
        } else {
            /**
             * Pengecekan setiap objek dari kelas vehiclePurchase
             * yang disimpan dalam array "this.vehicles".
             */
            for (let vehicle of this.ArrayProp) {
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


let purchaseVechiles = new purchase(vehicleClass);

console.info(`\nRow : 1   ------------------------------------------------------------`);
console.info(purchaseVechiles.GetTotalVehicle())

// No. 2 : Menampilkan hasil dari fungsi GetTotalVehicle berdasarkan VehicleType : TotalRow(VehicleType)
console.info(`\nRow : 2   ------------------------------------------------------------`);
console.info(purchaseVechiles.GetTotalVehicleType('SUV'));


let incomeVehicles = new income(vehicleClass);

// No. 3 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 3   ------------------------------------------------------------`);
console.info(incomeVehicles.GetTotalIncomeVehicle('SUV'));

// No. 4 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 4   ------------------------------------------------------------`);
console.info(incomeVehicles.GetTotalIncomeVehicle('TAXI'));

// No. 5 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(VehicleType)
console.info(`\nRow : 5   ------------------------------------------------------------`);
console.info(incomeVehicles.GetTotalIncomeVehicle('PrivateJet'));

// No. 6 : Menampilkan hasil dari fungsi GetTotalIncomeVehicle berdasarkan VehicleType : TotalIncome(AllVehicleType)
console.info(`\nRow : 6   ------------------------------------------------------------`);
console.info(incomeVehicles.GetTotalIncomeVehicle(''));
