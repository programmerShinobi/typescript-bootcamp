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
 * Total sales             : Rp.4500
 * Discount (5%)           : Rp.225
 * PriceAfterDiscount      : Rp.4275
 * Pajak (10%)             : Rp.427.5
 * -----------------------------------
 * TotalPayment            : Rp.4702.5
 * 
 */

function getSalesDiscount(price: any, tax: any, discount: any): any {
  try {
    if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
      throw new Error("FAILED  : Price, Tax, & Discount harus dalam angka");
    } else if ((isNaN(price) )) {
      throw new Error("FAILED  : Price harus dalam angka");
    } else if (!(isNaN(price)) && (isNaN(tax)) && !(isNaN(discount))) {
      throw new Error("FAILED  : Tax harus dalam angka");
    } else if (!(isNaN(price)) && !(isNaN(tax)) && (isNaN(discount))) {
      throw new Error("FAILED  : Discount harus dalam angka");
    } else {
      return `SUCCESS : Total sales\t\t: Rp.${price}` +
      `\n\t  Discount (${discount}%)\t\t: Rp.${price * (discount / 100)}` +
      `\n\t  PriceAfterDiscount\t: Rp.${price - price * (discount / 100)}` +
      `\n\t  Pajak (${tax}%)\t\t: Rp.${(price - price * (discount / 100)) * (tax / 100)}` +
      `\n\t  ---------------------------------` +
      `\n\t  TotalPayment\t\t: Rp.${(price - price * (discount / 100)) + ((price - price * (discount / 100)) * (tax / 100))}`;
    }
  } catch (error : any) {
    return error.message;
  }
}

console.info(getSalesDiscount("a", 1, 5)); // Price harus dalam angka
console.info(getSalesDiscount(500, "pajak", 5)); // Tax harus dalam angka
console.info(getSalesDiscount("harga", "pajak", "discount")); // Price, Tax, & Discount harus dalam angka
console.info(getSalesDiscount(4500, 10, 5)); // contoh output dibawah
// Total sales             : Rp.4500
// Discount (5%)           : Rp.225
// PriceAfterDiscount      : Rp.4275
// Pajak (10%)             : Rp.427.5
// -----------------------------------
// TotalPayment            : Rp.4702.5
