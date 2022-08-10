let data = document.getElementById("data")
let compromisso = document.getElementById("compromisso")
let res = document.getElementById("res")

function agendar() {
   res.innerHTML = `<input type="checkbox" name="" id=""> ${data.value} - ${compromisso.value}`
    
}

