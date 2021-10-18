const keys = document.querySelectorAll('.key, .sharp')
const Piano = document.querySelectorAll('.fieldPlay')


function playSound(event){
const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
const key = document.querySelector(`button[data-key="${event.keyCode}"]`)
startPlay(audio, key)      
}

function startPlay(audio, key){
    if(!audio) return;
    key.classList.add('activate')
    audio.currentTime = 0;
    audio.play()
}

function stopPlay(event){
    if(event.propertyName != "transform") return;
    this.classList.remove('activate')
}

function clickStartPlay(event){
    

        let isMouseDown = true;
        if(isMouseDown){
            event.target.classList.toggle('activate')
            let key = event.target.dataset.key
            const audio = document.querySelector(`audio[data-key="${key}"]`)
            audio.play()
        }   
}

function checkClick(event){
    document.addEventListener('mouseover', clickStartPlay(event)       
)   
}
    
function clickStopPlay(event){
    event.target.classList.remove('activate')
}

document.addEventListener('keydown',(event) => playSound(event))

keys.forEach(key =>{
    key.addEventListener('transitionend', stopPlay)
    key.addEventListener('mouseover',clickStartPlay)
    key.addEventListener('mouseout', clickStopPlay)
})
