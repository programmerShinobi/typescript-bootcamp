/**
 * Buat function getSalesTax(price.tax)
 * untuk menghitung pajak dari total penjualan,
 * dengan inputan parameter:
 * price : total harga yang harus dibayar
 * tax: pajak dalam prosen
 * 
 * sample output :
 * 
 * Price harus dalam angka
 * console.info(getSalesTax("a", 1));
 * 
 * Price & Pajak harus dalam angka
 * console.info(getSalesTax(500, "pajak")); 
 * 
 * Pajak harus dalam angka
 * console.info(getSalesTax("harga", "pajak"));
 * 
 * console.info(getSalesTax(4500, 5)); //contoh output dibawah
 * Total sales : Rp.4500
 * Pajak : 0,5
 * TotalHargaPajak : Rp.4505
 * 
 */

function getSalesTax(price: any, tax: any): number | string {
  try {
    if (isNaN(price) && isNaN(tax)) {
      throw new Error("FAILED  : Price & Pajak harus dalam angka");
    } else if (isNaN(price) && !(isNaN(tax))) {
      throw new Error("FAILED  : Price harus dalam angka");
    } else if (!(isNaN(price)) && isNaN(tax)) {
      throw new Error("FAILED  : Pajak harus dalam angka");
    } else {
      // return `SUCCES : Total sales: Rp.${price}\nPajak: ${tax/10}\nTotalHargaPajak: Rp.${price + tax}`;
      return `SUCCESS : Total sales\t  : Rp.${price}` +
      `\n          Pajak           : ${tax / 10}` +
      `\n          TotalHargaPajak : Rp.${price + tax}`;
    }
  } catch (error : any) {
    return error.message;
  }

}

console.info(getSalesTax("a", 1)); // Price harus dalam angka
console.info(getSalesTax(500, "pajak")); // Price & Pajak harus dalam angka
console.info(getSalesTax("harga", "pajak")); // Pajak harus dalam angka
console.info(getSalesTax(4500, 5)); // contoh output dibawah
// Total sales: Rp.4500
// Pajak: 5%
// TotalHargaPajak: Rp.4725
