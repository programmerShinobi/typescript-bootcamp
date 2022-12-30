/**
 * Buat function elapsedTime(seconds)
 * untuk mengkonversi jumlah detik ke hari, jam, menit dan detik.
 * contoh jika ada intputan adalah 700005 detik,
 * maka outputnya : 8 hari 2 jam 26 menit 45 detik,
 * 
 * Sample output
 * 
 * console.info(getPeriodTimes("700005A")); // 700005A is not number
 * console.info(getPeriodTimes("700005")); // 8 hari 2 jam 26 menit 45 detik
 * 
 */

function elapsedTime(seconds : number | string): string {
    try {
        
        if (typeof seconds !== 'number') {
            throw new Error("FAILED  : "+ seconds + " is not a number");
        }

        /**
         * 84400 adalah jumlah detik dalam sehari.
         * Diperoleh dengan mengalikan jumlah jam dalam sehari (24)
         * dengan jumlah menit dalam setiap jam (60)
         * dan jumlah detik dalam setiap menit (60).
         * -----------------------------------------------------------------------
         * 24 hours/day * 60 minutes/hour * 60 seconds/minute = 86400 seconds/day
         * _______________________________________________________________________
         * 
         * 
         * Nilai 86400 digunakan dalam function elapsedTime
         * untuk menghitung jumlah hari dari jumlah detik yang diberikan.
         * -----------------------------------
         * days = Math.floor(seconds / 86400)
         * -----------------------------------
         * 
         * 
         * Sisa bagi dari pembagian seconds
         * dengan 86400 kemudian dibagi lagi dengan 3600 untuk menghitung jumlah jam,
         * lalu sisa bagi dari pembagian tersebut dibagi dengan 60 untuk menghitung jumlah menit,
         * dan sisa bagi terakhir dari pembagian tersebut digunakan untuk menghitung jumlah detik.
         * ------------------------------------------------------
         * hours = Math.floor((seconds % 86400) / 3600)
         * minutes = Math.floor(((seconds % 86400) % 3600) / 60)
         * secs = Math.floor(((seconds % 86400) % 3600) % 60)
         * ------------------------------------------------------
         * 
         */

        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
        const secs = Math.floor(((seconds % 86400) % 3600) % 60);

        let result = '';
        if (days > 0) {
            result += days + ' hari ';
        }
        if (hours > 0) {
            result += hours + ' jam ';
        }
        if (minutes > 0) {
            result += minutes + ' menit ';
        }
        if (secs > 0) {
            result += secs + ' detik';
        }

        return "SUCCESS : "+ result.trim();

    } catch (error : any) {
        return error.message;
    }
}

console.info(elapsedTime("700005A")); // 700005A is not a number
console.info(elapsedTime(700005)); // 8 hari 2 jam 26 menit 45 detik
