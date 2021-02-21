function fetchData(){
    fetch("https://api.kanye.rest").then((response)=>response.json()).then(function(data){
        document.getElementById("result").innerHTML = data.quote
        document.getElementById("result").style.transform = rotate("360deg")
    })
}


document.querySelector("#button").addEventListener("click", fetchData)