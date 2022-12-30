/**
 * Buat function getDays(month, year)
 * untuk menghasilkan output total hari dalam bulan dan tahun tertentu menggunakan typescript.
 * 
 * sample output :
 * console.info(getDays("a", 2021)); // inputan bulan harus dalam integer
 * console.info(getDays("2", "year")); // inputan tahun harus dalam integer
 * console.info(getDays("m", "year")); // inputan bulan & tahun harus dalam integer
 * console.info(getDays(2,2000)); // This month has 29 days, 2000 adalah tahun kabisat
 * console.info(getDays(8,2021)); // This month month has 31 
 *  
 */

function getDays(month: any, year: any): any {
    
    try {

        // Determinasi jumlah hari dalam setiap bulan
        let days: any;
        let descYear: any;
        
        // Validasi input bulan dan tahun harus bertipe integer
        if ((isNaN(month)) && (isNaN(year))) {
            throw new Error('FAILED  : Inputan bulan & tahun harus dalam integer');
        } else if ((isNaN(month)) && !(isNaN(year))) {
            throw new Error('FAILED  : Inputan bulan harus dalam integer');
        }  else if (!(isNaN(month)) && (isNaN(year))) {
            throw new Error('FAILED  : Inputan tahun harus dalam integer');
        }else {
            // Validasi bulan harus berada di rentang 1-12
            if (month < 1 || month > 12) {
            throw new Error('FAILED  : Inputan bulan harus berada di rentang 1-12');
            }
            // Bulan Februari memiliki jumlah hari yang berbeda-beda tergantung tahun kabisat atau tidak
            if (month === 2) {
                /**
                 * Tahun yang habis dibagi 4 merupakan tahun kabisat,
                 * kecuali jika tahun tersebut habis dibagi 100 dan bukan habis dibagi 400.
                 * 
                 * Dengan menggunakan operator modulo (%),
                 * kita dapat menentukan apakah suatu tahun habis dibagi 4 atau tidak.
                 * Jika hasil modulo year % 4 sama dengan 0, berarti tahun tersebut habis dibagi 4.
                 * 
                 * Operator logika AND (&&)
                 * digunakan untuk mengevaluasi kebenaran dari kedua statement di sebelah kiri
                 * dan kanan operator tersebut. Jika kedua statement tersebut benar (true),
                 * maka hasil evaluasi dari operator AND tersebut adalah true.
                 * 
                 * Operator logika OR (||)
                 * digunakan untuk mengevaluasi kebenaran dari salah satu statement
                 * di sebelah kiri atau kanan operator tersebut.
                 * Jika salah satu statement tersebut benar (true),
                 * maka hasil evaluasi dari operator OR tersebut adalah true.
                 * 
                 * Dengan demikian, expression year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
                 * akan bernilai true jika tahun tersebut habis dibagi 4,
                 * kecuali jika tahun tersebut habis dibagi 100 dan bukan habis dibagi 400.
                 * Sebaliknya, expression tersebut akan bernilai false
                 * jika tahun tersebut tidak habis dibagi 4
                 * atau habis dibagi 100 dan tidak habis dibagi 400.
                 * 
                 */
                if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                // Tahun kabisat
                    days = 29;
                    descYear = ", " + year + " adalah tahun kabisat";
                } else {
                // Bukan tahun kabisat
                    days = 28;
                    descYear = "";
                }
            } else if (month === 4 || month === 6 || month === 9 || month === 11) {
                // Bulan April, Juni, September, dan November memiliki 30 hari
                days = 30;
                descYear = "";
            } else {
                // Selain bulan Februari, April, Juni, September, dan November memiliki 31 hari
                days = 31;
                descYear = "";
            }
        
        }
        
        return `SUCCESS : This month has ${days} days${descYear}`;
    

    } catch (error : any) {
        return error.message;
    }

}
console.info(getDays("a", 2021)); // inputan bulan harus dalam integer
console.info(getDays("2", "year")); // inputan tahun harus dalam integer
console.info(getDays("m", "year")); // inputan bulan & tahun harus dalam integer
console.info(getDays(2,2000)); // This month has 29 days, 2000 adalah tahun kabisat
console.info(getDays(8,2021)); // This month month has 31


