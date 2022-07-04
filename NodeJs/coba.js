// Belajar (Object)
// Berbagai Penulisan Object
// di delama object itu ada nama nya Key Dan Value yang biasa di sepebut property
// saat kita menulis kan key kita bisa tulis tanpa tanda petik
// tanda petik saat menulis key ketika ada sepasi saja
const belajarObject = {
    Name: 'YoganTara',
    Umur : 18,
    Status: false,
    Hobi: "ngoding",
    'Saya suka': 'makan',
    IbuSaya: 'keren',
};
// Cara Menjalankan Object
console.log(`nama saya adalah ${belajarObject.Name}`);
console.log(`kebiasaan saya setelah olahraga = ${belajarObject["Saya suka"]}`)
console.log(`Ibus saya ${belajarObject.IbuSaya}`);
console.log(belajarObject);

// Cara menambahka Object baru
belajarObject.color = 'Blue';
console.log('menambahkan Object baru ke propert');
console.log(belajarObject);

// Cara Menghapus Object yang ada di property
delete belajarObject.Hobi;
console.log('mengahapus object yang ada di property');
console.log(belajarObject);

// Kita dapan mengubah Value yang ada di property
belajarObject.Name = 'Yogan';
console.log('mengubah Velue Object yang ada di property');
console.log(belajarObject);


