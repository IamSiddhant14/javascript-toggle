console.log("script file is loded")
var t=document.getElementById("box");
t.addEventListener("click",decide())
var count="1";
function decide(){

    if(count=="1"){
        var right = document.getElementById("box");
        right.style.justifyContent="flex-end"
        var bd= document.getElementById("body");
        bd.style.backgroundColor="black";
        bd.style.Color="white";
        count=count-1;

    }
    else{

        var left = document.getElementById("box");
        left.style.justifyContent="flex-start"
        var bd= document.getElementById("body");
        bd.style.backgroundColor="white";
        bd.style.Color="black"
        count=count+1;

    }

}