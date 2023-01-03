class MakananInPro {
    protected nama: string = ``;
    protected jenis: string = ``;
    protected kalori: number = 0;
    protected harga: number = 0;
    protected satuan: string = ``;
    
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

    getSatuan(): string {
        return `Satuan makanan ini ${this.satuan}`;
    }

}


class MakananInProAsalDaerahProtected extends MakananInPro {
    protected asalDaerah: string = ``;

    getAsalDaerah(): string {
        return `Makanan ini asal daerah ${this.asalDaerah}`
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
        return `Jenis makanan ${this.jenis} salah satunya, yaitu ${this.nama} memiliki tingkat kalori ${this.kalori} dengan harga Rp.${rupiah},- /${this.satuan}.\nMakanan tersebut berasal dari daerah ${this.asalDaerah}`;
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

    setSatuan(satuan: string) {
        this.satuan = satuan;
    }

    setHarga(harga: number) {
        this.harga = harga;
    }

    setAsalDaerah(asalDaerah: string) {
        this.asalDaerah = asalDaerah;
    }

}

let MainCourseInPro = new MakananInProAsalDaerahProtected();
MainCourseInPro.setNama('Nasi Padang');
MainCourseInPro.setJenis('Main Course');
MainCourseInPro.setKalori(112);
MainCourseInPro.setSatuan('porsi');
MainCourseInPro.setHarga(7000);
MainCourseInPro.setAsalDaerah('Padang');

let DessertInPro = new MakananInProAsalDaerahProtected();
DessertInPro.setNama('Pallu Butung');
DessertInPro.setJenis('Dessert');
DessertInPro.setKalori(301);
DessertInPro.setSatuan('porsi');
DessertInPro.setHarga(15000);
DessertInPro.setAsalDaerah('Makassar');

let AppetizerInPro = new MakananInProAsalDaerahProtected();
AppetizerInPro.setNama('Asinan Bogor');
AppetizerInPro.setJenis('Appetizer');
AppetizerInPro.setKalori(130);
AppetizerInPro.setSatuan('porsi');
AppetizerInPro.setHarga(5000);
AppetizerInPro.setAsalDaerah('Bogor');


console.info(`========`);
console.info(`Object 1`);
console.info(`========`);
console.info(MainCourseInPro.getJenis());
console.info(MainCourseInPro.getNama());
console.info(MainCourseInPro.getKalori());
console.info(MainCourseInPro.getHarga());
console.info(MainCourseInPro.getSatuan());
console.info(MainCourseInPro.getAsalDaerah());
console.info(`------------------------------`);
console.info(MainCourseInPro.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 2`);
console.info(`========`);
console.info(DessertInPro.getJenis());
console.info(DessertInPro.getNama());
console.info(DessertInPro.getKalori());
console.info(DessertInPro.getHarga());
console.info(DessertInPro.getSatuan());
console.info(DessertInPro.getAsalDaerah());
console.info(`--------------------------------`);
console.info(DessertInPro.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 3`);
console.info(`========`);
console.info(AppetizerInPro.getJenis());
console.info(AppetizerInPro.getNama());
console.info(AppetizerInPro.getKalori());
console.info(AppetizerInPro.getHarga());
console.info(AppetizerInPro.getSatuan());
console.info(AppetizerInPro.getAsalDaerah());
console.info(`-----------------------------`);
console.info(AppetizerInPro.getSemua());

console.info(`\n`);
