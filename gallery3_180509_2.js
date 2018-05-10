var img1;
var size;

function preload(){
  img1=loadImage("img1.jpg");
}

function setup() {
  createCanvas(700,543);
  size=80;
  background(0);
  img1.loadPixels();
}

function draw() {
  noStroke();
  for(var y=0;y<img1.height;y+=10){
    for(var x=0;x<img1.width;x+=10){
      var loc = (x+y*img1.width)*4;
      fill(img1.pixels[loc],img1.pixels[loc],img1.pixels[loc]);
      ellipse(x+5,y+5,10,10);
      if(dist(mouseX,mouseY,x+5,y+5)<size){
        fill(img1.pixels[loc],img1.pixels[loc+1],img1.pixels[loc+2]);
        ellipse(x+5,y+5,10,10);
      }
    }
  }
}


function keyPressed(){
  if(keyCode==UP_ARROW){
    size+=1;
  }
  else if(keyCode==DOWN_ARROW){
    size-=1;
  }
  else if(key=='a'){
    size=80;
  }
}
