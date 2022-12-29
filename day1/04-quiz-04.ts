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

function getSalesTax(price: any, tax: any): void {
  if (isNaN(price) && isNaN(tax)) {
    console.info("Price & Pajak harus dalam angka");
  } else if (isNaN(price) && !(isNaN(tax))) {
    console.info("Price harus dalam angka");
  } else if (!(isNaN(price)) && isNaN(tax)) {
    console.info("Pajak harus dalam angka");
  } else {
    console.info(`Total sales: Rp.${price}`);
    console.info(`Pajak: ${tax}%`);
    console.info(`TotalHargaPajak: Rp.${price + (price * (tax / 100))}`);
  }
}

getSalesTax("a", 1); // Price harus dalam angka
getSalesTax(500, "pajak"); // Price & Pajak harus dalam angka
getSalesTax("harga", "pajak"); // Pajak harus dalam angka
getSalesTax(4500, 5); // contoh output dibawah
// Total sales: Rp.4500
// Pajak: 5%
// TotalHargaPajak: Rp.4725
