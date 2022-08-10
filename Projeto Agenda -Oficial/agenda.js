
let data = document.getElementById("data")
let compromisso = document.getElementById("compromisso")
let res = document.getElementById("res")
let compr = {data: data, compromisso: compromisso}



function agendar() {
       
    let item = document.createElement('div')
    let cont = 0

    if (localStorage.getItem('cont') != null) {
        cont = parseInt(localStorage.getItem('cont'))
    }

    item.innerHTML = `<input type="checkbox"> ${compr.data.value} - ${compr.compromisso.value} <br>`
    res.appendChild(item)

    
    localStorage.setItem(`anotação ${cont}`, `<input type="checkbox"> ${compr.data.value} - ${compr.compromisso.value} <br>`)
    cont ++
    localStorage.setItem('cont', cont)

    compromisso.value = ''
    data.value = ''
    compromisso.focus()
    location.reload()
    
}


let cont = 0

    if (localStorage.getItem('cont') != null) {
        cont = parseInt(localStorage.getItem('cont'))
    }
for (let i = 0; i < cont ; i++) {
    if (localStorage.getItem(`anotação ${i}`) != null) {

   
    let item2 = document.createElement('div')
    item2.innerHTML = localStorage.getItem(`anotação ${i}`)
    item2.id = `anotação ${i} div`
    res.appendChild(item2)

    let inv = document.createElement('input')
   inv.value = `anotação ${i}`
   inv.id = `anotação ${i}`
   inv.style.display = 'none'
    
   let rem = `<button onclick="excluir('anotação ${i}')"> Apagar</button>`
        item2.innerHTML += rem;

    res.appendChild(inv)
   


}
}

function excluir(i) {
    localStorage.removeItem(i)
    location.reload()
}
