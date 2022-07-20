/**
 * Kita Akan Belajar variable Scope
 * Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya.
 * Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global.
 * Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal
 * dan cakupannya hanya pada fungsi tersebut beserta turunannya.
 */

//  Berikut ini merupakan contoh scoping dalam code
// ini Global Variable dapaat di akses di function Bni dan Cni dan di luar function 
const a ='A'; 

function Bni(){
    // local Variable dpat di aksi di funntion Bni() dan Cni()
    // Tetapi tidak dapat di akses di luar dari function nya
    // let b = 'B';
    console.log('B');

    Cni();
    function Cni(){
        // local Variable hanya dapat di akses di Functon Cni() saja
        // let c='C';
        console.log('C');
    }
}
// Cara MengAkses nya
// Bni(Cni());
// Cni()
Bni(); 
console.log(a);

// Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi.
// Pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan
// Contoh
function contohKacau(a){
    result = a*a;
    return result;
}
// contohKacau(7); jika kita tulis kode di sini maka code akan eror
let result = 8;
contohKacau(7); // dan jika tulis kode di sini hasil akan kacau

console.log(result); // output 49
// kenapa hasil nya (49) karna variable |result| yang ada di dalam function contohKacau() 
// tidak berisi tipetipe data / kita tidak menetapkan variable |result| sebagai cakupan lokal
// kita tidak menggunakan tipe data / keyworld |let||const||var| saat mendekarasikan variable |result|
// maka dari situ variable |result| yang ada di dalam function contohKacau() manjadi global

/**
 * Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var
 *  pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
 */











