//nomor 1

const celsiust = 90;
const fahrenhit = (celsiust * 9) / 5 + 32;

console.log(fahrenhit);

//nomor 2

let number = 24;

let genap;
let ganjil;

if (number % 2 === 0) {
  console.log('odd number');
} else {
  console.log('even number');
}

//nomor 3
let angka = 5;
let a = 0;
let result = '';
for (let x = 0; x <= angka; x++) {
  if (angka % x === 0 && angka > 1) {
    a++;
  }
  if (a === 2) {
    result = ' sebuah angka prime';
  } else {
    result = 'bukan sebuah angka prime';
  }
}
console.log(result);

//nomor 4

let angkaSum = 5;
let resultSum = 0;

for (let y = 0; y <= angkaSum; y++) {
  resultSum += y;
}

console.log(resultSum);

//nomor 5
let angkaFaktorial = 3;
let resultFaktorial = 1;
for (let z = 1; z <= angkaFaktorial; z++) {
  resultFaktorial *= z;
}

console.log(resultFaktorial);

//nomor 6

let N = 15;

let fbnc1 = 0;
let fbnc2 = 1;
let fbnc3;

for (let i = 1; i < N ; i++) {
    fbnc3 = fbnc1 + fbnc2;
    fbnc1 =  fbnc2;
    fbnc2 = fbnc3;
    console.log(fbnc1 + " + " + fbnc2 + " = " + fbnc3)
}


