

const tickets = [["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]]

const countriesIndexZero = tickets.reduce((acc, val)=> acc.concat(val[0]),[])
const countriesIndexOne = tickets.reduce((acc, val)=> acc.concat(val[1]),[])

let sourceCountry = countriesIndexZero.filter((country)=> !countriesIndexOne.includes(country))



const destination = [sourceCountry]

function destinationFinder(sourceCountry){
    let newSource = tickets.filter((country)=> country[0] == sourceCountry)
        newSource[0] ? destination.push(newSource[0][1]) : null 
        newSource[0] ? (countriesIndexOne.includes(newSource[0][1]) && destinationFinder(newSource[0][1])) : null
}
destinationFinder(sourceCountry)
console.log(destination)

document.querySelector("#container").innerHTML = destination.join(" => ")