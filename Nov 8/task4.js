
function myFun1() {

    let x= document.getElementById("pass").value;
    if(x.length<6)
    
        document.getElementById("p1").innerHTML="Too short";
        document.getElementById("p1").style.color="red";
}

function myFun2() {
    let x= document.getElementById("pass").value;
    let y= document.getElementById("Pass2").value;
    if(x != y)
    {
        document.getElementById("p2").innerHTML="The two passwords don't match";
        document.getElementById("p2").style.color="red";
    }
    else{
        document.getElementById("button").style.display="unset";
    }
        
}


