/**
 * Buat function untuk menghitung totalGaji(gaji1,gaji2,gaji3)
 * yang harus dibayarkan ke 3 karyawannya.
 * Dan tentukan juga gai + pajak tiap karyawan
 * 
 * sample output :
 * 
 * console.info(totalGaji(500, 2000, 12000)); // hasil output di bawah
 * Total gaji yang di bayar :
 * Emp1 : Rp.500 + Pajak(2%) = Rp.510
 * Emp2 : Rp.2000 + Pajak(5%) = Rp.2100
 * Emp3 : Rp.12000 + Pajak(10%) = Rp.13200
 * Total : Rp.15810
 * 
 */

function totalGaji(gaji1: any, gaji2: any, gaji3: any): string {
    try {
        if (isNaN(gaji1) || isNaN(gaji2) || isNaN(gaji3)) {
            throw new Error(`FAILED  : Value must be a number`);
            
        }
        // Hitung gaji + pajak tiap karyawan
        const gaji1Pajak = gaji1 + gaji1 * 0.02;
        const gaji2Pajak = gaji2 + gaji2 * 0.05;
        const gaji3Pajak = gaji3 + gaji3 * 0.1;
        const totalGajiPajak = gaji1Pajak + gaji2Pajak + gaji3Pajak
    
        // Kembalikan hasil hitungan dalam bentuk string
        return `SUCCESS : Total gaji yang dibayar :\n\t  ------------------------------------------\n\t  Emp1 : Rp.${gaji1} + Pajak(2%) \t= Rp.${gaji1Pajak}\n\t  Emp2 : Rp.${gaji2} + Pajak(5%) \t= Rp.${gaji2Pajak}\n\t  Emp3 : Rp.${gaji3} + Pajak(10%) \t= Rp.${gaji3Pajak}\n\t  ------------------------------------------\n\t  Total  \t\t\t  Rp.${totalGajiPajak}`;
        
    } catch (error : any) {
        return error.message;
    }
}

console.info(totalGaji("500", "a", 12000));
/**
 * SUCCESS :    Total gaji yang dibayar :
                ------------------------------------------
                Emp1 : Rp.500 + Pajak(2%)     = Rp.510
                Emp2 : Rp.2000 + Pajak(5%)    = Rp.2100
                Emp3 : Rp.12000 + Pajak(10%)  = Rp.13200
                ------------------------------------------
                Total                           Rp.15810
 */
