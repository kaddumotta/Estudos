
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

    item.innerHTML = `<input type="checkbox"> ${compr.data.value} - ${compr.compromisso.value} `
    res.appendChild(item)

    
    localStorage.setItem(`anotação ${cont}`, `<input type="checkbox"> ${compr.data.value} - ${compr.compromisso.value} `)
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

    
   let rem = `<button onclick="excluir('anotação ${i}')"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"></path><path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path><path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path></svg></button>`
        item2.innerHTML += rem;
        

    res.appendChild(inv)
   


}
}

function excluir(i) {
    localStorage.removeItem(i)
    location.reload()
}
