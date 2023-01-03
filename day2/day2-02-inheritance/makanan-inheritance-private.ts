class MakananInPri {
    private nama: string = ``;
    private jenis: string = ``;
    private kalori: number = 0;
    private harga: number = 0;
    private static satuan: string = ``;
    
    getJenis(): string {
        return `Jenis makanan ini ${this.jenis}`;
    }
    
    getNama(): string {
        return `Nama makanan ini ${this.nama}`;
    }

    getKalori(): string{
        return `Kalori makanan ini ${this.kalori}`;
    }

    getHarga(): string {
        let angka = this.harga;
        /**
         * Variable angka dikonversi ke dalam bentuk string dengan menggunakan method toString().
         * 
         */
        let angkaString = angka.toString();
        
        /**
         * Variabel numberString diisi dengan hasil dari menghilangkan semua karakter
         * kecuali angka dan tanda koma (,) dengan menggunakan regular expression /[^,\d]/g,
         * kemudian tipe data numberString diubah menjadi string dengan toString().
         * 
         */
        let numberString: string = angkaString.replace(/[^,\d]/g, '').toString();
        
        /**
         * Variabel split diisi dengan hasil dari memecah string numberString menjadi array of string
         * berdasarkan tanda koma (,)
         * 
         */
        let split: Array<string> = numberString.split(',');

        /**
         * Variabel sisa diisi dengan panjang dari bagian pertama dari array split modulo 3,
         * yang merupakan panjang sisa dari bagian pertama array tersebut setelah dibagi dengan 3.
         * 
         */
        let sisa: any = split[0].length % 3;

        /**
         * Variabel rupiah diisi dengan bagian pertama dari array split, yang merupakan bagian awal dari angka tersebut
         * sesuai dengan panjang sisa yang telah ditentukan sebelumnya.
         * 
         */
        let rupiah: string = split[0].substr(0, sisa);

        /**
         * Variabel bernama ribuan yang diisi dengan hasil dari method match()
         * pada string yang diambil dari bagian pertama dari array split yang diambil dari indeks sisa
         * kemudian diikuti dengan regex /\d{3}/gi.
         * 
         * Regex /\d{3}/gi berarti "cari semua kemunculan tiga karakter angka (\d) secara global (g)
         * dan tidak peduli dengan case-sensitif (i)".
         * 
         * Hasil dari method match() adalah array yang berisi semua kemunculan tiga karakter angka yang ditemukan,
         * atau null jika tidak ditemukan kemunculan tiga karakter angka
         * 
         */
        let ribuan: Array<string> | null = split[0].substr(sisa).match(/\d{3}/gi);
        
        /**
         * Blok kondisi if yang akan dijalankan jika ribuan terdefinisi (tidak null).
         * Di dalam blok kondisi tersebut,variabel separator diisi dengan tanda titik (.) jika panjang sisa tidak sama dengan nol,
         * atau dengan string kosong jika panjang sisa sama dengan nol.
         * Variabel rupiah diisi dengan hasil dari menggabungkan variabel rupiah dengan separator
         * dan hasil dari menggabungkan setiap elemen dari array ribuan menggunakan tanda titik (.) sebagai pemisah
         * 
         */
        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        /**
         * Variabel rupiah diisi dengan hasil dari menggabungkan bagian pertama dari array split dengan tanda koma (,)
         * dan bagian kedua dari array split,
         * atau hanya dengan bagian pertama dari array split jika bagian kedua tidak terdefinisi (undefined).
         * 
         */
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return `Harga makanan ini Rp.${rupiah},-`;
    }

    static getSatuan(): string {
        return `Satuan makanan ini ${this.satuan}`;
    }

    getSemua(): string {
        let angka = this.harga;
        /**
         * Variable angka dikonversi ke dalam bentuk string dengan menggunakan method toString().
         * 
         */
        let angkaString = angka.toString();
        
        /**
         * Variabel numberString diisi dengan hasil dari menghilangkan semua karakter
         * kecuali angka dan tanda koma (,) dengan menggunakan regular expression /[^,\d]/g,
         * kemudian tipe data numberString diubah menjadi string dengan toString().
         * 
         */
        let numberString: string = angkaString.replace(/[^,\d]/g, '').toString();
        
        /**
         * Variabel split diisi dengan hasil dari memecah string numberString menjadi array of string
         * berdasarkan tanda koma (,)
         * 
         */
        let split: Array<string> = numberString.split(',');

        /**
         * Variabel sisa diisi dengan panjang dari bagian pertama dari array split modulo 3,
         * yang merupakan panjang sisa dari bagian pertama array tersebut setelah dibagi dengan 3.
         * 
         */
        let sisa: any = split[0].length % 3;

        /**
         * Variabel rupiah diisi dengan bagian pertama dari array split, yang merupakan bagian awal dari angka tersebut
         * sesuai dengan panjang sisa yang telah ditentukan sebelumnya.
         * 
         */
        let rupiah: string = split[0].substr(0, sisa);

        /**
         * Variabel bernama ribuan yang diisi dengan hasil dari method match()
         * pada string yang diambil dari bagian pertama dari array split yang diambil dari indeks sisa
         * kemudian diikuti dengan regex /\d{3}/gi.
         * 
         * Regex /\d{3}/gi berarti "cari semua kemunculan tiga karakter angka (\d) secara global (g)
         * dan tidak peduli dengan case-sensitif (i)".
         * 
         * Hasil dari method match() adalah array yang berisi semua kemunculan tiga karakter angka yang ditemukan,
         * atau null jika tidak ditemukan kemunculan tiga karakter angka
         * 
         */
        let ribuan: Array<string> | null = split[0].substr(sisa).match(/\d{3}/gi);
        
        /**
         * Blok kondisi if yang akan dijalankan jika ribuan terdefinisi (tidak null).
         * Di dalam blok kondisi tersebut,variabel separator diisi dengan tanda titik (.) jika panjang sisa tidak sama dengan nol,
         * atau dengan string kosong jika panjang sisa sama dengan nol.
         * Variabel rupiah diisi dengan hasil dari menggabungkan variabel rupiah dengan separator
         * dan hasil dari menggabungkan setiap elemen dari array ribuan menggunakan tanda titik (.) sebagai pemisah
         * 
         */
        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        /**
         * Variabel rupiah diisi dengan hasil dari menggabungkan bagian pertama dari array split dengan tanda koma (,)
         * dan bagian kedua dari array split,
         * atau hanya dengan bagian pertama dari array split jika bagian kedua tidak terdefinisi (undefined).
         * 
         */
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return `Jenis makanan ${this.jenis} salah satunya, yaitu ${this.nama} memiliki tingkat kalori ${this.kalori} dengan harga Rp.${rupiah},- /${MakananInPri.satuan}.`;
    }

    setNama(nama: string) {
        this.nama = nama;
    }
    
    setJenis(jenis: string) {
        this.jenis = jenis;
    }

    setKalori(kalori: number) {
        this.kalori = kalori;
    }

    static setSatuan(satuan: string) {
        this.satuan = satuan;
    }

    setHarga(harga: number) {
        this.harga = harga;
    }


}


class MakananInPriAsalDaerahProtected extends MakananInPri {
    private asalDaerah: string = ``;

    getAsalDaerah(): string {
        return `Makanan ini asal daerah ${this.asalDaerah}`
    }

    
    setAsalDaerah(asalDaerah: string) {
        this.asalDaerah = asalDaerah;
    }
    
    getSemuaAsalDaerah():string {
        return `\nMakanan tersebut berasal dari daerah ${this.asalDaerah}`;
    }

}

// insert static satuan : terakhir saja
MakananInPriAsalDaerahProtected.setSatuan('porsi');

let MainCourseInPri = new MakananInPriAsalDaerahProtected();
MainCourseInPri.setNama('Nasi Padang');
MainCourseInPri.setJenis('Main Course');
MainCourseInPri.setKalori(112);
MainCourseInPri.setHarga(7000);
MainCourseInPri.setAsalDaerah('Padang');

let DessertInPri = new MakananInPriAsalDaerahProtected();
DessertInPri.setNama('Pallu Butung');
DessertInPri.setJenis('Dessert');
DessertInPri.setKalori(301);
DessertInPri.setHarga(15000);
DessertInPri.setAsalDaerah('Makassar');

let AppetizerInPri = new MakananInPriAsalDaerahProtected();
AppetizerInPri.setNama('Asinan Bogor');
AppetizerInPri.setJenis('Appetizer');
AppetizerInPri.setKalori(130);
AppetizerInPri.setHarga(5000);
AppetizerInPri.setAsalDaerah('Bogor');


console.info(`========`);
console.info(`Object 1`);
console.info(`========`);
console.info(MainCourseInPri.getJenis());
console.info(MainCourseInPri.getNama());
console.info(MainCourseInPri.getKalori());
console.info(MainCourseInPri.getHarga());
console.info(MakananInPriAsalDaerahProtected.getSatuan());
console.info(MainCourseInPri.getAsalDaerah());
console.info(`------------------------------`);
console.info(MainCourseInPri.getSemua() + MainCourseInPri.getSemuaAsalDaerah());

console.info(`\n`);

console.info(`========`);
console.info(`Object 2`);
console.info(`========`);
console.info(DessertInPri.getJenis());
console.info(DessertInPri.getNama());
console.info(DessertInPri.getKalori());
console.info(DessertInPri.getHarga());
console.info(MakananInPriAsalDaerahProtected.getSatuan());
console.info(DessertInPri.getAsalDaerah());
console.info(`--------------------------------`);
console.info(DessertInPri.getSemua() + DessertInPri.getSemuaAsalDaerah());

console.info(`\n`);

console.info(`========`);
console.info(`Object 3`);
console.info(`========`);
console.info(AppetizerInPri.getJenis());
console.info(AppetizerInPri.getNama());
console.info(AppetizerInPri.getKalori());
console.info(AppetizerInPri.getHarga());
console.info(MakananInPriAsalDaerahProtected.getSatuan());
console.info(AppetizerInPri.getAsalDaerah());
console.info(`-----------------------------`);
console.info(AppetizerInPri.getSemua() + AppetizerInPri.getSemuaAsalDaerah());

console.info(`\n`);
