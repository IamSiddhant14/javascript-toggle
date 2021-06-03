var count=1;
function decide(){

    if(count== 1 ){
        var right = document.getElementById("box");
        right.style.justifyContent="flex-end";
        right.style.borderColor = "white";
        right.style.backgroundColor = "white";
        var bd= document.getElementsByTagName("body")[0];
        bd.style.backgroundColor='black';
        bd.style.color='white';
        
        count=0;

    }
    else{

        var left = document.getElementById("box");
        left.style.justifyContent="flex-start";
        left.style.borderColor = "black";
        var bd= document.getElementsByTagName("body")[0];
        bd.style.backgroundColor="white";
        bd.style.color="black";
        count=1;

    }

}