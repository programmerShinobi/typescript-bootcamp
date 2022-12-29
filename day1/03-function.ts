function getTotal(...numbers: number[]):number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.info(getTotal()); // 0
console.info(getTotal(10, 20)); // 30
console.info(getTotal(10, 20, 30)); // 60

let tambah_Nilai = function (x: number, y: number, ...numbers: number[]): any {
    let total: number = 0;
    numbers.forEach(e => total += e +x + y);
    console.log(total);
}
tambah_Nilai(10, 2);

function tambah_gen(a: number|string, b: number|string): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}

console.info(tambah_gen(5, 6));