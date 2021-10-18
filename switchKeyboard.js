const btnLetters = document.querySelector('[data-key = "btnLetters"]')
const btnNotes = document.querySelector('[data-key = "btnNotes" ]')


function handlerSwitch(event) {
const btns = document.querySelectorAll('.key, .sharp')

let arrNotes  =  new Array ('c','d','e','f','g','a', 'b', 'c#', 'd#', 'f#', 'g#','a#')
let arrLetters  =  new Array ('D','F','G','H','J','K', 'L', 'R', 'T','U', 'I','O')
let arrCurrent = Array.from(btns).map(elem => elem.dataset.key)
if (event.target == btnLetters) {
let i = 0;
    arrCurrent.forEach(m => (
        console.log(m),     
       document.querySelector(`button[data-key="${m}"]`).innerHTML = arrNotes[i++]
    ))
}else {
    
    let i = 0;
    arrCurrent.forEach(m => (
        console.log(m),     
       document.querySelector(`button[data-key="${m}"]`).innerHTML = arrLetters[i++]
    ))

    }


}   

btnLetters.addEventListener('click',  handlerSwitch)
btnNotes.addEventListener('click',  handlerSwitch)
