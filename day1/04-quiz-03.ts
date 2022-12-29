/**
 * Buat function untuk konversi suhu dari Fareinheit ke Kelvin dengan rumus :
 * Kelvin = (Fareinheit + 459.67)/1.8 menggunakan typescript dengan sample Output dibawah ini :
 * 
 * sample output :
 * 
 * Convert Fareinheit (45) to Kelvin = 280
 * console.info(fareinheitToKelvin(45));
 * 
 * Convert Fareinheit (1) to Kelvin = 811
 * console.info((fareinheitToKelvin("1"))l
 * 
 * Fareinheit must an number
 * console.info((fareinheitToKelvin("F"));
 * 
 */

function fareinheitToKelvin(fareinheit: string | number): string | number {
  // cek apakah fareinheit merupakan string yang dapat diubah menjadi number
  const parsedFareinheit = Number(fareinheit);

  // jika tidak dapat diubah menjadi number, return "fareinheit must be a number"
  if (isNaN(parsedFareinheit)) {
    return "fareinheit must be a number";
  }

  // hitung konversi suhu dari Fareinheit ke Kelvin
  const kelvin = (parsedFareinheit + 459.67) / 1.8;

  // return hasil perhitungan
  return `Convert Fareinheit (${parsedFareinheit}) to Kelvin = ${Math.round(kelvin)}`;
}

// contoh penggunaan function

console.info(fareinheitToKelvin(45)); // return "Convert Fareinheit (45) to Kelvin = 280"
console.info(fareinheitToKelvin("1")); // return "Convert Fareinheit (1) to Kelvin = 811"
console.info(fareinheitToKelvin("F")); // return "fareinheit must be a number"
