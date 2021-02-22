let tickets = []
let countriesIndexZero = []
let countriesIndexOne = []
let destinationCountry = ""
let destination = []
document.querySelector("#input").addEventListener("change", function(event){
    tickets = JSON.parse("[" + event.target.value + "]")
    
    countriesIndexZero = tickets[0].reduce((acc, val)=> acc.concat(val[0]),[])
    countriesIndexOne = tickets[0].reduce((acc, val)=> acc.concat(val[1]),[])
    destinationCountry = countriesIndexOne.filter((country)=> !countriesIndexZero.includes(country))[0]
    destination = [destinationCountry]
})


function destinationFinder(destinationCountry){
    let newDestination = tickets[0].filter((country)=> country[1] == destinationCountry)
    newDestination[0] ? destination.unshift(newDestination[0][0]) : null
    destination.length != tickets[0].length + 1 ? (countriesIndexZero.includes(newDestination[0][0]) && destinationFinder(newDestination[0][0])) : null
    
}
document.querySelector("#button").addEventListener("click", function(){
    destinationFinder(destinationCountry)
    document.querySelector("#destination").innerHTML = destination.join(" ✈ ")
})