document.getElementById("btn1").addEventListener("click", function(){
    document.getElementById("music1").hidden = false;
    document.getElementById("music2").hidden = true;
    document.getElementById("music3").hidden = true;
    document.getElementById("music4").hidden = true;
    document.getElementById("music5").hidden = true;
    document.getElementById("music6").hidden = true;
});

document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("music1").hidden = true;
    document.getElementById("music2").hidden = false;
    document.getElementById("music3").hidden = true;
    document.getElementById("music4").hidden = true;
    document.getElementById("music5").hidden = true;
    document.getElementById("music6").hidden = true;
});

document.getElementById("btn3").addEventListener("click", function(){
    document.getElementById("music1").hidden = true;
    document.getElementById("music2").hidden = true;
    document.getElementById("music3").hidden = false;
    document.getElementById("music4").hidden = true;
    document.getElementById("music5").hidden = true;
    document.getElementById("music6").hidden = true;
});

document.getElementById("btn4").addEventListener("click", function(){
    document.getElementById("music1").hidden = true;
    document.getElementById("music2").hidden = true;
    document.getElementById("music3").hidden = true;
    document.getElementById("music4").hidden = false;
    document.getElementById("music5").hidden = true;
    document.getElementById("music6").hidden = true;
});

document.getElementById("btn5").addEventListener("click", function(){
    document.getElementById("music1").hidden = true;
    document.getElementById("music2").hidden = true;
    document.getElementById("music3").hidden = true;
    document.getElementById("music4").hidden = true;
    document.getElementById("music5").hidden = false;
    document.getElementById("music6").hidden = true;
});

document.getElementById("btn6").addEventListener("click", function(){
    document.getElementById("music1").hidden = true;
    document.getElementById("music2").hidden = true;
    document.getElementById("music3").hidden = true;
    document.getElementById("music4").hidden = true;
    document.getElementById("music5").hidden = true;
    document.getElementById("music6").hidden = false;
});
