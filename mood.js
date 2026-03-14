function recommend(mood){

let suggestion = document.getElementById("suggestion");

if(mood === "tired"){
suggestion.innerHTML = "Recommended: Watch a short 5 minute learning video.";
}

else if(mood === "stressed"){
suggestion.innerHTML = "Recommended: Try a quick interactive quiz.";
}

else if(mood === "motivated"){
suggestion.innerHTML = "Recommended: Start a full tutorial lesson.";
}

}
