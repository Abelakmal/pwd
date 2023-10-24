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
// const words = "hello purwadhika purwadhika"
// console.log(words.replace('purwadhika', 'batam'));
// console.log(words.replaceAll('purwadhika', 'batam'));

//toLowerase & toUpperCase

// const kata = 'AKU';
// console.log(kata.toLowerCase())
// console.log(kata.toUpperCase())

// //concat
// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]


// index of

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(indexOfFirst);

// console.log(paragraph.indexOf(searchTerm, indexOfFirst + 1));
// // Expected output: "The index of the 2nd "dog" is 52"

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'; 
// const search = 'dog';
// console.log(paragraph.includes(search))