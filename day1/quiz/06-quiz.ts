/**
 * Buat function getCoordinate(x1,y1,x2,y2) untuk menghitung jarak koordinat dalam cartesius, jika diketahui rumus koordinat : 
 * d = √(x2-x1)^2 + (y2-y1)^2 
 * menggunakan typescript sesuai dengan output di bawah ini :
 * 
 * return 9 :
 * console.info(getCoordinate(3, 4, -4, -5));
 * 
 * return 1 : 
 * console.info(getCoordinate(1, 2, -1, -2));
 * 
 * return input koordinat dalam angka
 * console.info(getCoordinate('x', 2, '-y', -2));
 * 
 * 13.695801445917125 :
 * console.info(getCoordinate(3.2, 4.5, -4.4, -5));
 * 
 * @param x1 
 * @param y1 
 * @param x2 
 * @param y2 
 * @returns 
 */

function getCoordinate(x1: any, y1: any, x2: any, y2: any): number | string{
  try {
    // Cek apakah input yang diberikan adalah angka
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      throw new Error("FAILED  : Input koordinat dalam angka");
    }
  
    // Hitung jarak koordinat dalam cartesius
    const distance = Math.sqrt((Math.pow((x1 - x2), 2)) + (Math.pow((y1 - y2), 2)));
  
    return "SUCCESS : " + distance;
  } catch (error : any) {
    return error.message;
  }
}

console.info(getCoordinate(3, 4, 3, -5)); // return 9
console.info(getCoordinate("-1", "3", "-1", "2")); // return 1
console.info(getCoordinate("x", "2", "-y", "-2")); // return input koordinat dalam angka
console.info(getCoordinate(3.2, 4.5, -4.4, -5)); // return 13.695801445917125
