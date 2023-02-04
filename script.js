function realtimewebclock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes;
    var seconds = rtClock.getSeconds;

    //add AM and PM system 
    var amPm = ( hours < 12) ? "AM" : "PM";
//Convert hours into 12 hour rather than 24 format
    hours = (hours > 12) ? hours = 12 : hours;


    // Add padding to hours, mins and seconds with leading zeros
    hours =("0" + hours).slice(-2);
    minutes =("0" + minutes).slice(-2);
    seconds =("0" + seconds).slice(-2);
    miliiseconds




    // DISPLAY THE CLOCK ITSELF via JS
    document.getElementById('Clock').innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimewebclock, 500);
    
}