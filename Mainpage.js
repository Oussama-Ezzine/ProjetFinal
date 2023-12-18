let mysong = document.querySelector('#mysong');
let icon = document.querySelector('#icon')
icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "pause-icon-black.png";
    
    } else {
        mysong.pause();
        icon.src = "play_icon-black.png";
    }
}
let textelement = document.querySelector('#Text');
let Text = 'Le Tourisme . . .  Autrement.'
let index = 1 
writeText()

function writeText(){
    textelement.innerText = Text.slice(0,index);
    index++
    if(index > Text.length) { index=1}
    setTimeout(writeText, 170);
}


let Events = document.querySelectorAll('.Event');

Events.forEach((Event)=>{

    Event.addEventListener('click',()=>{
    removeActiveClasses()
    Event.classList.add('active')
 })
})

function removeActiveClasses(){
    Events.forEach(Event => {
        Event.classList.remove('active')
    })
    }


let left = document.querySelector('.BPmaisondhote');
let right = document.querySelector('.BPcamping');
let mainpageBonsplans = document.querySelector('.mainpageBonsplans');

left.addEventListener('mouseenter', () => mainpageBonsplans.classList.add('hover-left') )
left.addEventListener('mouseleave', () => mainpageBonsplans.classList.remove('hover-left') )

right.addEventListener('mouseenter', () => mainpageBonsplans.classList.add('hover-right') )
right.addEventListener('mouseleave', () => mainpageBonsplans.classList.remove('hover-right') )





