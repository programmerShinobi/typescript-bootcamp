/**
 * Buat function getRandomPassword(s) untuk generate karakter random password menggunakan typescript,
 * dengan ketentuan constraint :
 * - inputan dalam bentuk character,
 * - length inputan harus lebih dari 6 karakter
 * 
 * sample output :
 * 
 * console.info(getRandomPassword("123465")); // Value must be character
 * console.info(getRandomPassword(3422)); // Value must be character
 * console.info(getRandomPassword("code")); // Length must more than 6
 * console.info(getRandomPassword("codeid")); // <randomPassword>
 * 
 */

function getRandomPassword(s: any): string {
    try {
        
        if (!(isNaN(s))) {
            throw new Error("FAILED  : Value must be character");
        }
    
        if (s.length < 6) {
            throw new Error("FAILED  : Length must more than 6");
        }
    
        
        /**
         * For loop digunakan untuk melakukan iterasi sebanyak panjang string s.
         * Setiap iterasi, sebuah index acak dari characters dipilih menggunakan Math.random() dan Math.floor(),
         * kemudian karakter pada index tersebut ditambahkan ke string password.
         * Math.random() adalah sebuah function yang mengembalikan nilai acak.
         * Math.floor() adalah sebuah function yang menghitung nilai pembulatan kebawah dari sebuah bilangan desimal.
         * 
         * Jadi, kode Math.floor(Math.random() * characters.length) mengembalikan index acak dari characters.
         * Kemudian, karakter pada index tersebut ditambahkan ke password.
         * Proses ini diulang sebanyak panjang string s,
         * sehingga akan menghasilkan string password dengan panjang yang sama dengan s,
         * yang terdiri dari karakter-karakter acak dari characters.
         * 
        */
        
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';
       
        for (let i = 0; i < s.length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
    
        return "SUCCESS : " + password;

    } catch (error : any) {
        return error.message;
    }
}

console.info(getRandomPassword("123465")); // Value must be character
console.info(getRandomPassword(3422)); // Value must be character
console.info(getRandomPassword("code")); // Length must more than 6
console.info(getRandomPassword("codeid")); // <randomPassword>
