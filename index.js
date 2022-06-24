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

//DISPLAY LIST CONCERT @index.html
let counter = 0
let varButton = []
let varTicket = []

function displayListConcert(obj) {
    if (!obj) return null;
    const section = document.getElementsByClassName('event-list')[0]
    for (let i of obj) {
        varButton.push("button" + counter)
        varTicket.push("ticket" + counter + '.html')
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
        const aHref = document.createElement('A')
        //rencana cadangan -> aHref.setAttribute("href", varTicket[counter])
        //yang asli (maunya) -> aHref.setAttribute("href", 'ticket.html')
        aHref.setAttribute("href", varTicket[counter])
        const buttonTest = document.createElement('button')
        buttonTest.classList.add('button')
        buttonTest.innerHTML = 'find ticket'
        aHref.appendChild(buttonTest)
        divTest.append(aHref)
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

//"FUNCTION" BUTTON @index.html
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

const final = result


localStorage.setItem('final', JSON.stringify(final)) ;
// console.log(localStorage) ;