for(var r = 1;r<=5;r++){
        text = " ";
        for(var b=1;b<=5-r;b++){
            text += "*"; 
        }
    for(var s=1;s<=(2*r-1);s++){
        text += "*";
    }
    console.log(text)
    console.log("\n")
}
