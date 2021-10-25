var bgSprite;
function preload(){
    bgAnimation = loadAnimation("images/bgnew1.jpg","images/bgnew2.jpg","images/bgnew3.jpg");
}

function setup(){
    createCanvas(1000, 600);
    bg   = createSprite(300,300,300,300);
    bg.addAnimation("bg",bgAnimation);
    bg.scale = 0.4;
    bg.velocityX = -4;
}

function draw(){
    drawSprites();
}