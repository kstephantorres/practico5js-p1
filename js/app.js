const formulario = document.querySelector('form')
const btnIniciar = document.querySelector('.btn')
const input = document.querySelector('#inputNumero')
let numero = 0

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()    
    if(btnIniciar.innerText==='Iniciar')
    {
        btnIniciar.innerText = "Enviar"
        input.disabled = false
        numero = Math.trunc(Math.random()*10)+1
        console.log(numero)
        input.focus()
        alert(`
                      🔎 A D I V I N A 🔍
             ⌨ Ingresa números del 1 al 100 ⌨
        `)
    }else if (numero === parseInt(input.value)){
        alert(`
        ✔ C O R R E C T O ✔ 
          🎉Felicidades🎉`)
        btnIniciar.innerText = "Iniciar"
        formulario.reset()
        input.disabled = true
        btnIniciar.focus()
    }else{
        formulario.reset()
        alert(`
              ❌ E R R O R ❌ 
        🔄 Intentalo de nuevo 🔄`)
        input.focus()
    }
    
})
console.log(btnIniciar)