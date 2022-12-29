/**
 * Buat function getSalesDiscount(price,tax,discount)
 * untuk menghitung total belanja yang sudah ditambahkan diskon dan pajak
 * 
 * sample output :
 * 
 * console.info(getSalesDiscount("a", 1, 5)); // Price harus dalam angka
 * 
 * console.info(getSalesDiscount(500, "pajak", 5)); // Tax harus dalam angka
 * 
 * console.info(getSalesDiscount("harga", "pajak", "discount")); // Price, Tax, & Discount harus dalam angka
 * 
 * console.info(getSalesDiscount(4500, 10, 5)); // contoh output dibawah
 * Total sales          : Rp.4500
 * Discount (5%)        : Rp.225
 * PriceAfterDiscount   : Rp.4275
 * Pajak (10%)          : Rp.450
 * --------------------------------
 * TotalPayment         : Rp.4725
 * 
 */

function getSalesDiscount(price: any, tax: any, discount: any): void {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
    console.info("Price, Tax, & Discount harus dalam angka");
  } else if ((isNaN(price) )&& !(isNaN(tax)) && !(isNaN(discount))) {
    console.info("Price harus dalam angka");
  } else if (!(isNaN(price)) && (isNaN(tax)) && !(isNaN(discount))) {
    console.info("Tax harus dalam angka");
  } else if (!(isNaN(price)) && !(isNaN(tax)) && (isNaN(discount))) {
    console.info("Discount harus dalam angka");
  } else {
    console.info(`Total sales\t\t: Rp.${price}`);
    console.info(`Discount (${discount}%)\t\t: Rp.${price * (discount / 100)}`);
    console.info(`PriceAfterDiscount\t: Rp.${price - price * (discount / 100)}`);
    console.info(`Pajak (${tax}%)\t\t: Rp.${price * (tax / 100)}`);
    console.info(`---------------------------------`);
    console.info(`TotalPayment\t\t: Rp.${price + price * (tax / 100) - price * (discount / 100)}`);
  }
}

getSalesDiscount("a", 1, 5); // Price harus dalam angka
getSalesDiscount(500, "pajak", 5); // Tax harus dalam angka
getSalesDiscount("harga", "pajak", "discount"); // Price, Tax, & Discount harus dalam angka
getSalesDiscount(4500, 10, 5); // contoh output dibawah
// Total sales: Rp.4500
// Discount (5%): Rp.225
// PriceAfterDiscount: Rp.4275
// Pajak (10%): Rp.450
// --------------------------------
// TotalPayment: Rp.4725
