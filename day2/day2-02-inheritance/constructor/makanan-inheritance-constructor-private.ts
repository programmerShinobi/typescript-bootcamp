class MakananInConstructorPri {
    private nama: string = ``;
    private jenis: string = ``;
    private kalori: number = 0;
    private harga: number = 0;
    private satuan: string = ``;

    constructor(nama: string, jenis: string, kalori:number, harga:number, satuan:string) {
        this.nama = nama;
        this.jenis = jenis;
        this.kalori = kalori;
        this.harga = harga;
        this.satuan = satuan;
    }
    
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

    setNama() {
        return `${this.nama}`;
    }
    
    setJenis() {
        return `${this.jenis}`;
    }

    setKalori() {
        return `${this.kalori}`;
    }

    setSatuan() {
        return `${this.satuan}`;
    }

    setHarga() {
        return `${this.harga}`;
    }

}


class MakananInConstructorPriAsalDaerah extends MakananInConstructorPri {
    asalDaerah: string = ``;
    constructor(nama: string, jenis: string, kalori:number, harga:number, satuan:string, asalDaerah:string) {
        super(nama, jenis, kalori, harga, satuan);
        this.asalDaerah = asalDaerah;
    }

    getAsalDaerah(): string {
        return `Makanan ini asal daerah ${this.asalDaerah}`
    }

    getSemua(): string {
        let angka = super.setHarga();
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
        return `Jenis makanan ${super.setJenis()} salah satunya, yaitu ${super.setNama()} memiliki tingkat kalori ${super.setKalori()} dengan harga Rp.${rupiah},- /${super.setSatuan()}.\nMakanan tersebut berasal dari daerah ${this.asalDaerah}`;
    }

}

let MakananInConstructorPriAsalDaerahBaru1 = new MakananInConstructorPriAsalDaerah('Nasi Padang', 'Main Course', 112, 7000, 'porsi', 'Padang');

let MakananInConstructorPriAsalDaerahBaru2 = new MakananInConstructorPriAsalDaerah('Pallu Butung', 'Dessert', 301, 15000, 'porsi', 'Makassar');

let MakananInConstructorPriAsalDaerahBaru3 = new MakananInConstructorPriAsalDaerah('Asinan Bogor', 'Appetizer', 130, 5000, 'porsi', 'Bogor');


console.info(`========`);
console.info(`Object 1`);
console.info(`========`);
console.info(MakananInConstructorPriAsalDaerahBaru1.getJenis());
console.info(MakananInConstructorPriAsalDaerahBaru1.getNama());
console.info(MakananInConstructorPriAsalDaerahBaru1.getKalori());
console.info(MakananInConstructorPriAsalDaerahBaru1.getHarga());
console.info(MakananInConstructorPriAsalDaerahBaru1.getSatuan());
console.info(MakananInConstructorPriAsalDaerahBaru1.getAsalDaerah());
console.info(`------------------------------`);
console.info(MakananInConstructorPriAsalDaerahBaru1.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 2`);
console.info(`========`);
console.info(MakananInConstructorPriAsalDaerahBaru2.getJenis());
console.info(MakananInConstructorPriAsalDaerahBaru2.getNama());
console.info(MakananInConstructorPriAsalDaerahBaru2.getKalori());
console.info(MakananInConstructorPriAsalDaerahBaru2.getHarga());
console.info(MakananInConstructorPriAsalDaerahBaru2.getSatuan());
console.info(MakananInConstructorPriAsalDaerahBaru2.getAsalDaerah());
console.info(`--------------------------------`);
console.info(MakananInConstructorPriAsalDaerahBaru2.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 3`);
console.info(`========`);
console.info(MakananInConstructorPriAsalDaerahBaru3.getJenis());
console.info(MakananInConstructorPriAsalDaerahBaru3.getNama());
console.info(MakananInConstructorPriAsalDaerahBaru3.getKalori());
console.info(MakananInConstructorPriAsalDaerahBaru3.getHarga());
console.info(MakananInConstructorPriAsalDaerahBaru3.getSatuan());
console.info(MakananInConstructorPriAsalDaerahBaru3.getAsalDaerah());
console.info(`-----------------------------`);
console.info(MakananInConstructorPriAsalDaerahBaru3.getSemua());

console.info(`\n`);

