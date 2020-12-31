var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function () {
	var image = "";
var lolCatImage = document.getElementById("lolcat");
var timeEventJS = document.getElementById("timeEvent");

if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "Iz wake up time";
} else if (time == lunchTime) {
	image = "https://i.imgflip.com/wuhv0.jpg";
	messageText = "I can haz sheezebruger?";
} else if (time == napTime) {
	image = "https://coleandmarmalade.com/wp-content/uploads/2020/02/Canva-Lazy-fat-cat-sleeping-on-the-couch.jpg";
	messageText = "Iz nap time";
} else if (time == partyTime) {
	image = "https://i.pinimg.com/736x/69/fd/7a/69fd7a14b4e09f4a6d695680acad5ca3.jpg";
	messageText = "Iz party time!";
} else if (time < noon) {
	image = "https://i1.wp.com/www.veryimportantpets.co.uk/wp-content/uploads/2019/01/British-Shorthair-Guide.jpg?w=750&ssl=1";
	messageText = "Good Morningz!";
} else if (time > evening) {
	image = "https://www.orlandocatcafe.com/wp-content/uploads/2019/06/Sleeping-cat.jpg";
	messageText = "Good nightz, sleep time.";
} else {
	image = "https://i1.wp.com/www.veryimportantpets.co.uk/wp-content/uploads/2019/01/British-Shorthair-Guide.jpg?w=750&ssl=1";
	messageText = "Hello, impress me human";
}
timeEventJS.innerText = messageText;
lolCatImage.src = image;
	var showCurrentTime = function () {
	// display the string on the webpage
	var clock = document.getElementById("clock");
	
	var currentTime = new Date (); // creates new object with current date and time
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	
	    // Set hours 
    if (hours >= noon) { 
        meridian = "PM"; 
    }  
	
    if (hours > noon) { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
	// put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	
	clock.innerText = clockTime;
};
	showCurrentTime();
};

var oneSecond = 1000; 
setInterval( updateClock, oneSecond);

var isPartyTime = false;

var partyTimeButton = document.getElementById("partyTimeButton");

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "Party Over";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "PARTY TIME";
	  partyTimeButton.style.backgroundColor = "#222";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};
console.log("code works til here");

var wakeupEvent =  function () {
	wakeupTime = wakeUpTimeSelector.value;
};
var lunchEvent =  function () {
	lunchTime = lunchTimeSelector.value;
};

var napTimeEvent =  function () {
	napTime = napTimeSelector.value;
};



partyTimeButton.addEventListener('click', partyEvent);

wakeUpTimeSelector.addEventListener("change", wakeupEvent);

lunchTimeSelector.addEventListener("change", lunchEvent);

napTimeSelector.addEventListener("change", napTimeEvent);

console.log("code works til end");








