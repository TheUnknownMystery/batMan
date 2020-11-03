const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
var engine, world;
var man;
var drops = []
var maxDrops = 90
function preload() {

    ThunderImg = loadImage(" 1.png ")

}

function setup() {
    createCanvas(500, 700)

    engine = Engine.create();
    world = engine.world;

    man = new Boy(-130, 140, 600, 600);

}
function draw() {
    background(0);

    Engine.update(engine);
    drawSprites();

    ThunderShock();

    for (i = 74; i < maxDrops; i++) {

        drops.push(new rain(random(0, 400), random(0, 400),5))

    }

    for (i = 0; i < drops.length; i++) {

        drops[i].display()

    }

    man.display()
}

function ThunderShock() {

    Thunder = createSprite(100, 100, 600, 600)
    Thunder.scale = 0.6
    Thunder.addImage("thunderImage", ThunderImg);

}




