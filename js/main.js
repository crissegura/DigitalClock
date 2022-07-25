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

let reloadAllTime = setInterval(dayAndHour,1000)
 
