const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,330);
    box2 = new Box(900,330);     
    pig1 = new Pig(800,340)
    log1 = new Log(800,300,300,PI/2)
    box3 = new Box(700,260);
    box4 = new Box(900,260);     
    pig2 = new Pig(800,270)
    log2 = new Log(800,240,300,PI/2)
    box5 = new Box(800,180);
    log3 = new Log(740,120,150,4*PI/3)
    log4 = new Log(860,120,150,5*PI/3)
    

    ground = new Ground(600,400,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}