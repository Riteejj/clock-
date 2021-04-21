var hr,mn,sc







function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);
  translate (200,200);
  rotate(-90); 
  hr=hour();
  mn=minute();
  sc=second();

scAngle = map(sc,0,60,0,360);
mnAngle = map(mn,0,60,0,360);
hrAngle = map(hr%12,0,12,0,360);
push();
rotate(scAngle);
stroke("red");
strokeWeight(7);
line(0,0,100,0);
pop()

push();
rotate(mnAngle);
stroke("yellow");
strokeWeight(7);
line(0,0,75,0);
pop()

push();
rotate(hrAngle);
stroke("purple");
strokeWeight(7);
line(0,0,50,0);
pop()

point(0,0)
strokeWeight(10);
noFill();
stroke ("red");
arc(0,0,300,300,0,scAngle)

stroke ("yellow");
arc(0,0,280,280,0,mnAngle)

stroke ("purple");
arc(0,0,260,260,0,hrAngle)



}