;(function(){
 'use strict'



const body = document.querySelector('.body')

let tempoVermelho = null
let tempoAmarelo = null
let tempoVerde = null
let tempoLoop = null

const times = {
 vermelho: 5000,
 amarelo: 3000,
 verde: 5000
}


 const section = document.createElement('section')
 const div = document.createElement('div')
 const divVermelho = document.createElement('div')
 const divAmarelo = document.createElement('div')
 const divVerde = document.createElement('div')
 const btnVerde = document.createElement('button')
 const btnAmarelo = document.createElement('button')
 const btnVermelho = document.createElement('button')
 const btnAuto = document.createElement('button')

divVermelho.dataset.cor = 'vermelho';
divAmarelo.dataset.cor = 'amarelo'
divVerde.dataset.cor = 'verde'




btnVerde.innerText = 'Verde'
btnAmarelo.innerText = 'Amarelo'
btnVermelho.innerText = 'Vermelho' 
btnAuto.innerText = 'Auto'

section.classList.add('container')
div.classList.add('content')
divVermelho.classList.add('divVermelha')
divAmarelo.classList.add('divAmarela')
divVerde.classList.add('divVerde')

btnVerde.classList.add('btnVerde')
btnAmarelo.classList.add('btnAmarelo')
btnVermelho.classList.add('btnVermelho')
btnAuto.classList.add('btnAuto')


div.appendChild(divVermelho)
div.appendChild(divAmarelo)
div.appendChild(divVerde)

section.appendChild(div)

section.appendChild(btnVerde)
section.appendChild(btnAmarelo)
section.appendChild(btnVermelho)
section.appendChild(btnAuto)

body.appendChild(section)

// eventos addEventListener
btnVermelho.addEventListener('click', acenderVermelho)
btnAmarelo.addEventListener('click', acenderAmarelo)
btnVerde.addEventListener('click', acenderVerde)
btnAuto.addEventListener('click',  (e)=> {
 semafaroAuto(e)
})


// apagar luzes 
function apagarLuzes(){
 [...document.querySelectorAll('.content div')].forEach( ele => ele.classList.remove('aceso'))
}


// acender vermelho
function acenderVermelho(){
 apagarLuzes()
document.querySelector('.divVermelha').classList.add('aceso')
}

//acender Amarelo
function acenderAmarelo(){
 apagarLuzes()
 document.querySelector('.divAmarela').classList.add('aceso')
}

//acender verde
function acenderVerde(e){
 apagarLuzes()
 document.querySelector('.divVerde').classList.add('aceso')
 
 
}

function limparAuto(){
 clearTimeout(tempoVerde)
 clearTimeout(tempoVermelho)
 clearTimeout(tempoAmarelo)
 clearTimeout(tempoLoop)
}


// acender auto

let aux = false

function semafaroAuto(e){
 let btn = e.target
 if(!aux){
  autoSemafaro()
  btn.innerText = 'Parar'  
  aux = true
 }else{
  limparAuto()
  apagarLuzes()
  aux = false
  btn.innerText = 'Auto'
 }
}



// funçao para automatizar


function autoSemafaro(){
 apagarLuzes()
 acenderVerde()

tempoAmarelo = setTimeout(()=> {
 acenderAmarelo()

tempoVermelho = setTimeout(()=> {
 acenderVermelho()

tempoLoop = setTimeout(()=> {
 if(aux){}
 autoSemafaro()
},times.vermelho)



}, times.amarelo)


}, times.verde)

 
}
})()
