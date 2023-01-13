class vehiclePurchase {
    noPolice: string;
    purch_vehicleType: string;
    purch_year: number;
    purch_price: number;
    purch_taxInYear: number;
    purch_seat: number;
    vehicles: vehiclePurchase[]

    GetTotalVehicle(noPolice: string):number {
        // deklarasikan count
        let count = 0;

        /**
         * Pengecekan setiap objek dari kelas vehiclePurchase
         * yang disimpan dalam array "this.vehicles".
         */
        for (let vehicle of this.vehicles) {
            if (vehicle.noPolice === noPolice) {
                count++;
            }
        }

        // Mengembalikan nilai dari variabel 'count' 
        return count;
    }

    
} 

class income {
    noPolice: string;
    income_transactionDate: Date;
    income_rent: number;
    income_driver: number;
    income_order: number;
    income_orderPerKM: number;
    income_total: number;
}

//---------------------------------vehicelPurchase
let vP1 = new vehiclePurchase();
vP1.noPolice = 'D 1001 UM';
vP1.purch_vehicleType = 'SUV';
vP1.purch_year = 2010;
vP1.purch_price = 350000000;
vP1.purch_taxInYear = vP1.purch_price/100;
vP1.purch_seat = 4;

let vP2 = new vehiclePurchase();
vP2.noPolice = 'D 1002 UM';
vP2.purch_vehicleType = 'SUV';
vP2.purch_year = 2010;
vP2.purch_price = 350000000;
vP2.purch_taxInYear = vP2.purch_price/100;
vP2.purch_seat = 4;

let vP3 = new vehiclePurchase();
vP3.noPolice = 'D 1003 UM';
vP3.purch_vehicleType = 'SUV';
vP3.purch_year = 2015;
vP3.purch_price = 350000000;
vP3.purch_taxInYear = vP3.purch_price/100;
vP3.purch_seat = 5;

let vP4 = new vehiclePurchase();
vP4.noPolice = 'D 1004 UM';
vP4.purch_vehicleType = 'SUV';
vP4.purch_year = 2015;
vP4.purch_price = 350000000;
vP4.purch_taxInYear = vP4.purch_price/100;
vP4.purch_seat = 5;

let vP5 = new vehiclePurchase();
vP5.noPolice = 'D 11 UK';
vP5.purch_vehicleType = 'Taxi';
vP5.purch_year = 2002;
vP5.purch_price = 175000000;
vP5.purch_taxInYear = vP4.purch_price/100;
vP5.purch_seat = 4;

let vP6 = new vehiclePurchase();
vP6.noPolice = 'D 12 UK';
vP6.purch_vehicleType = 'Taxi';
vP6.purch_year = 2015;
vP6.purch_price = 225000000;
vP6.purch_taxInYear = vP6.purch_price/100;
vP6.purch_seat = 4;

let vP7 = new vehiclePurchase();
vP7.noPolice = 'D 13 UK';
vP7.purch_vehicleType = 'Taxi';
vP7.purch_year = 2020;
vP7.purch_price = 275000000;
vP7.purch_taxInYear = vP7.purch_price/100;
vP7.purch_seat = 4;

let vP8 = new vehiclePurchase();
vP8.noPolice = 'ID8089';
vP8.purch_vehicleType = 'PrivasiJet';
vP8.purch_year = 2015;
vP8.purch_price =150000000000;
vP8.purch_taxInYear = vP8.purch_price/100;
vP8.purch_seat = 12;

let vP9 = new vehiclePurchase();
vP9.noPolice = 'ID8099';
vP9.purch_vehicleType = 'PrivasiJet';
vP9.purch_year = 2018;
vP9.purch_price =175000000000;
vP9.purch_taxInYear = vP9.purch_price/100;
vP9.purch_seat = 15;


//---------------------------------income
let in1 = new income();
in1.noPolice = vP1.noPolice;
in1.income_transactionDate = new Date(2023, 1, 10);
in1.income_rent = 500000;
in1.income_driver = 150000;
if (in1.income_rent && in1.income_driver) {
    in1.income_total = in1.income_rent + in1.income_driver;
} else if (in1.income_order && in1.income_orderPerKM) {
    in1.income_total = in1.income_order * in1.income_orderPerKM
} else {
    in1.income_total = 0;
}

let in2 = new income();
in2.noPolice = vP2.noPolice;
in2.income_transactionDate = new Date(2023, 1, 10);
in2.income_rent = 500000;
in2.income_driver = 150000;
if (in2.income_rent && in2.income_driver) {
    in2.income_total = in2.income_rent + in2.income_driver;
} else if (in2.income_order && in2.income_orderPerKM) {
    in2.income_total = in2.income_order * in2.income_orderPerKM
} else {
    in2.income_total = 0;
}

let in3 = new income();
in3.noPolice = vP3.noPolice;
in3.income_transactionDate = new Date(2023, 1, 12);
in3.income_rent = 500000;
in3.income_driver = 150000;
if (in3.income_rent && in3.income_driver) {
    in3.income_total = in3.income_rent + in3.income_driver;
} else if (in3.income_order && in3.income_orderPerKM) {
    in3.income_total = in3.income_order * in3.income_orderPerKM
} else {
    in3.income_total = 0;
}

let in4 = new income();
in4.noPolice = vP4.noPolice;
in4.income_transactionDate = new Date(2023, 1, 13);
in4.income_rent = 500000;
in4.income_driver = 150000;
if (in4.income_rent && in4.income_driver) {
    in4.income_total = in4.income_rent + in4.income_driver;
} else if (in4.income_order && in4.income_orderPerKM) {
    in4.income_total = in4.income_order * in4.income_orderPerKM
} else {
    in4.income_total = 0;
}

let in5 = new income();
in5.noPolice = vP5.noPolice;
in5.income_transactionDate = new Date(2023, 1, 12);
in5.income_order = 45;
in5.income_orderPerKM = 4500;
if (in5.income_rent && in5.income_driver) {
    in5.income_total = in5.income_rent + in5.income_driver;
} else if (in5.income_order && in5.income_orderPerKM) {
    in5.income_total = in5.income_order * in5.income_orderPerKM
} else {
    in5.income_total = 0;
}

let in6 = new income();
in6.noPolice = vP6.noPolice;
in6.income_transactionDate = new Date(2023, 1, 13);
in6.income_order = 75;
in6.income_orderPerKM = 4500;
if (in6.income_rent && in6.income_driver) {
    in6.income_total = in6.income_rent + in6.income_driver;
} else if (in6.income_order && in6.income_orderPerKM) {
    in6.income_total = in6.income_order * in6.income_orderPerKM
} else {
    in6.income_total = 0;
}

let in7 = new income();
in7.noPolice = vP7.noPolice;
in7.income_transactionDate = new Date(2023, 1, 13);
in7.income_order = 90;
in7.income_orderPerKM = 4500;
if (in7.income_rent && in7.income_driver) {
    in7.income_total = in7.income_rent + in7.income_driver;
} else if (in7.income_order && in7.income_orderPerKM) {
    in7.income_total = in7.income_order * in7.income_orderPerKM
} else {
    in7.income_total = 0;
}

let in8 = new income();
in8.noPolice = vP8.noPolice;
in8.income_transactionDate = new Date(2022, 12, 23);
in8.income_rent = 35000000;
in8.income_driver = 15000000;
if (in8.income_rent && in8.income_driver) {
    in8.income_total = in8.income_rent + in8.income_driver;
} else if (in8.income_order && in8.income_orderPerKM) {
    in8.income_total = in8.income_order * in8.income_orderPerKM
} else {
    in8.income_total = 0;
}

let in9 = new income();
in9.noPolice = vP9.noPolice;
in9.income_transactionDate = new Date(2022, 12, 25);
in9.income_rent = 55000000;
in9.income_driver = 25000000;
if (in9.income_rent && in9.income_driver) {
    in9.income_total = in9.income_rent + in9.income_driver;
} else if (in9.income_order && in9.income_orderPerKM) {
    in9.income_total = in9.income_order * in9.income_orderPerKM
} else {
    in9.income_total = 0;
}








