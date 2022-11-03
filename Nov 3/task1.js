let mark = 70;

 if(mark >0 && mark <50) {
    document.write("F");
}
else if(mark >=50 && mark <= 59){
    document.write("D");
}
 else if(mark >= 60 && mark <= 69 ){
    document.write("c");

}
else if(mark >= 70 && mark <=79){
    document.write("B");
}

else if(mark >= 80 && mark <= 89){
    document.write("A");
}
else if(mark >= 90 && mark <= 100){
    document.write("A+");
}
else if (mark < 0 && mark > 100) {

    document.write("outofrange");
}

else {
    document.writeln(None);
}