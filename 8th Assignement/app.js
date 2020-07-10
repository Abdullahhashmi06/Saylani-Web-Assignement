var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var aHead = document.getElementById("a");
var bHead = document.getElementById("b");
var cHead = document.getElementById("c");
var interval;

function timer(){
    msec ++;
    msecHeading.innerHTML = msec;
    if(msec == 60){
        sec ++
        secHeading.innerHTML = sec;
        msec = 0;
    } else if(sec == 60){
        min ++
        minHeading.innerHTML = min;
        sec = 0
    }
}

function start(){
    interval = setInterval(timer, 10);
    document.getElementById("start").disabled = true; 
}

function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false; 
}

function re(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
    document.getElementById("start").disabled = false; 
    document.getElementById("readRows").innerHTML = ''; 
   
}

function read(){
    var a = minHeading.innerHTML;
    var b = secHeading.innerHTML;
    var c = msecHeading.innerHTML;
    
    // aHead.innerHTML = min;
    // bHead.innerHTML = sec;
    // cHead.innerHTML = msec;
    aH = `<div class='readRowsChild dig text-center '><span>Interval: </span><h2>${min}</h2>`;
    bH = `<h2>${sec}</h2>`;
    cH = `<h2>${msec}</h2></div>`;

    exVal = document.getElementById('readRows').innerHTML;
    document.getElementById('readRows').innerHTML = aH+bH+cH + exVal ;
}
