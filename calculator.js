function insert (p) {
    var x = document.getElementById('screen');
    x.value = x.value + p;
}

function equal () {
    var x = document.getElementById('screen');
    if(x.value == ""){
        document.getElementById('screen').value = "Empty!";
    }
     else{
        var w = eval(x.value)
        x.value = w;    
    }
}

function clean () {
    document.getElementById('screen').value = "";
}
function percent () {
    var x = document.getElementById('screen');
    x.value = x.value / 100;
}