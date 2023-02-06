function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes;
    var seconds = dateTime.getSeconds;
   var session = document.getElementById('session')
   
   if(hours >= 12){
    session.innerHTML = 'PM';
   }else{
    session.innerHTML = 'AM';
   }
 
   document.getElementById('hours').innerHTML = hours;
   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('seconds').innerHTML = seconds;


   }

   //add AM and PM system 

    

//Convert hours into 12 hour rather than 24 format
 


    // Add padding to hours, mins and seconds with leading zeros
 




    // DISPLAY THE CLOCK ITSELF via JS
   
    
}