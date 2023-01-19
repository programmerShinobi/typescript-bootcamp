let vehicleArray = [
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

interface purchaseInterface {
    GetTotalVehicle(data?: string): object;
}

interface incomeInterface {
    GetTotalIncomeVehicle(data?: string): object;
}

class purchase implements purchaseInterface{
    protected ArrayProp: {
        noPolice: string,
        purch_vehicleType: string,
        purch_year: number,
        purch_price: number,
        purch_taxInYear: number,
        purch_seat: number,
        transactionDate: Date,
        rent: number,
        driver: number,
        order: number,
        orderPerKM: number,
        total: number
    }[];

    constructor(arrayProp: {
        noPolice: string,
        purch_vehicleType: string,
        purch_year: number,
        purch_price: number,
        purch_taxInYear: number,
        purch_seat: number,
        transactionDate: Date,
        rent: number,
        driver: number,
        order: number,
        orderPerKM: number,
        total: number
    }[]) {
        this.ArrayProp = arrayProp;
    }

    GetTotalVehicle(data?: string | undefined): object {
        let count = 0;

        if (data) {
            for (const vehicle of this.ArrayProp) {
                if (vehicle.purch_vehicleType == data) {
                    count++
                }
            }

            return {
                InterfaceMethod: `GetTotalVehicle(${data})`,
                ReturnValue: count
            }
        } else {
            for (const vehicle of this.ArrayProp) {
                count++
            }
            
            return {
                InterfaceMethod: 'GetTotalVehicle()',
                Return: count
            }
        }
    }
}

class income extends purchase implements incomeInterface{
    constructor(ArrayProp: {
        noPolice: string,
        purch_vehicleType: string,
        purch_year: number,
        purch_price: number,
        purch_taxInYear: number,
        purch_seat: number,
        transactionDate: Date,
        rent: number,
        driver: number,
        order: number,
        orderPerKM: number,
        total: number
    }[]) {
        super(ArrayProp)
    }

    GetTotalIncomeVehicle(data?: string | undefined): object {
        let count = 0;

        if (data) {
            for (const vehicle of this.ArrayProp) {
                if (vehicle.purch_vehicleType == data) {
                    count+=vehicle.total
                }
            }

            return {
                InterfaceMethod: `GetTotalIncomeVehicle(${data})`,
                ReturnValue: count
            }
        } else {
            for (const vehicle of this.ArrayProp) {
                count+=vehicle.total
            }

            return {
                InterfaceMethod: 'GetTotalIncomeVehicle()',
                ReturnValue: count
            }
        }
    }
}

enum typeVehicle{
    SUV = 'SUV',
    TAXI = 'TAXI',
    PrivateJet = 'PrivateJet'
}

const SUV = typeVehicle.SUV;
const TAXI = typeVehicle.TAXI;
const PrivateJet = typeVehicle.PrivateJet;

let vehicleIncome = new income(vehicleArray);
console.info(vehicleIncome.GetTotalVehicle());
console.info(vehicleIncome.GetTotalVehicle(SUV));
console.info(vehicleIncome.GetTotalIncomeVehicle(SUV));
console.info(vehicleIncome.GetTotalIncomeVehicle(TAXI));
console.info(vehicleIncome.GetTotalIncomeVehicle(PrivateJet));
