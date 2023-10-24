// //frist time belajar
// console.info('hello world');

// // membuat variabel
// let message;
// message = 'hello word';

// let error = 'error message';

// if (true) {
//   console.log(message);
// } else {
//   console.log(error);
// }

// //jenis-jenis varriabel
// var globalVariabel = 'digunakan untuk global';
// // var globalVariabel = "oke" jika namanya sama maka variabel awal akan ditimpa variabel baru
// let blockVariabel = 'digunakan untuk variabel block';
// const constanVariabel = 'digunakan untuk variabel yang tidak berubah rubah';

// console.info(`
//  var = ${globalVariabel}
//  let = ${blockVariabel} 
//  const = ${constanVariabel}`);

// //Type Data

// //String
// let string = 'didalam ini berisi string';

// //number
// let angka = 2883;

// //boolean => true/false
// let boolean = true;

// //null

// let empty = null;

// console.log(typeof null);
// console.log(typeof Object);
// console.log(typeof Array);
// console.log(empty === Object);

// //data non-primitive object array

// let person = {
//   nama: '',
//   alamat: 'indonesia',
//   umur:0
// };

// person.nama = "abel"
// person.umur = 18



// console.log(person);

// let data = ["abel","akmal"];

//Immuutable vs mutable

// //mutable type data primitive
// let a = "sa"
// let b = a;

// b = "ta"

// console.log(a)
// console.log(b)

// //immutable type data non primitive
// const person1 = {name:"abel"}
// const person2 = person1;
// person2.name = 'a'
// person2.umur = 18

// console.log(person1)
// console.log(person2)

// string build method

//slice

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"

//replace
const words = "hello purwadhika"
console.log(words.replace('purwadhika', 'batam'))
