/** Belajar Destructuring Array
 * 1. penulisan Destructuring Array
 * 2. Destructuring Assignment Array
 * 3. Default Values
 */
// Perbedaan penulisan Destructuring Array dan Destructuring Object
// kalau Destructuring Object Menggunakan tanda {}
// sedangkan Destructuring Array Menggunakan tanda []

// 1.
const MyArray = ['yogan',"Tara",18,false];

// kita bisa bebas memberi nama pada variable dan yang terpenting adalah
// nomer urutan pada index array 
const [fristName,lastName,Age,Status] = MyArray;

console.log(fristName);
console.log(lastName);
console.log(Age);
console.log(Status);

// sebernarnya kita juga bisa memasukan index tertentu di Destructuring dengan menggunakan tanda |,|
let MyArray1 = [1,2,3,4,5];

const [,,,nomer4]=MyArray1;
console.log(nomer4);

// 2.
// kita juga bisa menuliskan Destructuring Assignment pada Array
// dengan tidak menggunakan tanda kurung()
const MyArray2 = [1,2,3,4,5];

let nomer1 =11;
let nomer2 =12;
let nomer3 =13;

[nomer1,nomer2,nomer3] = MyArray2;

console.log(nomer1);
console.log(nomer2);
console.log(nomer3);

// Destructuring Assignment Array sangat berfungsi 
// ketika melakukan pertukaran nilai pada 2 variable
// ini contoh menggunakan algoritna biasa
let a = 1;
let b = 2;
let empty;

console.log('nilai sebelum di swap');
console.log('nilai a = ' + a );
console.log('nilai b = ' + b);

// a = b; <== jika kita menulisnya begini nilai a akan menjadi 2 dan nilai b akan menjadi 2
// b = a; <== makanya kita membutuh kan variable ketiga agar kita jadikan wadah
empty = a;
a = b;
b = empty;

console.log("nilai sesudah di swap");
console.log("nilai a = " + a);
console.log("nilai b = " + b);

// ini contoh menggunkan algoritma Destructuring Assignment Array
let i = 11;
let j = 12;
let k = 13;

console.log('nilai sebelum di swap');
console.log('nilai i = ' + i);
console.log('nilai j = ' + j);
console.log('nilai k = ' + k);


// [i,k]=[j,i]=[k,j]; kalau kita menulis Destructuring Array lebih dari dua variable nilai akan bisa menjadi sama
[i,j]=[j,i]; // kita hanya bisa menukarkan dua variable saja

console.log("nilai sesudah di swap");
console.log('nilai i = ' + i);
console.log('nilai j = ' + j);
console.log('nilai k = ' + k);

// 3.
// Destructuring Array juga memilika nilai Default sama seperti Destructuring Object
let MyArray3 = ['yogan'];

let [namaDepan,namaBelakang = 'tara'] = MyArray3; // kalau namaBelakang tidak di isi nilai maka hasilnya akan undefined

console.log (namaDepan);
console.log (namaBelakang);
console.log (MyArray3); // dan jika kita menambahkan nilai pada Destructuring Array nilai/index Array tidak akan bertambah
                        // hanya Deestructuring Array nya saja yang berubah dan mendapatkan nilai baru

