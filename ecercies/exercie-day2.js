//nomor 1

const celsiust = 90;
const fahrenhit = (celsiust * 9) / 5 + 32;

console.log(fahrenhit);

//nomor 2

let number = 20;
let message1;

if (number % 2 === 0) {
  message1 = 'angka genap';
} else {
  message1 = 'angka ganjil';
}

console.log(message1)

//nomor 3
let angka = 4;
let a = 0;
let message2 = '';
for (let x = 0; x <= angka; x++) {
  if (angka > 0 && angka > 1) {
    if (angka % x === 0) {
      a++;
    }
    if (a === 2) {
      message2 = ' sebuah angka prime';
    } else {
      message2 = 'bukan sebuah angka prime';
    }
  }
}
console.log('\n ' + message2);

//nomor 4

let angkaSum = 5;
let resultSum = 0;

for (let y = 0; y <= angkaSum; y++) {
  resultSum += y;
}

console.log('result = ' + resultSum);

//nomor 5
let angkaFaktorial = 3;
let resultFaktorial = 1;
for (let z = 1; z <= angkaFaktorial; z++) {
  resultFaktorial *= z;
}

console.log('\n' + resultFaktorial);

//nomor 6

let N = 15;

let fbnc1 = 0;
let fbnc2 = 1;
let fbnc3;
let resultFbnc;

for (let i = 1; i < N; i++) {
  fbnc3 = fbnc1 + fbnc2;
  fbnc1 = fbnc2;
  fbnc2 = fbnc3;
  resultFbnc = fbnc3;
  console.log(`${fbnc1} + ${fbnc2} = ${fbnc3} \n`);
}

console.log(`result = ${resultFbnc}`);
