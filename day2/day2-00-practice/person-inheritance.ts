class PersonInheritance{
    nama: string;
    umur: number;
    pekerjaan: string;

    constructor(c_nama: string, c_umur: number, c_pekerjaan: string) {
        this.nama = c_nama;
        this.umur = c_umur;
        this.pekerjaan = c_pekerjaan;
    }

    getPersonInheritance() {
        return `Nama saya ${this.nama}, pekerjaan sebagai ${this.pekerjaan}`
    }
}

class employee extends PersonInheritance{
    status: string;
    constructor(c_nama: string, c_umur: number, c_pekerjaan: string, c_status:string) {
        super(c_nama, c_umur, c_pekerjaan);
        this.status = c_status;
    }
    getNama() {
        return `Nama saya ${this.nama} status ${this.status}`;
    }
}

let employee1 = new employee('FaQih', 27, 'Programmer', 'Lajang');
console.info(employee1.getPersonInheritance());
console.info(employee1.getNama());