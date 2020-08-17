//Create variables here
var dog,happyDog;
var database,databaseRef;
var foodS,foodStock;
var dogImg,dogImg1;

function preload()
{
  //load images here
  dogImg =loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);

  dog = createSprite(250,250);
  dog.addImage(dogImg);
 // dog.addImage(dogHappy);
  dog.scale=0.1;

}


function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
  dog.scale=0.1;
}

  drawSprites();
  //add styles here
  textSize(12);
  fill("white")
  stroke(2);

  text("Drago loves milk! Press the UP arrow to feed him milk and make him happy!",50,50)
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref("/").update({
  Food:x
})
}
