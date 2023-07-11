let data = true;
console.info(data);

let z: string | number | boolean; // union type
z = 9 + ''; 
z = 0;
z = true;

type tipeGabungan = string | number | boolean;
let l: tipeGabungan;
l = 4;
l = "t";

let names: any[] = ['a', true, 2, 'd', 'e'];
console.info(names);

let color: [number, number, number, number?] = [255,0, 0, 0] // ? : opsional

//  define variable
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Des
};

console.log(Month.Jan); // 0
console.log(Month.Feb); // 1

enum approvalStatus {
    draft,
    submitted,
    approved,
    rejected
};

console.log(approvalStatus.draft);
console.log(approvalStatus.submitted);
console.log(approvalStatus.approved);
console.log(approvalStatus.rejected);

let discount: number;
let itemCount = 10;
try {
    if (itemCount > 0 && itemCount <= 5) {
        discount = 5;
    } else if (itemCount > 5 && itemCount <= 10) {
        discount = 10;
    } else if (itemCount > 10 ) {
        discount = 15;
    } else {
        throw new Error('The number of items cannot be negative');
    }
    console.info(`You got ${discount}% discount`);
} catch (e: any) {
    console.error(e.message)
}
let diskon: number;
let unit = 10;
try {
    switch (true) {
        case unit > 0 && unit <= 5:
            diskon = 5;
            break;
        case unit > 5 && unit <= 10:
            diskon = 10;
            break;
        case unit > 10:
            diskon = 15;
            break;
        default:
            throw new Error('The number of items cannot be negative');
    }
    console.info(`Anda mendapatkan diskon ${diskon}%`);
} catch (e: any) {
    console.error(e.message);
}

