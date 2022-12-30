/**
 * Buat function getHeavier(w1,w2,23)
 * untuk hitung siapa uyang paling berat dengan inputan 3 angka.
 * Tidak diperbolahkan menggunakan function max()
 * 
 * sample output :
 * 
 * console.info(getHeavier(12,45,70)); 70
 * 
 */

function getHeavier(w1: any, w2: any, w3: any): number | string {
    try {
        
        if (isNaN(w1)||isNaN(w2)||isNaN(w3)) {
            throw new Error("FAILED  : Value must be number");
            
        } else {
            // Menentukan berat terbesar dari w1 dan w2
            let heaviest = w1;
            if (w2 > heaviest) {
                heaviest = w2;
            }
        
            // Menentukan berat terbesar dari heaviest dan w3
            if (w3 > heaviest) {
                heaviest = w3;
            }
            
            return "SUCCESS : " + heaviest;
        }


    } catch (error : any) {
        return error.message;
    }    

}

console.info(getHeavier(12, 45, 70)); // Output: 70
