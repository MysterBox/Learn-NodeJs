 /**
===Belajar Destructuring Object===
1. Penulisan Sintaksis Destructuring Object
2. Destructuring Assignment
3. Default Value 
4. Assignment to Defferent local variable name
 **/
//!!! kalau kita membuat destruturing object kita harus menggunakan (const) tidak boleh (let/var)
// 1.
const profile = {
    name: 'yogan tara', 
    age: 18,
    hobi: "game",
};
const {name,age,hobi } = profile;

console.log(name,age,hobi);

// 2.
const profile1 = {
    name1: 'yogan',
    age1: 18,
}
// kalau Destructuring Assigment kita taruh di atas declarasi variable
// maka nilai dari Destructuring Assigment tidak akan keluar / error
let name1 = 'Tara';
let age1 = 20;

// kita menginisialisasikan nilai baru melalui Destructuring Assignment
({name1,age1} = profile1);
console.log(name1,age1);

// 3.
let profile2 = {
    name2 : 'yogan tara',
    age2 : 18,
    status2 : false,
}
// kalau kita ingin menambahkan variable yang bukan value dari object/property 
// maka kita bisa tambahkan menggunakan (=)
const {name2,age2,status2,hobi2="bola"} = profile2; 
console.log(name2);
console.log(age2);
console.log(status2);
console.log(hobi2);

// 4.

let profile3 ={
    depan3: 'yogan',
    belakang3: "tara",
}

// kita bisa mengubah nama variable object/property di dalam Destruturing Object
// kita menggunakan (:)
const {depan3 : fristName, belakang3: lastName} = profile3;
console.log(fristName);
console.log(lastName);
