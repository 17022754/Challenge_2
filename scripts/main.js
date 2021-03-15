function showTime(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(hour > 12){
        session = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour; 
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hour + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById("time").innerText = time;
    document.getElementById("time").textContent = time;

    setTimeout(showTime, 1000);
    
}

showTime();

function differentBackground(){
  var hr = (new Date()).getHours();

  if(hr > 6 && hr < 9){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/background-morning.jpg')";
  } else if (hr > 9 && hr < 20){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/background-day.png')";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/background-night.jpeg')";
  }
}

setInterval(differentBackground, 1000*60*60); /*Een keer in het uur testen of de achtergrond nog juist is.*/
differentBackground();