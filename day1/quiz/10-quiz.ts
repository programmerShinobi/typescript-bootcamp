/**
 * Buat function convertToRupiah(value, currencyType)
 * untuk konversi mata uang dollar, US dan euro ke dalam rupiah
 * 
 * sample output : 
 * 
 * console.info(convertToRupiah(1000,'yen')); // 1000 yen = Rp.130.120
 * console.info(convertToRupiah(100, 'usd')); // 100 dollar = Rp.1.438.250
 * console.info(convertToRupiah(100, 'euro')); // 100 euro = Rp.1.600.000
 * console.info(convertToRupiah(100, '')); // no match currency
 * 
 */

function convertToRupiah(value: any, currencyType: any): any {
  try {
    const conversionRates: any = {
      usd: 1438250,
      euro: 1600000,
      yen: 130120
    };
  
    if (!(conversionRates[currencyType])) {
      throw new Error("FAILED  : No match currency");
    } else {
      let angka: any = value * conversionRates[currencyType];

      /**
       * Variable angka dikonversi ke dalam bentuk string dengan menggunakan method toString().
       * 
       */
      let angkaString = angka.toString();
      
      /**
       * Variabel numberString diisi dengan hasil dari menghilangkan semua karakter
       * kecuali angka dan tanda koma (,) dengan menggunakan regular expression /[^,\d]/g,
       * kemudian tipe data numberString diubah menjadi string dengan toString().
       * 
       */
      let numberString: string = angkaString.replace(/[^,\d]/g, '').toString();
      
      /**
       * Variabel split diisi dengan hasil dari memecah string numberString menjadi array of string
       * berdasarkan tanda koma (,)
       * 
       */
      let split: Array<string> = numberString.split(',');

      /**
       * Variabel sisa diisi dengan panjang dari bagian pertama dari array split modulo 3,
       * yang merupakan panjang sisa dari bagian pertama array tersebut setelah dibagi dengan 3.
       * 
       */
      let sisa: any = split[0].length % 3;

      /**
       * Variabel rupiah diisi dengan bagian pertama dari array split, yang merupakan bagian awal dari angka tersebut
       * sesuai dengan panjang sisa yang telah ditentukan sebelumnya.
       * 
       */
      let rupiah: string = split[0].substr(0, sisa);

      /**
       * variabel bernama ribuan yang diisi dengan hasil dari method match()
       * pada string yang diambil dari bagian pertama dari array split yang diambil dari indeks sisa
       * kemudian diikuti dengan regex /\d{3}/gi.
       * 
       * Regex /\d{3}/gi berarti "cari semua kemunculan tiga karakter angka (\d) secara global (g)
       * dan tidak peduli dengan case-sensitif (i)".
       * 
       * Hasil dari method match() adalah array yang berisi semua kemunculan tiga karakter angka yang ditemukan,
       * atau null jika tidak ditemukan kemunculan tiga karakter angka
       * 
       */
      let ribuan: Array<string> | null = split[0].substr(sisa).match(/\d{3}/gi);
      
      /**
       * Blok kondisi if yang akan dijalankan jika ribuan terdefinisi (tidak null).
       * Di dalam blok kondisi tersebut,variabel separator diisi dengan tanda titik (.) jika panjang sisa tidak sama dengan nol,
       * atau dengan string kosong jika panjang sisa sama dengan nol.
       * Variabel rupiah diisi dengan hasil dari menggabungkan variabel rupiah dengan separator
       * dan hasil dari menggabungkan setiap elemen dari array ribuan menggunakan tanda titik (.) sebagai pemisah
       * 
       */
      if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }

      /**
       * variabel rupiah diisi dengan hasil dari menggabungkan bagian pertama dari array split dengan tanda koma (,)
       * dan bagian kedua dari array split,
       * atau hanya dengan bagian pertama dari array split jika bagian kedua tidak terdefinisi (undefined).
       * 
       */
      rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

      return "SUCCESS : " + value + " " + currencyType + "\t=  Rp." + rupiah;
    }
  
  
  } catch (error: any) {
    return error.message;
  }
}

console.info(convertToRupiah(1000,'yen')); // 1000 yen = Rp.130.120
console.info(convertToRupiah(100, 'usd')); // 100 dollar = Rp.1.438.250
console.info(convertToRupiah(100, 'euro')); // 100 euro = Rp.1.600.000
console.info(convertToRupiah(100, '')); // no match currency
