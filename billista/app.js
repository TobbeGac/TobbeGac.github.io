class Bil{
    constructor (brand, color, id){
        this.brand = brand
        this.color = color
        this.id = id
    }
}

let billista = [];

//Hämta data från localstorage
async function getDataFromLocalStorage(){
    try{
        billista = await JSON.parse(localStorage.getItem("bilarlistan"))

        if (billista == null){
        billista = []
    }

        lista_bilar_div.innerHTML = ""
        billista.forEach(createHtmlBilLista)
    }
    catch (e){
        console.log(`Fel: ${e}`)
    }
}

getDataFromLocalStorage()

const addbutton = document.getElementById("addbutton");
const brand = document.getElementById("brand");
const color = document.getElementById("color");
const lista_bilar_div = document.getElementById("listabilarDiv");

addbutton.addEventListener("click", addbuttonClick);

function addbuttonClick(){
    

    const now = Date.now()
    const id = now.toString()
    
    let brandname = brand.value

    if (brandname !== ""){
        let car = new Bil(brand.value, color.value, id)
        billista.push(car)

        //Läger till local storage
        localStorage.setItem("bilarlistan", JSON.stringify(billista))

        brand.value=""
        color.value=""
        lista_bilar_div.innerHTML = ""
        billista.forEach(createHtmlBilLista)

    }
    else{
        alert("Måste åtminstonde fylla i fabrikat!")
    }   
        
        console.log(`id= ${id} brand= ${brandname}`)
}

const createHtmlBilLista = (bil) => {
    const bildiv = document.createElement("div")
    bildiv.className = "bil_div_element"
    //skapar elementen
    const bilH2 = document.createElement("h3")
    const bilPcolor = document.createElement("p")
    const bilDelButt = document.createElement("button")
    //Fyller innehåll i dem
    bilH2.innerText = `${bil.brand}`
    bilPcolor.innerText = `Färg: ${bil.color}`
    bilDelButt.innerText = `Delete`
    bilDelButt.id = bil.id

    bildiv.append(bilH2, bilPcolor, bilDelButt)
    lista_bilar_div.appendChild(bildiv)

}

let deleteBil = (e) => {
    const nybillista = billista.filter( (o, i) => o.id !== e.target.id)
    //tilldelar ny billista till gammal
    billista = nybillista
    localStorage.setItem("bilarlistan", JSON.stringify(billista))
    getDataFromLocalStorage()

}

window.addEventListener("click", deleteBil);