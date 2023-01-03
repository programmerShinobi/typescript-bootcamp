class Persons{
    protected nama: string;
    protected umur: number;
    protected pekerjaan: string;
    static status: string = 'oke';

    constructor(c_nama: string, c_umur: number, c_pekerjaan: string) {
        this.nama = c_nama;
        this.umur = c_umur;
        this.pekerjaan = c_pekerjaan;
    }

    getNama() {
        return `Nama saya ${this.nama}`;
    }

    getUmur() {
        return `Umur saya ${this.umur}`;
    }

    getPekerjaan() {
        return `Pekerjaan saya ${this.pekerjaan}`
    }

    setNama(s_nama:string) {
        this.nama = s_nama;
    }

    setUmur(s_umur: number) {
        this.umur = s_umur;
    }

    setPekerjaan(s_pekerjaan: string) {
        this.pekerjaan = s_pekerjaan;
    }
}

let IT = new Persons('FaQih', 27, 'Programmer');
IT.setNama('FaQih Pratama Muhti');
IT.setUmur(27);
IT.setPekerjaan('Programmer');


console.info(IT.getNama());
console.info(IT.getUmur());
console.info(IT.getPekerjaan());