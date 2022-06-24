//DATA THAT WILL BE USED
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




let counter = 0
let varButton = []
function displayListConcert(obj) {
    for (let i of obj) {
        varButton.push("button" + counter)
        const section = document.getElementsByClassName('event-list')[0]
        const divMain = document.createElement('div')
        divMain.classList.add('card')
        const divContainer = document.createElement('div')
        divContainer.classList.add('grid-container')
        const divGrid1 = document.createElement('div')
        divGrid1.classList.add('grid-item')
        const date = document.createElement('b')
        date.innerHTML = i.date
        const time = document.createElement('p')
        time.classList.add('tanggal')
        time.innerHTML = i.time
        divGrid1.append(date, time)
        divContainer.appendChild(divGrid1)
        //
        const divGrid2 = document.createElement('div')
        divGrid2.classList.add('grid-item')
        const location = document.createElement("b")
        location.innerHTML = i.location
        const nama = document.createElement('p')
        nama.innerHTML = i.name
        const description = document.createElement('p')
        description.classList.add('description')
        description.innerHTML = i.desc
        divGrid2.append(location, nama, description)
        divContainer.appendChild(divGrid2)
        //
        const divGrid3 = document.createElement('div')
        divGrid3.classList.add('grid-item')
        const divTest = document.createElement('div')
        divTest.classList.add('grid-item')
        divTest.setAttribute('id', varButton[counter])
        const buttonTest = document.createElement('button')
        buttonTest.classList.add('button')
        buttonTest.innerHTML = "Find Ticket"
        divTest.append(buttonTest)
        divGrid3.append(divTest)
        divContainer.appendChild(divGrid3)
        //
        divMain.append(divContainer)
        section.append(divMain)
        //
        counter++
    }
}
displayListConcert(obj)

let result = []
for (let i = 0; i < counter; i++) {
    const buttonTest = document.getElementById(varButton[i])
    buttonTest.onclick = function () { myFunction1() };
    function myFunction1() {
        result = []
        result.push(obj[i])
        console.log(result)
    }
}


// function displayTicketConcert() {
//     let obj = {
//         name: "Azis Gagap",
//         date: "01/01/2001",
//         time: "17.00",
//         location: "Jakarta",
//         desc: "lorem ipsum",
//         tipe: {
//             regular: 100000,
//             vip: 200000,
//             vvip: 300000,
//         }
//     }
//     let tipe = obj.tipe
//     for (let i in tipe) {
//         const div1 = document.createElement('div');
//         const table1 = document.createElement('table');

//         const td1 = document.createElement('td');
//         const text = document.createTextNode(i);
//         const tr1 = document.createElement('tr');
//         td1.appendChild(text);
//         tr1.appendChild(td1);

//         const td2 = document.createElement('td');
//         const text2 = document.createTextNode(obj.date);
//         const tr2 = document.createElement('tr');
//         td2.appendChild(text2);
//         tr2.appendChild(td2);

//         const td3 = document.createElement('td');
//         const text3 = document.createTextNode(obj.location);
//         const tr3 = document.createElement('tr');
//         td3.appendChild(text3);
//         tr3.appendChild(td3);

//         const td4 = document.createElement('td');
//         const text4 = document.createTextNode(obj.desc);
//         const tr4 = document.createElement('tr');
//         td4.appendChild(text4);
//         tr4.appendChild(td4);

//         const td5 = document.createElement('td');
//         const text5 = document.createTextNode(i.harga);
//         const tr5 = document.createElement('tr');
//         td5.appendChild(text5);
//         tr5.appendChild(td5);

//         const td6 = document.createElement('td');
//         const text6 = document.createTextNode("quantity");
//         const tr6 = document.createElement('tr');
//         td6.appendChild(text6);
//         tr6.appendChild(td6);

//         table1.append(tr1, tr2, tr3, tr4, tr5, tr6);
//         div1.appendChild(table1);
//         document.body.appendChild(div1);
//     }
// }

