
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World
const Constraint = Matter.Constraint
var a;
var circles=[];
var base1, base2;
var stone, stone2, stone3, stone4, stone5, stone6, stone7, stone8, stone9, stone10;
var stone11, stone12, stone13, stone14, stone15, stone16;
function setup() {
  createCanvas(800,800);
  stroke(255);
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  //base1 = new Ground(400, 400, 200, 30); 
  stone = new Box(400, 400, 20, 40);
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20);
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2);
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
 //base1.display();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 