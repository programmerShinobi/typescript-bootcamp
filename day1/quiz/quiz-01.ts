/**
 * Buat function untuk menghitung luas area lingkaran
 * adalah area = π * radius^2, dimana phi = 3.14159
 * L = π x r x r
 * 
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

function getAreaCircle(radius: any ): number | string {
  try {
    if (isNaN(radius)) {
      // jika tidak dapat diubah menjadi number, return "inputan harus dalam angka"
      throw new Error("FAILED  : Inputan harus dalam angka")
    }
    if (radius <= 0) {
      // jika radius <= 0, return "radius -1 <= 0, try higher"
      throw new Error("FAILED  : Radius -1 <= 0, try higher")
    }
    else {
      // cek apakah radius merupakan string yang dapat diubah menjadi number
      const parsedRadius = Number(radius);
  
      // hitung luas area lingkaran
      const phi = 3.14159;
      const area = phi * parsedRadius ** 2;
  
      // return hasil perhitungan
      return "SUCCESS : " + area;    
    }

  } catch (error : any) {
    // catch throw error
    return error.message;
  }

} 

// panggil function
console.info(getAreaCircle(-1)); // return "radius -1 <= 0, try higher"
console.info(getAreaCircle("a")); // return "inputan harus dalam angka"
console.info(getAreaCircle(5)); // return 78.53975


