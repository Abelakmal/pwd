//nomor 1
const p1 = 10;
const l1 = 5;
const luas = p1 * l1;

console.log(`luas-persegi-panjang: ${luas}`);

//nomor 2

const p2 = 10;
const l2 = 5;
const kelilingPersegi = 2 * (10 + 5);

console.log(`keliling-persegi: ${kelilingPersegi}`);

//nomor 3

const pi = 3.14;
const jariJari = 12;
//diameter
const diameter = 12 * 2;
console.log(`diameter: ${diameter}`);
//keliling
const kelilingLingkaran = pi * jariJari * 2;
console.log(`keliling-lingkaran: ${kelilingLingkaran}`);
//luas
const luasLingkaran = pi * jariJari ** 2;
console.log(`luas-lingkaran: ${luasLingkaran}`);

//nomor 4

const sudutA = 70;
const sudutB = 60;
//temukan sudut C
const sudutC = 180 - (70 + 60);

console.log(`sudut-C: ${sudutC}`);

//nomor 5
const date1 = new Date();
const date2 = new Date();

date1.setDate(30);
date2.setDate(15);
console.log(`sisa hari: ${date1.getDate() - date2.getDate()}`);

//nomor 6
const setHari = 400;

//convert tahun

const tahun = Math.floor(setHari / 365)
const sisaHariDalamTahun = 400 % 365;

const bulan = Math.floor(sisaHariDalamTahun / 31)
const sisaHariDalamBulan = sisaHariDalamTahun % 31;

const hari = sisaHariDalamBulan;

console.log(`convert-hari: ${tahun} tahun - ${bulan} bulan - ${hari} hari`);


