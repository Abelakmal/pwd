//nomor 1
const p1 = 10;
const l1 = 5;
const luas = p1 * l1;

console.log(`luas-persegi-panjang: ${luas}`);

//nomor 2

const p2 = 10;
const l2 = 5;
const kelilingPersegi = 2 * (p2 + l2);

console.log(`keliling-persegi: ${kelilingPersegi}`);

//nomor 3

const pi = 3.14;
const jariJari = 12;
//diameter j*2
const diameter = 12 * 2;
console.log(`diameter: ${diameter}`);
//keliling pi * j * 2
const kelilingLingkaran = pi * jariJari * 2;
console.log(`keliling-lingkaran: ${kelilingLingkaran}`);
//luas pi * j**2
const luasLingkaran = pi * jariJari ** 2;
console.log(`luas-lingkaran: ${luasLingkaran}`);

//nomor 4

const sudutA = 70;
const sudutB = 60;
//temukan sudut C = 180 - (a + b)
const sudutC = 180 - (sudutA + sudutB);

console.log(`sudut-C: ${sudutC}`);

//nomor 5
const date1 = new Date("2023-10-20");
const date2 = new Date("2023-11-1");

const perbedaanMilisecond = Math.abs(date1 - date2); //convert bilangan minus menjadi positif

const perbedaanHari = Math.round(perbedaanMilisecond / (1000 * 60 * 60 * 24)); //Math.round pembulatan angka

console.log(perbedaanMilisecond)
console.log(perbedaanHari)


//nomor 6
const setHari = 360;

//convert tahun

const tahun = Math.floor(setHari / 365);
const sisaHariDalamTahun = setHari % 365;

const bulan = Math.floor(sisaHariDalamTahun / 30);

const sisaHariDalamBulan = sisaHariDalamTahun % 30;

const hari = sisaHariDalamBulan;

console.log(`convert-hari: ${tahun} tahun - ${bulan} bulan - ${hari} hari`);
