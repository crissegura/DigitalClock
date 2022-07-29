//mode (ligth ot dark)
let ligthmode = document.getElementById('ligthmode')
let darkmode = document.getElementById('darkmode')

ligthmode.onclick = ()=>{
    let body = document.getElementById('bodyCH')
   
    body.style.backgroundColor='white'
    body.style.color='black'
    ligthmode.style.display='none'
    darkmode.style.display='block'
    darkmode.style.color='black'

    let backText = document.getElementById('backText')
    backText.style.color='black'
}
darkmode.onclick = ()=>{
    let body = document.getElementById('bodyCH')
    
    body.style.backgroundColor='black'
    body.style.color='white'
    body.style.color='white'
    ligthmode.style.display='block'
    darkmode.style.display='none'

    let backText = document.getElementById('backText')
    backText.style.color='white'
}

//chronometer
let start = document.getElementById('start')
let stoP = document.getElementById('stop')

start.onclick=()=>{
    startCounter()
}

function startCounter(){

    stoP.style.display='block'
    start.style.display='none'

    let seconds = document.getElementById('seconds')
    let minutes = document.getElementById('minutes')
    let hours = document.getElementById('hours')

    secondsCounter='0'+0
    minutesCounter='0'+0
    hoursCounter='0'+0

    interval = window.setInterval(
        function(){
            
            if(secondsCounter===60){
                secondsCounter = '0'+0
                minutesCounter ++
                if(minutesCounter<10){
                    minutesCounter = '0'+minutesCounter
                }
                if(minutesCounter===60){
                    minutesCounter = '0'+0
                    hoursCounter ++
                    if(hoursCounter<10){
                        hoursCounter = '0'+hoursCounter
                    }
                }
            }

            seconds.textContent = secondsCounter
            minutes.textContent = minutesCounter
            hours.textContent = hoursCounter

            secondsCounter++

            if(secondsCounter<10){
                secondsCounter = '0'+secondsCounter
            }
           
           
        },1000)
}

stoP.onclick=()=>{
    clearInterval(interval)
    start.style.display='block'
    stoP.style.display='none'
}

