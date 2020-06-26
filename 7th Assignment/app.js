function getNum(num,or=false) {
    var result = document.getElementById("resBox");
    if(or){
        result.value = num;  
    }
    else{
        result.value += num;
    }
    
}

function clearRes() {
    var result = document.getElementById("resBox");
    result.value = ""
}

function getRes() {
    var result = document.getElementById("resBox");
    result.value = eval(result.value);
}

function _e(id)
{
    return document.getElementById(id);
}