class PersonInheritancePrivate{
    private nama: string;
    private umur: number;
    private pekerjaan: string;

    status: string;
    constructor(c_nama: string, c_umur: number, c_pekerjaan: string, c_status:string) {
        this.nama = c_nama;
        this.umur = c_umur;
        this.pekerjaan = c_pekerjaan;
        this.status = c_status;
    }

    getPersonInheritance() {
        return `Nama saya ${this.nama}, pekerjaan sebagai ${this.pekerjaan}. Saat ini berumur ${this.umur}`
    }


    getNama() {
       return  `${this.nama}`;
    }

    setNama() {
        return `Nama saya ${this.nama} status ${this.status}`;
    }

}

class employeesPrivate extends PersonInheritancePrivate{
    status: string;
    constructor(c_nama: string, c_umur: number, c_pekerjaan: string, c_status:string) {
        super(c_nama, c_umur, c_pekerjaan, c_status);
        this.status = c_status;
    }

    showNama() {
        return `Nama saya ${super.getNama()} status ${this.status}`;
    }
}

let employee3 = new employeesPrivate('FaQih', 27, 'Programmer', 'Lajang');
console.info(employee3.getPersonInheritance());
console.info(employee3.showNama());