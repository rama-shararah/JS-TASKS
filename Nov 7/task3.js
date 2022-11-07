let myArray=["rama","shahd","aram","ahmad","ali"]
let shortest= 10;
let value;
function shorterInArray(arr){
    for (var x = 0; x < arr.length; x++){
       let length= arr[x].length;

       if (length<shortest){
        shortest = length;
        value = arr[x];
    }


    }
document.write(value);

}
shorterInArray(myArray);