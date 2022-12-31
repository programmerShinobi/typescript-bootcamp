/**
 * Buat function isPalindrome(angka)
 * untuk men-cek apakah 4 digit inputan angka palindrome atau tidak, Hint : charAt
 * 
 * sample output :
 * 
 * console.info(isPalindrome("abcd")); // abcd is not an number
 * console.info(isPalindrome("123a")); // 123 is not number
 * console.info(isPalindrome("1234")); // 1234 is not palindrome
 * console.info(isPalindrome(1221)); // 1221 is palindrome
 * console.info(isPalindrome("8888")); // 8888 is palindrome
 * 
 */

function isPalindrome(angka: any): string {
    try {
        
        // Cek apakah input merupakan number dengan menggunakan typeof
        if (isNaN(angka)) {
          throw new Error(`FAILED  : ${angka} is not a number`);
        }
      
        // Cek apakah input merupakan 4 digit angka dengan menggunakan .toString()
        // dan .length
        if (angka.toString().length !== 4) {
          throw new Error(`FAILED  : ${angka} is not a 4-digit number`);
        }
      
        // Cek apakah input merupakan palindrome dengan membandingkan digit pertama
        // dan terakhir, kedua dan sebelum terakhir, dan seterusnya
        if (angka.toString().charAt(0) === angka.toString().charAt(3) &&
            angka.toString().charAt(1) === angka.toString().charAt(2)) {
          return `SUCCESS : ${angka} is palindrome`;
        } else {
          throw new Error(`FAILED  : ${angka} is not palindrome`);
        }

    } catch (error : any) {
        return error.message
    }
}

console.info(isPalindrome("abcd")); // "abcd is not a number"
console.info(isPalindrome("123a")); // "123 is not a number"
console.info(isPalindrome("1234")); // "1234 is not palindrome"
console.info(isPalindrome(2112)); // "1221 is palindrome"
console.info(isPalindrome("8888")); // "8888 is palindrome"
