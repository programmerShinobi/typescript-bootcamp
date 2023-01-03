class MakananConstructor {
    nama: string = ``;
    jenis: string = ``;
    kalori: number = 0;
    harga: number = 0;
    static satuan: string = ``;

    constructor(c_nama: string, c_jenis: string, c_kalori: number, c_harga:number, c_satuan: string) {
        this.nama = c_nama;
        this.jenis = c_jenis;
        this.kalori = c_kalori;
        this.harga = c_harga;
        MakananConstructor.satuan = c_satuan;
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

    static getSatuan(): string {
        return `Satuan makanan ini ${MakananConstructor.satuan}`;
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
        return `Jenis makanan ${this.jenis} salah satunya, yaitu ${this.nama} memiliki tingkat kalori ${this.kalori} dengan harga Rp.${rupiah},- /${MakananConstructor.satuan}`;
    }
}


let MakananConstructorBaru1 = new MakananConstructor('Nasi', 'Main Course', 112, 5000, '');

let MakananConstructorBaru2 = new MakananConstructor('Agar', 'Dessert', 25, 10000, '');

// insert static satuan : terakhir saja
let MakananConstructorBaru3 = new MakananConstructor('Serabi', 'Appetizer', 245, 7000, 'porsi');


console.info(`========`);
console.info(`Object 1`);
console.info(`========`);
console.info(MakananConstructorBaru1.getJenis());
console.info(MakananConstructorBaru1.getNama());
console.info(MakananConstructorBaru1.getKalori());
console.info(MakananConstructorBaru1.getHarga());
console.info(MakananConstructor.getSatuan());
console.info(`------------------------`);
console.info(MakananConstructorBaru1.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 2`);
console.info(`========`);
console.info(MakananConstructorBaru2.getJenis());
console.info(MakananConstructorBaru2.getNama());
console.info(MakananConstructorBaru2.getKalori());
console.info(MakananConstructorBaru2.getHarga());
console.info(MakananConstructor.getSatuan());
console.info(`------------------------`);
console.info(MakananConstructorBaru2.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 3`);
console.info(`========`);
console.info(MakananConstructorBaru3.getJenis());
console.info(MakananConstructorBaru3.getNama());
console.info(MakananConstructorBaru3.getKalori());
console.info(MakananConstructorBaru3.getHarga());
console.info(MakananConstructor.getSatuan());
console.info(`------------------------`);
console.info(MakananConstructorBaru3.getSemua());

console.info(`\n`);

