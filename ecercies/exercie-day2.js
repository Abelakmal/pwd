//nomor 1

const celsiust = 60;
const celsiustToFahrenhit = (celsiust * 9) / 5 + 32;

console.log(`fahrenhit = ${celsiustToFahrenhit}`);

const fahrenhitTocelciust = ((celsiustToFahrenhit - 32) * 5) / 9;
console.log(`celciust = ${celsiust}`);

//nomor 2

let number = 25;
let message1;

if (number % 2 === 0) {
  message1 = 'angka genap';
} else {
  message1 = 'angka ganjil';
}

console.log(message1);

//nomor 3
let angka = 2;
let a = 0;
let message2 = '';
for (let x = 0; x <= angka; x++) {
  // if (angka > 0 && angka > 1) {
  if (angka % x === 0) {
    a++;
  }
  if (a === 2) {
    message2 = ' sebuah angka prime';
  } else {
    message2 = 'bukan sebuah angka prime';
  }
  // }
}
console.log('\n ' + message2);

//nomor 4

let angkaSum = 5;
let resultSum = 0;
let message = '';

for (let y = 1; y <= angkaSum; y++) {
  resultSum += y;
  message += y + (y !== angkaSum ? ' + ' : '');
}

console.log(`${message} = ${resultSum}`);

//nomor 5
let angkaFaktorial = 6;
let resultFaktorial = 1;
let messageFaktorial = '';

for (let z = angkaFaktorial; z >= 1; z--) {
  resultFaktorial *= z;
  console.log(z)
  messageFaktorial += z + (z !== 1 ? ' x ' : ' = ');
}

console.log(`${angkaFaktorial}! -> ${messageFaktorial}${resultFaktorial}`);

//nomor 6

let N = 15;

let fbnc1 = 0;
let fbnc2 = 1;
let fbnc3;
let messageFbnc = "";

for (let i = 1; i < N; i++) {
  // fbnc3 = fbnc1 + fbnc2;
  // messageFbnc += fbnc1 + " ";
  // fbnc1 = fbnc2;
  // fbnc2 = fbnc3;
  [fbnc1 , fbnc2] = [fbnc2 , fbnc1 + fbnc2]
}

console.log(`${fbnc1}`)
