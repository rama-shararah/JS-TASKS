



function myfun(){
    let x= document.getElementById("select").value;
    if(x=="jordan"){
        document.getElementsByTagName("img")[0].src="jordan.png";
    }
    else if(x=="lebanon"){
        document.getElementsByTagName("img")[0].src="lebanon.png";
    }
    else if(x=="norway"){
        document.getElementsByTagName("img")[0].src="capture.png";
    }
    else if(x=="egybt"){
        document.getElementsByTagName("img")[0].src="egybt.png";
    }
    else{
        document.getElementsByTagName("img")[0].src="download.png";
    }

}