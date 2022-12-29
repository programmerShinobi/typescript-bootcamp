/**
 * Buat function untuk menghitung luas area lingkaran
 * adalah area = π * radius^2, dimana phi = 3.14159
 * L = π x r x r
 * sample Output :
 * 
 * return radius -1 <= 0, try higher
 * console.info(getAreaCircle('-1'));
 * 
 * return inputan harus dalam angka
 * console.info(getAreaCircle('a'));
 * 
 * return 78.53975
 * console.info(getAreaCircle(5));
 * 
 */


function getAreaCircle(radius: string | number): string | number {
  // cek apakah radius merupakan string yang dapat diubah menjadi number
  const parsedRadius = Number(radius);

  // jika tidak dapat diubah menjadi number, return "inputan harus dalam angka"
  if (isNaN(parsedRadius)) {
    return "inputan harus dalam angka";
  }

  // jika radius <= 0, return "radius -1 <= 0, try higher"
  if (parsedRadius <= 0) {
    return "radius -1 <= 0, try higher";
  }

  // hitung luas area lingkaran
  const phi = 3.14159;
  const area = phi * parsedRadius ** 2;

  // return hasil perhitungan
  return area;
}

// contoh penggunaan function

console.info(getAreaCircle(-1)); // return "radius -1 <= 0, try higher"
console.info(getAreaCircle("a")); // return "inputan harus dalam angka"
console.info(getAreaCircle(5)); // return 78.53975


