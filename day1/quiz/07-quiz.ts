/**
 * Buat function sumDigit(n) untuk menghitung jumlah angka yang diinput.
 * Contoh jika angka yang dinput 1234 maka output yang dihasilkan adalah 1+2+3+4 = 10
 * constraint : inputan harus berupa  4 digit angka 
 * 
 * sample output :
 * 
 * console.info(sumDigit(1234)); // 10
 * console.info(sumDigit("1234)); //10
 * console.info(sumDigit(12345)); // 12345 harus lebih kecil dari 10000
 * console.info(sumDigit("a123")); // a123 is not number, try again...
 */

function sumDigit(n: any): any {
    try {
        // pastikan input adalah number
        if (isNaN(n)) {
          throw new Error("FAILED  : Input must be a number");
        }
      
        // pastikan input memiliki 4 digit
        if (n < 1000 || n > 9999) {
          throw new Error("FAILED  : " + n + " harus lebih kecil dari 10000");
        }
      
        // ubah input ke string agar mudah dipecah menjadi digit-digitnya
        n = n.toString();
      
        // inisialisasi variabel sum sebagai 0
        let sum = 0;
      
        // lakukan looping untuk menjumlahkan setiap digit dari input
        for (let i = 0; i < n.length; i++) {
          // tambahkan digit ke sum
          sum += parseInt(n[i]);
        }
      
        // kembalikan hasil penjumlahan
        return "SUCCESS : "+ sum;
    } catch (error : any) {
        return error.message;
    }

}

// coba test function dengan beberapa input
console.info(sumDigit(1234)); // 10
console.info(sumDigit("1234")); // 10
console.info(sumDigit(12345)); // 12345 harus lebih kecil dari 10000
console.info(sumDigit("a123")); // a123 is not number, try again...
