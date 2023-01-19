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
    GetTotalVehicleType(data: string): object;
}

class vehiclePurchase implements vehicleInterface{
    protected ArrayProps: any[];
    constructor(arrayProps: any[]) {
        this.ArrayProps = arrayProps
    }

    GetTotalVehicle():object {
        let count = 0
        
        for (let vehicle of this.ArrayProps) {
            count++
        }

        return {
            InterfaceMethod: "GetTotalVehicle()",
            ReturnValue: count
        }
    }

    GetTotalVehicleType(purchVehicleType: string): object {
        let count = 0

        for (const vehicle of this.ArrayProps) {
            if (vehicle.purch_vehicleType === purchVehicleType) {
                count++
            }
        }
        return {
            InterfaceMethod: `GetTotalVehicleType(${purchVehicleType})`,
            ReturnValue: count
        }
    }

}

class income extends vehiclePurchase{
    constructor(ArrayProps: any[]) {
        super(ArrayProps)
    }

    GetTotalIncomeVehicleType(vehicleType?: string):object {
        let count = 0

        if (vehicleType) {
            for (const vehicle of this.ArrayProps) {
                if (vehicleType === vehicle.purch_vehicleType) {
                    count+=vehicle.total
                }
            }

            return {
                InterfaceMethod: `GetTotalIncomeVehicleType(${vehicleType})`,
                ReturnVelue: count
            }   
        } else {
            for (const vehicle of this.ArrayProps) {
                count+=vehicle.total
            }

            return {
                InterfaceMethod: `GetTotalIncomeVehicleType()`,
                ReturnVelue: count
            }
        }

        
    }
}

let vehicle = new vehiclePurchase(vehicleClass);
console.info(vehicle.GetTotalVehicle());
console.info(vehicle.GetTotalVehicleType('SUV'));


let incomeVehicle = new income(vehicleClass);
console.info(incomeVehicle.GetTotalIncomeVehicleType('SUV'));
console.info(incomeVehicle.GetTotalIncomeVehicleType('TAXI'));
console.info(incomeVehicle.GetTotalIncomeVehicleType('PrivateJet'));
console.info(incomeVehicle.GetTotalIncomeVehicleType());
