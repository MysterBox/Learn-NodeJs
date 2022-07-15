// Belajar Function
// ini cara Declarisi Fuction
function coba1(){
	console.log('Hello World !');
}
coba1();
// tetapi ketika function menjalan kan baris code yang sama kurang fucsional
// di sini kita dapan membuat function menjadi lebih fucsional menggunakan parameter

// di sini contoh kita memanfaatkan parameter untuk mengubah perilaku function
function siapaAku(name){ // ini menggunakan parameter string
	if(name === "yogan"){
		console.log('kamu benar');
	}else{
		console.log('kamu salah');
	}
}
siapaAku('yogan');
// ada perbedaan parameter string dan parameter number
// kalau  di string kita bisa juga tidak pakai retrun
// sedang kan kalau number kita harus menggunakan return untuk menggeluarkan hasil dari function

// ini contoh parametern number dengan menggunakan return
function cobaNum(i,j){
	let result = i*j;
	return result
}
console.log(cobaNum(5,5));

// ini contoh penggunaan return pada string
function akuSiapa(name){
	if(name === 'yogan'){
		return console.log('kamu bener benar dukun');
	}else if(name === 'yogan tara'){
		return console.log('kamu hampir benar');
	}else{
		return console.log('kamu goblok');
	}
}
akuSiapa('yogan tara');

// kita juga bisa memakai greeting() === bisa apa saja namanya bukan greeting saja 
// agar kita bisa mengubah ngubah nama function parameternya
// function greeting(i,j){
// 	let result2 = i+j;
// 	return console.log(result2);
// }
// let pertambahan = greeting(5,5);
// pertambahan;
// !!! kita tidak bisa menggunakan satu nama ke banyak parameter
function greeting(a,b){
	 let result = a*b;
	 return result;
}
let perkalian = greeting(5,5);
console.log(perkalian);

// entah kenapa function greeting masih ada bag

// ada juga nama nya Expression Function
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. 
// Fungsi yang tidak bernama juga dikenal dengan anonymous function. 
// Berikut ini merupakan contoh penulisan expression function:

const greeti = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}
let foo = console.log(greeti('Ron', 'English'));

const greet = function(name, negara){
	if(negara === 'indonesia' === 'Indonesia'){
		return 'selamat pagi ' + name;
	}else if(negara === 'bali' === 'Bali'){
		return 'cicing cai ' + name; 
	}else {
		return 'dasar bukan ' + name +' golongan kami';
	}
}
console.log(greet('yogan','bali'));

