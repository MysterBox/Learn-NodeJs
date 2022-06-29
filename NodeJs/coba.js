let language = 'Bali';
let salamPembuka = null

switch(language){
    case 'Bali':
        salamPembuka = 'semeton';
        break;

    case 'jakarta':
        salamPembuka = 'Oi Kontol';
        break;

    case 'surabaya':
        salamPembuka = 'Halo Siak'
        break;
        
    default:
        salamPembuka = 'Tidak Ada salam Apapun';
}
console.log(salamPembuka);
/* Keterangan
kalau di Switch-case tidak ada break nya maka jawabannya'
akan di majukan sampai bertemu break atau bertemu default*/