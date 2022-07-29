let reloadAllTime = setInterval(dayAndHour,1000)

function dayAndHour(){

    //dateContent
    let today = document.getElementById('today')
    let fullDate =document.getElementById('fullDate')
    //dateFunction
    let date = new Date()
    //dayOfWeek
    let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let dayOfWeek = date.getDay()
    //numberDay
    let number = date.getDate()
    //monthOfWeek
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let monthOfYear = date.getMonth()
    //year
    let year = date.getFullYear()
    //documentWrite
    today.textContent = week[dayOfWeek]
    fullDate.textContent = months[monthOfYear] + ' / '+number +' / '+year

    //hoursContent
    let hourNow = document.getElementById('hourNow')
    //getHour
    let hour = date.getHours()
    if (hour<10){
        hour = '0'+date.getHours()
    }else{
        hour = date.getHours()
    }
    //getMinutes
    let minutes = date.getMinutes()
    if (minutes<10){
        minutes = '0'+date.getMinutes()
    }else{
        minutes = date.getMinutes()
    }
    //getSeconds
    let seconds = date.getSeconds()
    if (seconds<10){
        seconds = '0'+date.getSeconds()
    }else{
        seconds = date.getSeconds()
    }
    //documentWrite
    hourNow.textContent = hour +':'+minutes+':'+seconds

}


//mode (ligth ot dark)
let moodwhite = document.getElementById('whiteMood')
let moodblack = document.getElementById('blackMood')

moodwhite.onclick = ()=>{
    whiteMood()
}
moodblack.onclick = ()=>{
    blackMood()
}


function whiteMood(){
    let body = document.getElementById('body')
    let chronometer = document.getElementById('chronometer')

    body.style.backgroundColor='white'
    body.style.color='black'
    moodwhite.style.display='none'
    moodblack.style.display='block'
    moodblack.style.color='black'

    chronometer.style.border='solid 0.5px black'
    chronometer.style.color='black'
    chronometer.onmouseover=()=>{
        chronometer.style.color='black'
    }
    chronometer.onmouseout=()=>{
        chronometer.style.color='black'
    }  
}
function blackMood(){
    let body = document.getElementById('body')
    let chronometer = document.getElementById('chronometer')
    
    body.style.backgroundColor='black'
    body.style.color='white'
    body.style.color='white'
    moodwhite.style.display='block'
    moodblack.style.display='none'

    chronometer.style.color='white'
    chronometer.style.border='solid 0.5px white'
    chronometer.onmouseover=()=>{
        chronometer.style.color='black'
    }
    chronometer.onmouseout=()=>{
        chronometer.style.color='white'
    }
}











