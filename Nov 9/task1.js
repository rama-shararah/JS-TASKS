function myfun(){
    var inputname= document.getElementById("name");
     localStorage.setItem("name", inputname.value);

     var inputage= document.getElementById("age");
     localStorage.setItem("age", inputage.value);


     let radiom= document.getElementById("male");
     let radiof= document.getElementById("female");
     if(radiom.checked==true){
         localStorage.setItem("male", radiom.value);
     }
     else {
        localStorage.setItem("female", radiof.value);
     }

     var ta= document.getElementById("des");
     localStorage.setItem("des", ta.value);

     let checkboxjs= document.getElementById("Javascript");
     let checkboxp= document.getElementById("python");
     let checkboxc= document.getElementById("c#");

     if(checkboxjs.checked==true){
         localStorage.setItem("Javascript", checkboxjs.value);
     }
     if(checkboxp.checked==true){
        localStorage.setItem("python", checkboxp.value);
     }
     if(checkboxc.checked==true){
        localStorage.setItem("c#", checkboxc.value);
     }

     
     
     document.getElementById("mydiv").style.display="block";
     
     
     


     document.getElementById("p1").innerHTML += " "+" "+ localStorage.getItem("name");
     document.getElementById("p2").innerHTML += " "+" "+ localStorage.getItem("age");
     if(radiom.checked==true){
        document.getElementById("p3").innerHTML += " "+" "+ localStorage.key(1);
    }
    if(radiof.checked==true) {
        document.getElementById("p3").innerHTML += " "+" "+ localStorage.key(9);
    }

    document.getElementById("p4").innerHTML += " "+" "+ localStorage.getItem("des");


     if(checkboxjs.checked==true){
        document.getElementById("p5").innerHTML += " "+" "+ localStorage.key(0);
     }
     if(checkboxp.checked==true){
        document.getElementById("p5").innerHTML += " "+" "+ localStorage.key(10);
     }
     if(checkboxc.checked==true){
        document.getElementById("p5").innerHTML += " "+" "+ localStorage.key(3);
     }


     }


