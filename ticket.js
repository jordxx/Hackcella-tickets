let result = JSON.parse(localStorage.getItem('final'))
function toRupiah(numb) {
    const format = numb.toString().split('').reverse().join('');
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
    return rupiah
}
let resultFix = [
    {
        name: result[0]['name'],
        date: result[0]['date'],
        time: result[0]['time'],
        location: result[0]['location'],
        desc: result[0]['desc'],
        tipe: [
            result[0]['tipe']['vvip'], result[0]['tipe']['vip'], result[0]['tipe']['regular']
        ]
    }
]
console.log(resultFix[0].tipe[0], "ini result fix")

const nama = document.getElementsByClassName('name');
const tanggal = document.getElementsByClassName('date');
const lok = document.getElementsByClassName('location');
const desc = document.getElementsByClassName('desc');
const harga = document.getElementsByClassName('price');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');



let price = resultFix[0]['tipe'];
console.log(resultFix);
for (const a of resultFix) {
    for (let i = 0; i < nama.length; i++) {
        const element = nama[i];
        element.firstChild.textContent = a.name
    }
    for (let i = 0; i < tanggal.length; i++) {
        const element = tanggal[i];
        element.textContent = a.date
    }
    for (let i = 0; i < lok.length; i++) {
        const element = lok[i];
        element.textContent = a.location
    }
    for (let i = 0; i < desc.length; i++) {
        const element = desc[i];
        element.innerText = a['desc']
    }
    for (let i = 0; i < harga.length; i++) {
        const element = harga[i];
        element.innerText = toRupiah(price[i])
    }
}
let totalPrice = 0
let numberVVIP = 0;
button1.onclick = function () { myFunction1() };
function myFunction1() {
    numberVVIP++;
    totalPrice += Number(resultFix[0].tipe[0])
    console.log(numberVVIP, totalPrice, 'ini VVIP');
    let showVVIP = document.getElementsByClassName('jumlahTiketVVIP')[0];
    showVVIP.innerText = "VVIP " + numberVVIP + " Tiket";
    document.getElementsByClassName('totalPrice')[0].innerText = toRupiah(totalPrice);
}
let numberVIP = 0;
button2.onclick = function () { myFunction2() };
function myFunction2() {
    numberVIP++;
    totalPrice += Number(resultFix[0].tipe[1])
    console.log(numberVIP, totalPrice, 'ini VIP');
    let showVIP = document.getElementsByClassName('jumlahTiketVIP')[0];
    showVIP.innerText = "VIP " + numberVIP + " Tiket"
    document.getElementsByClassName('totalPrice')[0].innerText = toRupiah(totalPrice);

}
let numberReg = 0;
button3.onclick = function () { myFunction3() };
function myFunction3() {
    numberReg++;
    totalPrice += Number(resultFix[0].tipe[2])
    console.log(numberReg, totalPrice, 'ini Reg');
    let showReg = document.getElementsByClassName('jumlahTiketReg')[0];
    showReg.innerText = "Regular " + numberReg + " Tiket"
    document.getElementsByClassName('totalPrice')[0].innerText = toRupiah(totalPrice);
}
toRupiah(totalPrice)


//RESET
let resetTombol = document.getElementById('resetTombol')
resetTombol.onclick = function () {
    totalPrice = 0, numberVVIP = 0, numberVIP = 0, numberReg = 0;
    document.getElementsByClassName('jumlahTiketVVIP')[0].innerText = "";
    document.getElementsByClassName('jumlahTiketVIP')[0].innerText = "";
    document.getElementsByClassName('jumlahTiketReg')[0].innerText = "";
    document.getElementsByClassName('totalPrice')[0].innerText = "";

}
//BELI
let buyTombol = document.getElementById('buyTombol')
buyTombol.onclick = function () { alert("Terima kasih, total belanjaan anda adalah " + toRupiah(totalPrice)) }









