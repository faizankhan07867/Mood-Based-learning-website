function recommendMood(mood){

let suggestion = document.getElementById("suggestion");
let videoBox = document.getElementById("videoBox");

if(mood === "tired"){

suggestion.innerHTML = "You seem tired. Watch a relaxing learning video.";

videoBox.innerHTML =
'<iframe width="420" height="250" src="https://www.youtube.com/embed/2OEL4P1Rz04" allowfullscreen></iframe>';

}

else if(mood === "stressed"){

suggestion.innerHTML = "Feeling stressed? Try this calming focus technique.";

videoBox.innerHTML =
'<iframe width="420" height="250" src="https://www.youtube.com/embed/inpok4MKVLM" allowfullscreen></iframe>';

}

else if(mood === "motivated"){

suggestion.innerHTML = "Great! Start learning something powerful.";

videoBox.innerHTML =
'<iframe width="420" height="250" src="https://www.youtube.com/embed/rfscVS0vtbw" allowfullscreen></iframe>';

}

}
