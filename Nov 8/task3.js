function myfun(){
    let x = document.getElementById("select").value;
    if(x=="arial"){
        document.getElementById("con").style.fontFamily="Arial";
    }
    else if(x=="times new roman"){
        document.getElementById("con").style.fontFamily="Times New Roman";
    }
    else if(x=="georgia"){
        document.getElementById("con").style.fontFamily="Georgia";
    }
    else{
        document.getElementById("con").style.fontFamily="fantasy";
    }
}

function myfun2(){
    let x = document.getElementById("select2").value;
    if(x=="10pt"){
        document.getElementById("con").style.fontSize="10pt";
    }
    else if(x=="15pt"){
        document.getElementById("con").style.fontSize="15pt";
    }
    else if(x=="20pt"){
        document.getElementById("con").style.fontSize="20pt";
    }
    else{
        document.getElementById("con").style.fontSize="25pt";
    }
}


function myfun3(){
    let checkbox= document.getElementById("italic");
    if(checkbox.checked==true){
        document.getElementById("con").style.fontStyle="italic";
    }
    else{
        document.getElementById("con").style.fontStyle="normal";
    }
    
}

function myfun4(){
    let checkbox= document.getElementById("bold");
    if(checkbox.checked==true){
        document.getElementById("con").style.fontWeight="bold";
    }
    else{
        document.getElementById("con").style.fontWeight="normal";
    }
}

function myfun5(){
    let checkbox= document.getElementById("underline");
    if(checkbox.checked==true){
        document.getElementById("con").style.textDecoration="underline";
    }
    else{
        document.getElementById("con").style.textDecoration="none";
    }
}
