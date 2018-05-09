var img1;
var type;
var size;
function preload(){
  img1=loadImage('img1.jpg');
}

function setup() {
  
  createCanvas(700,543);
  background(0);
  size=80;
  type=0;
}

function draw() {
  if(type==0){
    bloodPixels();
  }
  else{
    watchPixels();
  }
}

function bloodPixels(){
  for(var k=0; k<500; k+=1) {
      var x =random(width);
      var y =random(height);
      var c = img1.get(int(x),int(y));
      fill(c,100);
      noStroke();
      ellipse(x,y,10,10);
    }
}
function watchPixels(){
  for(var y=0;y<img1.height;y+=10){
    for(var x=0;x<img1.width;x+=10){
      var c = img1.get(x,y);
      noStroke();
      if( dist(mouseX,mouseY,x+5,y+5)<size){
        fill(c);
        ellipse(x+5,y+5,10,10);
      }
      else {
        fill(red(c));
        ellipse(x+5,y+5,10,10);
      }
    }
  }
}

function mousePressed(){
  if(type ==0){
    type=1;
  }
  else {
    type=0;
  }
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    size+=1;
  }
  else if(keyCode==DOWN_ARROW){
    size-=1;
  }
}