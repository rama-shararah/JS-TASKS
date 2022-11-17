async function getData(){
    const responsive= await fetch("https://www.breakingbadapi.com/api/characters");
    const data= await responsive.json();
    for(let i=0; i<data.length; i++){
        document.getElementById("select").innerHTML+=`<option>${data[i].name}</option>`;
       
    }
}
getData();

async function myfun(){
    const responsive= await fetch("https://www.breakingbadapi.com/api/characters");
    const data= await responsive.json();
    let value= document.getElementById("select").value;
    for(let x=0;x<data.length;x++){
        
        if(value==data[x].name){
            document.getElementById("img").src=data[x].img;

        }
    }
}