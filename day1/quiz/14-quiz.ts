/**
 * Buat function getProsentase(income1, income2)
 * untuk menghitung prosentase income1 dan income2
 * 
 * sample output :
 * 
 * console.info(getProsentase("abc","bca")); // abc or bca harus dalam angka
 * console.info(getProsentase(600000.00, 750000.00));  // Total keunikan income 25%
 * console.info(getProsentase(750000.00, 650000.00)); // Total penurunan income -14%
 * 
 */

function getProsentase(income1: any, income2: any): string {
    try {
        
        // Cek apakah income1 dan income2 merupakan number dengan menggunakan typeof
        if (isNaN(income1)|| isNaN(income2)) {
          throw new Error(`FAILED  : ${income1} or ${income2} must be a number`);
        }
      
        // Hitung perbedaan income1 dan income2 dengan menggunakan operator aritmatika
        const selisih = income2 - income1;
      
        // Hitung prosentase perbedaan income1 dan income2 dengan menggunakan
        // operator aritmatika dan mengembalikan hasilnya dalam bentuk string
        if (selisih > 0) {
          return `SUCCESS : Total keunikan income ${(selisih / income1 * 100).toFixed(2)}%`;
        } else if (selisih < 0) {
          return `SUCCESS : Total penurunan income ${Math.floor(selisih / income1 * 100).toFixed(2)}%`;
        } else {
          return `SUCCESS : Total tidak ada perubahan income`;
        }

    } catch (error : any) {
        return error.message;
    }
}

console.info(getProsentase("abc","bca")); // "abc or bca must be a number"
console.info(getProsentase(600000.00, 750000.00)); // "Total keunikan income 25%"
console.info(getProsentase(750000.00, 650000.00)); // "Total penurunan income -14%"
