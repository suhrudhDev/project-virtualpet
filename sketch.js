//Create variables here
var database;
var dog,happyDog,foodS,foodStock,myDog;

function preload()
{//load images here
  dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  myDog=createSprite(250,250);
  myDog.addImage(dog);
  myDog.scale=0.3;
  
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    if(foodS>0)
    foodS=foodS-1;
    writeStock(foodS)
    myDog.addImage(happyDog);
  }

  drawSprites();

  textSize(25);
  fill(255);
  text("Press up arrow key to feed dog",100,50);
  text("food remaining: "+foodS,180,100);
  //add styles here

}
 function readStock(data){
   foodS=data.val();
 }


 function writeStock(x){

  database.ref('/').update({
    food:x
  })
 }


