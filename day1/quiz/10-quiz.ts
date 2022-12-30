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
      let angkaString = angka.toString();
      let numberString: string = angkaString.replace(/[^,\d]/g, '').toString(),
      split: Array<string> = numberString.split(','),
      sisa: any = split[0].length % 3,
      rupiah: string = split[0].substr(0, sisa),
      ribuan: Array<string> | null = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }
      rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

      return "SUCCESS : " + value + " " + currencyType + "\t=  Rp." + rupiah;
    }
  
  
  } catch (error: any) {
    return error.message;
  }
}

// function formatRupiah(angka: string): any {
//   let numberString: string = angka.replace(/[^,\d]/g, '').toString(),
//     split: string[] = numberString.split(','),
//     sisa: number = split[0].length % 3,
//     rupiah: string = split[0].substr(0, sisa),
//     ribuan: string[] = split[0].substr(sisa).match(/\d{3}/gi);

//   if (ribuan) {
//     let separator = sisa ? '.' : '';
//     rupiah += separator + ribuan.join('.');
//   }

//   return rupiah;
// }

function formatRupiah(angka: any): any {
  let numberString: string = angka.replace(/[^,\d]/g, '').toString(),
    split: Array<string> = numberString.split(','),
    sisa: number = split[0].length % 3,
    rupiah: string = split[0].substr(0, sisa),
    ribuan: Array<string> | null = split[0].substr(sisa).match(/\d{3}/gi);


  if (ribuan) {
    let separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  return rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
}


console.info(convertToRupiah(1000,'yen')); // 1000 yen = Rp.130.120
console.info(convertToRupiah(100, 'usd')); // 100 dollar = Rp.1.438.250
console.info(convertToRupiah(100, 'euro')); // 100 euro = Rp.1.600.000
console.info(convertToRupiah(100, '')); // no match currency
