/**
 * Buat function untuk menghitung jarak antar kota A dan B,
 * Jika di ketahui jarak : S= 1/2*a*t^2 :
 * 
 * sample output:
 * 
 * input must an number
 * console.info(calculateDistance("a","t")); 
 * 
 * Acceleration or time must be >= 0
 * console.info(calculatorDistance(-1,9)); 
 * 
 * Jarak yang ditempuh adalah 90000 meter/s
 * console.info(calculatorDistance(50,60));
 * 
 */

function calculateDistance(a: string | number, t: string | number): any {
  try {

    // cek apakah a dan t merupakan string yang dapat diubah menjadi number
    const parsedA = Number(a);
    const parsedT = Number(t);
  
    // jika tidak dapat diubah menjadi number, return "input must be a number"
    if (isNaN(parsedA) || isNaN(parsedT)) {
      throw new Error("FAILED  : Input must be a number");
    }
  
    // jika a atau t < 0, return "acceleration or time must be >= 0"
    if (parsedA < 0 || parsedT < 0) {
      throw new Error("FAILED  : Acceleration or time must be >= 0");
    }
  
    // hitung jarak yang ditempuh
    const distance = 0.5 * parsedA * parsedT ** 2;
  
    // return hasil perhitungan
    return `SUCCESS : Jarak yang ditempuh adalah ${distance} meter/s`;
  } catch (error : any) {
    return error.message;
  }
}

// panggil function
console.info(calculateDistance("a", "t")); // return "input must be a number"
console.info(calculateDistance(-1, 9)); // return "acceleration or time must be >= 0"
console.info(calculateDistance(50, 60)); // return "Jarak yang ditempuh adalah 90000 meter/s"
