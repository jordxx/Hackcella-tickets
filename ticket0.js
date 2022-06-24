
const nama = document.getElementsByClassName('name') ;
const tanggal = document.getElementsByClassName('date') ;
const lok = document.getElementsByClassName('location') ;
const desc = document.getElementsByClassName('desc') ;
const harga = document.getElementsByClassName('price') ;
const button1 = document.getElementById('button1') ;
const button2 = document.getElementById('button2') ;
const button3 = document.getElementById('button3') ;

const obj = [
    {
        name: "Azis Gagap",
        date: "32 Januari 2010",
        time: "Senin, 17.00 WIB",
        location: "Jakarta",
        desc: "lorem ipsum",
        tipe: {
            regular: 100000,
            vip: 200000,
            vvip: 300000,
        }
    },
    {
        name: "Windah Basudara",
        date: "29 Februari 2100",
        time: "Minggu, 23.00 WIB",
        location: "Bogor",
        desc: "lorem ipsum",
        tipe: {
            regular: 200000,
            vip: 400000,
            vvip: 600000,
        },
    },
    {
        name: "Sule",
        date: "-1 December 2022",
        time: "Rabu, 11.00 WIB",
        location: "Bogor",
        desc: "lorem ipsum",
        tipe: {
            regular: 400000,
            vip: 800000,
            vvip: 1200000,
        },
    }
]
let resultFix = [
    {
        name: "Azis Gagap",
        date: "32 Januari 2010",
        time: "Senin, 17.00 WIB",
        location: "Jakarta",
        desc: "lorem ipsum",
        tipe: [
            300000, 200000, 100000
        ]
    }
]
console.log(resultFix);

let price = resultFix[0]['tipe'] ;
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
        element.innerText = price[i]
    }
}
// let price = objKecil['tipe'] ;
// console.log(price.length);
// for (let i = 0; i < nama.length; i++) {
//     const element = nama[i];
//     element.firstChild.textContent = objKecil.name
// }
// for (let i = 0; i < tanggal.length; i++) {
//     const element = tanggal[i];
//     element.textContent = objKecil.date
// }
// for (let i = 0; i < lok.length; i++) {
//     const element = lok[i];
//     element.textContent = objKecil.location
// }
// for (let i = 0; i < desc.length; i++) {
//     const element = desc[i];
//     element.innerText = objKecil['desc']
// }
// for (let i = 0; i < harga.length; i++) {
//     const element = harga[i];
//     element.innerText = price[i]
// }
let totalPrice = 0
let numberVVIP = 0 ;
button1.onclick = function() {myFunction1()};
function myFunction1() {
    numberVVIP++ ;
    totalPrice += Number(harga[0].innerText)
    console.log(numberVVIP, totalPrice, 'ini VVIP');
    resizeTo.onclick
}
let numberVIP = 0 ;
button2.onclick = function() {myFunction2()};
function myFunction2() {
    numberVIP++ ;
    totalPrice += Number(harga[1].innerText)
    console.log(numberVIP, totalPrice,  'ini VIP');
}
let numberReg = 0 ;
button3.onclick = function() {myFunction3()};
function myFunction3() {
    numberReg++ ;
    totalPrice += Number(harga[2].innerText)
    console.log(numberReg, totalPrice, 'ini Reg');
}



