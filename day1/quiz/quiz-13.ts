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
      
        /**
         * function isPalindrome akan diconvert ke string menggunakan angka.toString()
         * Misalnya, jika angka yang dimasukkan adalah 1221,
         * maka angka.toString() akan menghasilkan string "1221".
         * 
         * String hasil dari angka.toString()
         * akan dipetakan ke dalam array of characters dengan menggunakan method charAt().
         * Method charAt() akan mengembalikan karakter pada indeks tertentu dari string.
         * Misalnya, "1221".charAt(0) akan mengembalikan karakter "1", "1221".charAt(1)
         * akan mengembalikan karakter "2", dan seterusnya
         * 
         * Setelah itu, akan dilakukan pembandingan antara karakter pada indeks ke-0
         * dengan karakter pada indeks ke-3,
         * serta karakter pada indeks ke-1 dengan karakter pada indeks ke-2.
         * Jika karakter-karakter tersebut sama,
         * maka input akan dikategorikan sebagai palindrome.
         * Namun jika salah satu pembandingan tersebut tidak sesuai,
         * maka input akan dikategorikan sebagai bukan palindrome.
         * 
         */
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
