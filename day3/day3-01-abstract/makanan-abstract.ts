abstract class MakananAbstract {
    nama: string = ``;
    jenis: string = ``;
    kalori: number = 0;
    harga: number = 0;
    static satuan: string = ``;
    
    abstract getSemua(): string;

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
}


class MakananAbstractAsalDaerah extends MakananAbstract {
    asalDaerah: string = ``;
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
        return `Jenis makanan ${this.jenis} salah satunya, yaitu ${this.nama} memiliki tingkat kalori ${this.kalori} dengan harga Rp.${rupiah},- /${MakananAbstractAsalDaerah.satuan}.\nMakanan tersebut berasal dari daerah ${this.asalDaerah}`;
    }

}

// insert static satuan : terakhir saja
MakananAbstractAsalDaerah.satuan = 'porsi';

let MakananAbstractAsalDaerahBaru1 = new MakananAbstractAsalDaerah();
MakananAbstractAsalDaerahBaru1.nama = 'Nasi Padang';
MakananAbstractAsalDaerahBaru1.jenis = 'Main Course';
MakananAbstractAsalDaerahBaru1.kalori = 112;
MakananAbstractAsalDaerahBaru1.harga = 7000;
MakananAbstractAsalDaerahBaru1.asalDaerah = 'Padang';

let MakananAbstractAsalDaerahBaru2 = new MakananAbstractAsalDaerah();
MakananAbstractAsalDaerahBaru2.nama = 'Pallu Butung';
MakananAbstractAsalDaerahBaru2.jenis = 'Dessert';
MakananAbstractAsalDaerahBaru2.kalori = 301;
MakananAbstractAsalDaerahBaru2.harga = 15000;
MakananAbstractAsalDaerahBaru2.asalDaerah = 'Makassar';

let MakananAbstractAsalDaerahBaru3 = new MakananAbstractAsalDaerah();
MakananAbstractAsalDaerahBaru3.nama = 'Asinan Bogor';
MakananAbstractAsalDaerahBaru3.jenis = 'Appetizer';
MakananAbstractAsalDaerahBaru3.kalori = 130;
MakananAbstractAsalDaerahBaru3.harga = 5000;
MakananAbstractAsalDaerahBaru3.asalDaerah = 'Bogor';

console.info(`========`);
console.info(`Object 1`);
console.info(`========`);
console.info(MakananAbstractAsalDaerahBaru1.getJenis());
console.info(MakananAbstractAsalDaerahBaru1.getNama());
console.info(MakananAbstractAsalDaerahBaru1.getKalori());
console.info(MakananAbstractAsalDaerahBaru1.getHarga());
console.info(MakananAbstractAsalDaerah.getSatuan());
console.info(MakananAbstractAsalDaerahBaru1.getAsalDaerah());
console.info(`------------------------------`);
console.info(MakananAbstractAsalDaerahBaru1.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 2`);
console.info(`========`);
console.info(MakananAbstractAsalDaerahBaru2.getJenis());
console.info(MakananAbstractAsalDaerahBaru2.getNama());
console.info(MakananAbstractAsalDaerahBaru2.getKalori());
console.info(MakananAbstractAsalDaerahBaru2.getHarga());
console.info(MakananAbstractAsalDaerah.getSatuan());
console.info(MakananAbstractAsalDaerahBaru2.getAsalDaerah());
console.info(`--------------------------------`);
console.info(MakananAbstractAsalDaerahBaru2.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 3`);
console.info(`========`);
console.info(MakananAbstractAsalDaerahBaru3.getJenis());
console.info(MakananAbstractAsalDaerahBaru3.getNama());
console.info(MakananAbstractAsalDaerahBaru3.getKalori());
console.info(MakananAbstractAsalDaerahBaru3.getHarga());
console.info(MakananAbstractAsalDaerah.getSatuan());
console.info(MakananAbstractAsalDaerahBaru3.getAsalDaerah());
console.info(`-----------------------------`);
console.info(MakananAbstractAsalDaerahBaru3.getSemua());
