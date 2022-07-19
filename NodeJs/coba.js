// Belajar Function Parameter
//kita bisa memanfaatkan destructuring object untuk memebuat parameter agar menghasilkan nilai
const object1 = {
    namaDepan: 'yogan',
    namaBelakang: 'tara',
}
// kalau kita tidak memaki tanda kurung sepesial object tidak akan keluar
function namaLengkap({namaDepan,namaBelakang}){
console.log(`${namaDepan} ${namaBelakang}`);
}
namaLengkap(object1)

// DEFAULT PARAMETER
// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe 
// argumen yang dimasukkan ke dalam parameter.Ini berarti kita bisa
// memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
function exponentsFormula1(baseNumber, exponent) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula1(2);
/* output
2^undefined = NaN
*/

// Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit dari parameternya,
// maka parameter yang tidak terdefinisi akan bernilai undefined. Sebagai solusi jika memungkinkan,
// kita bisa memberikan nilai default pada parameter. Nilai ini akan digunakan jika kita tidak memasukkan parameter.

function exponentsFormula2(baseNumber, exponent = 3) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula2(3);
/* output
3^2 = 9
*/

// Rest Parameter
// Rest parameter juga dituliskan menggunakan three consecutive dots (...).
//  Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.
//   Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

function sum2(...number){
    result = 0;
    for (const simpan of number) {
        result += simpan;
    }
    return console.log(result);
}

sum2(1,2,3,4,5,6);

