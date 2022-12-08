var sec = 60;
var interval;


var showSec = document.getElementById("displaysec");
var getMinInp = document.getElementById("getMin");
var getHourInp = document.getElementById("getHour");
// var mint = +getMinInp.value--;
// var hour = +getHourInp.value--;

function timer(){

    sec--
    if(sec == 0){
        sec=60;
        getMinInp.value--;
    
        
         if(getMinInp.value == 0){
            getMinInp.value = 60 ;
            getHourInp.value--;
            
        }
    }
    showSec.innerHTML = sec;
    var min = getMinInp.value;
    var hour = getHourInp.value;
    document.getElementById("show").innerHTML = hour + " hr: " + min + " min: " + sec + " sec ";
    if (min == 0 && hour == 0){
        
            clearInterval(interval);
            document.getElementById("show").innerHTML = "TIME UP";
    }
    
    

}

function startTimer(){
  interval = setInterval 
(function()  {
    timer();
}, 100);
}

function pause(){
    clearInterval (interval);
}

function reset(){
    showSec.innerHTML=0;
    getMinInp.value= 0;
    getHourInp.value= 0;
    
    document.getElementById("show").innerHTML = getMinInp.value + " hr: " + getHourInp.value + " min: " + showSec.innerHTML + " sec ";
}