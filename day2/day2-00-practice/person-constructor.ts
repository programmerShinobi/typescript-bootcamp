class Person{
    nama: string;
    umur: number;
    pekerjaan: string;

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
}

let emp = new Person('FaQih', 27, 'Programmer');
console.info(emp.getNama());