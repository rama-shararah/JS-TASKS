function myfun(){
    var inputname= document.getElementById("Subject");
    sessionStorage.setItem("Subject", inputname.value);

    var ta= document.getElementById("des");
    sessionStorage.setItem("des", ta.value);

    let checkboxjs= document.getElementById("Javascript");
    let checkboxh= document.getElementById("HTML");
    let checkboxc= document.getElementById("CSS");

    if(checkboxjs.checked==true){
        sessionStorage.setItem("Javascript", checkboxjs.value);
    }
    if(checkboxh.checked==true){
        sessionStorage.setItem("HTML", checkboxh.value);

    }
    if(checkboxc.checked==true){
        sessionStorage.setItem("CSS", checkboxc.value);
    }

    let checkboxcu= document.getElementById("Customer");
    let checkboxad= document.getElementById("Admin");

    if(checkboxcu.checked==true){
        sessionStorage.setItem("Customer", checkboxcu.value);

    }
    if(checkboxad.checked==true){
        sessionStorage.setItem("Admin" ,checkboxad.value );
    }

    document.getElementById("mydiv").style.display="block";

    document.getElementById("p1").innerHTML += " "+" "+ sessionStorage.getItem("Subject");
    document.getElementById("p2").innerHTML += " "+" "+ sessionStorage.getItem("des");

    if(checkboxjs.checked==true){
        document.getElementById("p4").innerHTML += " "+" "+ sessionStorage.key(1);
    }
    if(checkboxh.checked==true){
        document.getElementById("p4").innerHTML += " "+" "+ sessionStorage.key(6);
    }

    if(checkboxc.checked==true){
        document.getElementById("p4").innerHTML += " "+" "+ sessionStorage.key(3);
    }

    if(checkboxcu.checked==true){
        document.getElementById("p3").innerHTML += " "+" "+ sessionStorage.key(7);
    }

    if(checkboxad.checked==true){
        document.getElementById("p3").innerHTML += " "+" "+ sessionStorage.key(5);
    }



    






}