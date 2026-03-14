let time = 1500;
let interval;

function startTimer(){

interval = setInterval(function(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

document.getElementById("timer").innerHTML =
minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

time--;

if(time < 0){
clearInterval(interval);
alert("Take a 5 minute break!");
}

},1000);

}

function resetTimer(){
clearInterval(interval);
time = 1500;
document.getElementById("timer").innerHTML = "25:00";
}
