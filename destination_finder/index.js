

const tickets = [["USA", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "USA"], ["USA", "JPN"], ["JPN", "TUR"], ["TUR", "USA"]]

const countriesIndexZero = tickets.reduce((acc, val)=> acc.concat(val[0]),[])
const countriesIndexOne = tickets.reduce((acc, val)=> acc.concat(val[1]),[])

const destinationCountry = countriesIndexOne.filter((country)=> !countriesIndexZero.includes(country))

const destination = [destinationCountry[0]]

function destinationFinder(destinationCountry){
    let newDestination = tickets.filter((country)=> country[1] == destinationCountry)
    newDestination[0] ? destination.unshift(newDestination[0][0]) : null
    destination.length != tickets.length + 1 ? (countriesIndexZero.includes(newDestination[0][0]) && destinationFinder(newDestination[0][0])) : null
}
destinationFinder(destinationCountry)
console.log(destination)

document.querySelector("#container").innerHTML = destination.join(" ✈ ")