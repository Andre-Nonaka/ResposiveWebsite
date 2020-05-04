/*Clock Application in Javascript ES6 using HTML and CSS*/

function realtimeClock(){
    var rtClock = new Date(); 
    var hours = rtClock.getHours(); 
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var miliseconds = rtClock.getMilliseconds(); 
    var amPm = (hours < 12) ? "AM" : "PM"; 
    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    miliseconds = ("0" + miliseconds).slice(-2);
    document.getElementById('clock').innerHTML = hours + "  :  " + minutes + "  :  " + seconds + "  :  " + miliseconds + " " + amPm;
    var t = setTimeout(realtimeClock, 2000); 
    var days = rtClock.getDate();
    var months = rtClock.getMonth() + 1;
    var years = rtClock.getFullYear();  
    days = ("0" + days).slice(-2);
    months = ("0" + months).slice(-2);
    document.getElementById('date').innerHTML = days + " / " + months + " / " + years;
    var s = setTimeout(realtimeClock, 3600000); 
}
