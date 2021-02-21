function fetchData(){
    fetch("https://api.kanye.rest").then((response)=>response.json()).then(function(data){
        document.getElementById("result").innerHTML = data.quote
    })
}

function onClick(){
    document.getElementById("result").style.backgroundColor = `#b6${Math.floor(Math.random() * 10000)}`
    document.getElementById("button").style.backgroundColor = `#b6${Math.floor(Math.random() * 10000)}`
    fetchData()
    document.getElementById("result").style.transform = document.getElementById("result").style.transform == "rotateY(360deg)" ? "rotateY(-360deg)" : "rotateY(360deg)"
}


document.querySelector("#button").addEventListener("click", onClick)
document.querySelector("#mover").addEventListener("click", onClick)