//tanya rodman
//ex 1 interactive  banner
//Jan 12, 2016
//Des 157 Winter 2016, G. Drew

console.log("reading from js");

    //global variables
    var third=0;
    var second = 0;
    var first = 0;

function setup(){
    var myCanvas = createCanvas(800,250);
    //link to my id mySketch from header tag
    myCanvas.parent('mySketch');
}

function draw(){
    background(51,51,51);
    noStroke();
    colorMode(RGB);
    
    //declare/initialize variables
    var d = 40;
    var x1 = width/4;
    var y1 = height/2;
    var x2 = width/2;
    var y2 = height/2;
    var x3 = 3*width/4;
    var y3 = height/2;
    
    //------------------------------CLICK = CHANGE---------------------------//
    ///*
    if (mouseIsPressed && mouseX>x1-d/2 && mouseX<x1+d/2 && mouseY>y1-d/2 && mouseY<y1+d/2 ){
     if(first == 0){first = 1;}
        else{first = 0;}
    }else{fill(255,255,255);}
    if(first == 1){fill(0,88,110);}
    drawEllipse(x1, y1, d);
    
    if (mouseIsPressed && mouseX>x2-d/2 && mouseX<x2+d/2 && mouseY>y2-d/2 && mouseY<y2+d/2 ){  
    if(second == 0){second = 1;}
        else{second = 0;}
    }else{fill(255,255,255);}
    if(second == 1){fill(0,153,191);}
    drawEllipse(x2, y2, d);
    
    if (mouseIsPressed && mouseX>x3-d/2 && mouseX<x3+d/2 && mouseY>y3-d/2 && mouseY<y3+d/2 ){
        if(third == 0){third = 1;}
        else{third = 0;}
    }else{fill(255,255,255);}
    if(third == 1){fill(0,204,255);}
    drawEllipse(x3, y3, d);
    //*/
    
    //------------------------------JUST HOVER---------------------------//
    /*
    if (mouseX>x1-d/2 && mouseX<x1+d/2 && mouseY>y1-d/2 && mouseY<y1+d/2 ){
        fill(0,88,110);
    }else{fill(255,255,255);}
    drawEllipse(x1, y1, d);
    
    if (mouseX>x2-d/2 && mouseX<x2+d/2 && mouseY>y2-d/2 && mouseY<y2+d/2 ){
        fill(0,153,191);
    }else{fill(255,255,255);}
    drawEllipse(x2, y2, d);
    
    if (mouseX>x3-d/2 && mouseX<x3+d/2 && mouseY>y3-d/2 && mouseY<y3+d/2 ){
        fill(0,204,255);
    }else{fill(255,255,255);}
    drawEllipse(x3, y3, d);
    */
}//end draw
    

function drawEllipse(x,y,d){
    ellipse(x,y,d,d);
}
     



