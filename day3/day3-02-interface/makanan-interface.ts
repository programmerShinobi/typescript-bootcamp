 interface MakananComponent{
    getJenis(): string; 
    getNama(): string;
    getKalori(): string;
    getHarga(): string;
 }
 
 class MakananInterface implements MakananComponent {
    nama: string = ``;
    jenis: string = ``;
    kalori: number = 0;
    harga: number = 0;
    static satuan: string = ``;

    getJenis(): string {
        return `Jenis makanan ini ${this.jenis}`;
    }
    
    getNama(): string {
        return `Nama makanan ini ${this.nama}`;
    }

    getKalori(): string {
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


class MakananInterfaceAsalDaerah extends MakananInterface {
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
        return `Jenis makanan ${this.jenis} salah satunya, yaitu ${this.nama} memiliki tingkat kalori ${this.kalori} dengan harga Rp.${rupiah},- /${MakananInterfaceAsalDaerah.satuan}.\nMakanan tersebut berasal dari daerah ${this.asalDaerah}`;
    }

}

// insert static satuan : terakhir saja
MakananInterfaceAsalDaerah.satuan = 'porsi';

let MakananInterfaceAsalDaerahBaru1 = new MakananInterfaceAsalDaerah();
MakananInterfaceAsalDaerahBaru1.nama = 'Nasi Padang';
MakananInterfaceAsalDaerahBaru1.jenis = 'Main Course';
MakananInterfaceAsalDaerahBaru1.kalori = 112;
MakananInterfaceAsalDaerahBaru1.harga = 7000;
MakananInterfaceAsalDaerahBaru1.asalDaerah = 'Padang';

let MakananInterfaceAsalDaerahBaru2 = new MakananInterfaceAsalDaerah();
MakananInterfaceAsalDaerahBaru2.nama = 'Pallu Butung';
MakananInterfaceAsalDaerahBaru2.jenis = 'Dessert';
MakananInterfaceAsalDaerahBaru2.kalori = 301;
MakananInterfaceAsalDaerahBaru2.harga = 15000;
MakananInterfaceAsalDaerahBaru2.asalDaerah = 'Makassar';

let MakananInterfaceAsalDaerahBaru3 = new MakananInterfaceAsalDaerah();
MakananInterfaceAsalDaerahBaru3.nama = 'Asinan Bogor';
MakananInterfaceAsalDaerahBaru3.jenis = 'Appetizer';
MakananInterfaceAsalDaerahBaru3.kalori = 130;
MakananInterfaceAsalDaerahBaru3.harga = 5000;
MakananInterfaceAsalDaerahBaru3.asalDaerah = 'Bogor';

console.info(`========`);
console.info(`Object 1`);
console.info(`========`);
console.info(MakananInterfaceAsalDaerahBaru1.getJenis());
console.info(MakananInterfaceAsalDaerahBaru1.getNama());
console.info(MakananInterfaceAsalDaerahBaru1.getKalori());
console.info(MakananInterfaceAsalDaerahBaru1.getHarga());
console.info(MakananInterfaceAsalDaerah.getSatuan());
console.info(MakananInterfaceAsalDaerahBaru1.getAsalDaerah());
console.info(`------------------------------`);
console.info(MakananInterfaceAsalDaerahBaru1.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 2`);
console.info(`========`);
console.info(MakananInterfaceAsalDaerahBaru2.getJenis());
console.info(MakananInterfaceAsalDaerahBaru2.getNama());
console.info(MakananInterfaceAsalDaerahBaru2.getKalori());
console.info(MakananInterfaceAsalDaerahBaru2.getHarga());
console.info(MakananInterfaceAsalDaerah.getSatuan());
console.info(MakananInterfaceAsalDaerahBaru2.getAsalDaerah());
console.info(`--------------------------------`);
console.info(MakananInterfaceAsalDaerahBaru2.getSemua());

console.info(`\n`);

console.info(`========`);
console.info(`Object 3`);
console.info(`========`);
console.info(MakananInterfaceAsalDaerahBaru3.getJenis());
console.info(MakananInterfaceAsalDaerahBaru3.getNama());
console.info(MakananInterfaceAsalDaerahBaru3.getKalori());
console.info(MakananInterfaceAsalDaerahBaru3.getHarga());
console.info(MakananInterfaceAsalDaerah.getSatuan());
console.info(MakananInterfaceAsalDaerahBaru3.getAsalDaerah());
console.info(`-----------------------------`);
console.info(MakananInterfaceAsalDaerahBaru3.getSemua());
