let input = document.querySelector(".input1")
let error = document.querySelector(".err")
let select1 = document.querySelector(".select1")
let select2 = document.querySelector(".select2")
let button = document.querySelector(".get")
let exchangeBlock = document.querySelector(".exchange-rate")
let flag1 = document.querySelector(".flag1")
let flag2 = document.querySelector(".flag2")

const api = "https://currency-converter-pro1.p.rapidapi.com/currencies";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50c6e93fa1msh70b2c3913068001p13ac1djsn1489537ab55d",
    "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
  },
};
async function getCountries() {
    try {
        let response = await fetch(api, options)
        let data = await response.json()
        console.log(data);
        let newCountires = []
        for(item in data){
            newCountires.push(Object.keys(data[item]))
        }
        newCountires[1].map((country) =>{
            let option1 = document.createElement("option")
            let option2 = document.createElement("option")
            option1.textContent = country;
            option1.value = country
            option2.textContent = country;
            option2.value = country
            select1.append(option1)
            select2.append(option2)
        })
            
    } catch (error) {
        console.log(error)
    }
}
select1.addEventListener("change", (e) =>{
    sel1 = e.target.value
    let value = e.target.value
    let lowercase = value.toLowerCase()
    let sliceText = lowercase.slice(0, 2)
    flag1.src = `https://flagcdn.com/48x36/${sliceText}.png`
})
select2.addEventListener("change", (e) =>{
    sel2 = e.target.value
    let value = e.target.value
    let lowercase = value.toLowerCase()
    let sliceText = lowercase.slice(0, 2)
    flag2.src = `https://flagcdn.com/48x36/${sliceText}.png`
})
getCountries()
async function getValue() {
    try {
        const api1 = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${sel1}&to=${sel2}&amount=${input.value}`;
        const options1 = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "50c6e93fa1msh70b2c3913068001p13ac1djsn1489537ab55d",
            "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
          },
        };
        let response = await fetch(api1, options1)
        let data = await response.json()
        let p = document.createElement("p")
        p.textContent = `From ${sel1} to ${sel2}: ${data.result }💵💵💵`;
        exchangeBlock.append(p)
    } catch (error) {
        console.log(error);
        
    }
}
button.addEventListener("click", ()=>{
    if(isNaN(input.value)){
        error.textContent = "Iltimos raqam kiriting❌❌"
        input.style.borderColor = "red"
    }
    else if(input.value === ""){
        error.textContent="Iltimos mos kiritng"
        input.style.borderColor = "red"
    }
    else{
    getValue()
      
    }
})