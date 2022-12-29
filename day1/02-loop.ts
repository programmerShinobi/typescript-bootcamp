console.info("For - looping");
let temp: number[] = [];
for (let i = 0; i < 20; i+=2) {
    temp.push(i);
    console.info(temp);
}

console.info("While - looping");
let i = 0;
while (i < 20) {
    console.info(i);
    i += 2;
    
}

console.info(`\n`)
function tambah(x=5, y=9) {
    console.info(x + y);
}

tambah();

let tambahNilai: (x: number, y: number) => number;

tambahNilai = function (x: number, y: number) {
    return x + y;
}
console.info(tambahNilai(10, 12));

let tambahValue: (x: number, y: number) => void;

tambahValue = function (m: number, n: number) {
    console.info(m + n);
}

tambahValue(10, 12);

function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet('John'); 