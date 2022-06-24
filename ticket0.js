const nama = document.getElementsByClassName("name");
const tanggal = document.getElementsByClassName("date");
const lok = document.getElementsByClassName("location");
const desc = document.getElementsByClassName("desc");
const harga = document.getElementsByClassName("price");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

let x = JSON.parse(localStorage.getItem("final"));
console.log(x);
const obj = [
  {
    name: "Azis Gagap",
    date: "12 Agustus 2022",
    time: "Senin, 17.00 WIB",
    location: "Jakarta",
    desc: "Muhammad Aziz, or better known as Aziz Gagap is a comedian and actor who was born in Jakarta, December 22, 1973. The name Aziz Gagap was obtained because of his distinctive comedic style that speaks with a stutter.",
    tipe: {
      regular: 100000,
      vip: 200000,
      vvip: 300000,
    },
  },
  {
    name: "Windah Basudara",
    date: "23 Oktober 2022",
    time: "Minggu, 23.00 WIB",
    location: "Bogor",
    desc: "Windah is very famous for providing very interesting shows, as well as being creative when streaming on Youtube. This may be one of the reasons why Windah has become a successful Youtuber.",
    tipe: {
      regular: 200000,
      vip: 400000,
      vvip: 600000,
    },
  },
  {
    name: "Sule",
    date: "11 December 2022",
    time: "Rabu, 11.00 WIB",
    location: "Bogor",
    desc: "Sutisna, more commonly known as Sule, is an Indonesian comedian and actor. He became well-known after winning the Indonesian comedian audition show API with Ogi Suwarna and Obin Wahyudin in the group SOS in 2005.",
    tipe: {
      regular: 400000,
      vip: 800000,
      vvip: 1200000,
    },
  },
];
let resultFix = [
  {
    name: "Azis Gagap",
    date: "12 Agustus 2022",
    time: "Senin, 17.00 WIB",
    location: "Jakarta",
    desc: "Muhammad Aziz, or better known as Aziz Gagap is a comedian and actor who was born in Jakarta, December 22, 1973. The name Aziz Gagap was obtained because of his distinctive comedic style that speaks with a stutter.",
    tipe: [300000, 200000, 100000],
  },
];
// console.log(resultFix);

let price = resultFix[0]["tipe"];
for (const a of resultFix) {
  for (let i = 0; i < nama.length; i++) {
    const element = nama[i];
    element.firstChild.textContent = a.name;
  }
  for (let i = 0; i < tanggal.length; i++) {
    const element = tanggal[i];
    element.textContent = a.date;
  }
  for (let i = 0; i < lok.length; i++) {
    const element = lok[i];
    element.textContent = a.location;
  }
  for (let i = 0; i < desc.length; i++) {
    const element = desc[i];
    element.innerText = a["desc"];
  }
  for (let i = 0; i < harga.length; i++) {
    const element = harga[i];
    element.innerText = price[i];
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
let totalPrice = 0;
let numberVVIP = 0;
button1.onclick = function () {
  myFunction1();
};
function myFunction1() {
  numberVVIP++;
  totalPrice += Number(harga[0].innerText);
  console.log(numberVVIP, totalPrice, "ini VVIP");
  resizeTo.onclick;
}
let numberVIP = 0;
button2.onclick = function () {
  myFunction2();
};
function myFunction2() {
  numberVIP++;
  totalPrice += Number(harga[1].innerText);
  console.log(numberVIP, totalPrice, "ini VIP");
}
let numberReg = 0;
button3.onclick = function () {
  myFunction3();
};
function myFunction3() {
  numberReg++;
  totalPrice += Number(harga[2].innerText);
  console.log(numberReg, totalPrice, "ini Reg");
}
