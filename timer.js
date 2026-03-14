let time = 1500;
let timer = null;

function startTimer(){

if(timer !== null){
return;
}

timer = setInterval(function(){

let minutes = Math.floor(time/60);
let seconds = time%60;

document.getElementById("timer").innerHTML =
minutes + ":" + (seconds<10?"0":"") + seconds;

time--;

if(time < 0){
clearInterval(timer);
alert("Time for break!");
}

},1000);

}

function resetTimer(){

clearInterval(timer);

time = 1500;

document.getElementById("timer").innerHTML = "25:00";

}

/* Analytics chart */

window.onload = function(){

const ctx = document.getElementById("studyChart");

new Chart(ctx,{
type:"bar",
data:{
labels:["Mon","Tue","Wed","Thu","Fri"],
datasets:[{
label:"Study Hours",
data:[2,3,4,2,5],
backgroundColor:"blue"
}]
}
});

}
