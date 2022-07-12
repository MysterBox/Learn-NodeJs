/** ==MAP==
 * Map adalah tipe data yang menyimpan koleksi layaknya seperti Object
 * yang membedakan Map dan Object adalah Map memperbolehkan key menyimpan
 * tipe data apapun sedangkan Object hanya memperbolehkan key menyimpan 
 * tipe data bertipe String dan Symbol
 */
// penulisan map constructur 
let myMap = new Map(); // empty 

myMap.set('gan','yogan tara'); // | set() | add Map key and Value
myMap.set('node','JavaSript');
myMap.set('age',18);
myMap.set('stat8s',false);
myMap.set('gan','yogan'); // pada code ini key 'gan' ada dua di sini myMap akan memakai nilai terbaru mada key 'gan'

console.log(myMap);

console.log(myMap.has('tai')) // menggunakan | has() | untuk melihat apakah ada key pada Map myMap yang akan menghasilkan nilai Bollean

console.log('nama saya ' + myMap.get('gan'))// | get() | digunakan utuk mendapatkan satu nilai pada Map

// kita juga bisa menuliskan Map secara langsung dengan cara multi demesi array
let mapMulti = new Map ([
    ['dog','bruno'],
    ['cat',false],
    [4,2004],
    [18,18]
]);
console.log(mapMulti);
mapMulti.delete(18); // | delete() | digunakan untuk menghapus key dan nilai 
console.log(mapMulti);

// loop for pada Map
for (let [k,v] of mapMulti){
    console.log(k, ' : ' ,v);
}

mapMulti.forEach((v,k) => {
    console.log(v," : " ,k);
})
