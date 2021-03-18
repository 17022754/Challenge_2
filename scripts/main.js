// function to show the time accurate
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
    
};

showTime();

// function to add and switch between elements on a specific time
function addElements(){
  var hr = (new Date()).getHours();
  var images = ['images/marsmannetje-day.png', 'images/marsmannetje-night.png'];
  var text = ['Op aarde is het nu na 11.00 uur, dus tijd om in beweging te komen!', 
              'Goedeavond, hopelijk heb je een fijne dag gehad. Als je nog niet hebt gegeten, moet je dat snel doen! Het is namelijk al bijna tijd om naar bed te gaan.']
  var tips = ['Door te sporten kom je sneller over een jetlag heen én het is gezond voor je, dus dubbele winst!', 'Volg hetzelfde slaapritme als op Aarde, zo blijf je in je ritme.']

  if(hr > 6 && hr < 11){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/background-morning.jpg')";
  } else if (hr > 11 && hr < 20){
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/background-day.png')";
    document.getElementById("images").src = images[0];
    document.getElementById("text").textContent = text[0];
    document.getElementById("time").style.color = 'rgb(255, 20, 147)';
    document.getElementById("text-tips").textContent = tips[0];
  } else {
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('images/background-night.jpeg')";
    document.getElementById("images").src = images[1];
    document.getElementById("text").textContent = text[1];
    document.getElementsByTagName("h1")[0].style.color = 'rgb(255, 255, 255)';
    document.getElementById("text-tips").textContent = tips[1];
  }
};

setInterval(addElements, 1000*60*60); /*Een keer in het uur testen of de achtergrond nog juist is.*/
addElements();

// function to show and close the tips
document.getElementById("button").onclick = function(){myFunction()};

var showTips = true;
function myFunction (){

  if(showTips){
    showTips = false;
    document.getElementById("text-tips").style.display = "block";
    return;
  }
  if (!showTips){
    showTips = true;
    document.getElementById("text-tips").style.display = "none";
    return;
  } 
};