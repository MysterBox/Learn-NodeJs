// Belajar Arrow Function / Arrow Function Expresion

// Ini Funciton Reguler
// function declaration
function sayHello(a,b) {
    console.log(a*b);
}
 sayHello(4,4);

// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}
sayName('ahCok');

// Ini Function Arrow
// function expression
const sayHello2 = (greet) => {
    console.log(`${greet}!`)
}
sayHello2('yogan');
 
const sayName2 = (name) => {
    console.log(`Nama saya ${name}`)
}
sayName2('Tara');

// Perbedaan Funciton Reguler dan Arrow adalah 
// Function Reguler bisa memakai Function Expression Dan Function Declaration
// sedangkan Function Arrow hanya memiliki Function Expression saja

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti
const hello = name => {console.log(`Hello ${name}`);}
hello('World');


// kita juga menulis nya dengan lebih singakat lagi 
// dan ketika gita tidak memerlukan parameter kita harus menuliskan tanda kurung kosong saja
const greet = () => console.log('Selamat Pagi Semua');
greet();
// dan jika kita menuliskan kode seperti di atas 
// dan ingin mengembalika hasil yang di berikan kita bisa tidak menuliskan return pada code
const perkalian = (a,b) => console.log(a*b);
perkalian(5,5);