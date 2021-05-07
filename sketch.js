const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ground1;
var ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,bo17,box18;
var box19,box20,box21,box22,box23,box24,box25,box26,box27;
var box28,box29;
var box30,box31,box32,box33,box34,box35,box36,box37,box38;
var box39;
var polygon;
var sling;

function setup(){

    createCanvas(1500,600);

    engine = Engine.create();
    world = engine.world;

 ground=new Ground(750,590,1500,20);
 ground1 = new Ground(300,400,280,10);
ground2 = new Ground(650,300,150,10);

   polygon = new Polygon(50,50);

   sling = new Slingshot(polygon.body,{x:50,y:50});


   box2 = new Box(220,390,30,50);
   box3 = new Box(240,390,30,50);
   box4 = new Box(260,390,30,50);
   box5 = new Box(280,390,30,50);
   box6 = new Box(300,390,30,50);
   box7 = new Box(320,390,30,50);
   box8 = new Box(340,390,30,50);
   box9 = new Box(360,390,30,50);
   box10 = new Box(380,390,30,50);

//second level
   box11 = new Box(210,350,30,50);
   box12 = new Box(250,350,30,50);
   box13 = new Box(270,350,30,50); 
   box14 = new Box(290,350,30,50);
   box15 = new Box(310,350,30,50);
   box16 = new Box(330,350,30,50);
   box17 = new Box(350,350,30,50);
   box18 = new Box(370,350,30,50);

   //third level
   box19 = new Box(255,300,30,50);
   box20 = new Box(285,300,30,50);
   box21 = new Box(290,300,30,50);
   box22 = new Box(320,300,30,50);
   box23 = new Box(340,300,30,50);

   //fourth level
   box24 = new Box(270,250,30,50);
   box25 = new Box(300,250,30,50);
   box26 = new Box(330,250,30,50);

   //fifth level
   box27 = new Box(280,200,30,50);
   box28 = new Box(310,200,30,50);

   //sixth level
   box29 = new Box(295,150,30,50);


   //first level
   box30 = new Box(610,290,30,50);
   box31 = new Box(630,290,30,50);
   box32 = new Box(660,290,30,50);
   box33 = new Box(680,290,30,50);

   //second level
   box34 = new Box(620,250,30,50);
   box35 = new Box(650,250,30,50);
   box36 = new Box(670,250,30,50);

   //third level
   box37 = new Box(635,200,30,50);
   box38 = new Box(663,200,30,50);

   //fourth level
   box39 = new Box(660,150,30,50);
}

function draw(){
background(60,46,46);
Engine.update(engine);

    ground.display();
    ground1.display();
    ground2.display();

   fill("lightblue")
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
 //  fill("blue");
   //second level
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   //third level
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box23.display();
   //fourth level
   box24.display();
   box25.display();
   box26.display();
   //fifth level
   box27.display();
   box28.display();
   //sixth level
   box29.display();

   //first level
   box30.display();
   box31.display();
   box32.display();
   box33.display();
   //second level
   box34.display();
   box35.display();
   box36.display();
   //third level
   box37.display();
   box38.display();
   //fourth level
   box39.display();

   polygon.display();

   sling.display();
   polygon.debug=true;
}
function mouseDragged(){
   Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   sling.fly();
}
/*function keyPressed(){
   if (keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x:200,y:50});
      sling.attach(polygon.body);
   }
}*/