var wall1;
var Player;
var pirate1,pirate2,pirate3,pirate4,pirate5,pirate6,pirate7,pirate8
function setup() {
  createCanvas(1500,850);

  wall1 = createSprite(0,425,20,850);
  wall2 = createSprite(1500,425,20,850);

  Player= createSprite(15,30,20,20);
  
  pirate1 = new Pirate(800,500);
  

  pirate2=new Pirate(600,300);

  pirate3=new Pirate(400,250);

  pirate4=new Pirate(765,560);

  pirate5=new Pirate(700,400);

  pirate6=new Pirate(654,567);
  
  pirate7=new Pirate(321,);
  
  




  wall3= createSprite(750,0,1500,20);
  wall4= createSprite(750,1500,1500,20);

  var cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
  var cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
  var cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
  var cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
  var cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
  var cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
  var cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
  var cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
  var cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
  var cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
  var cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
  var cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
  var cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
  var cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
  var cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
  var cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
  var cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
  var cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
  var cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
  var cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
  var cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";
  var cardboard22 = createSprite(330,370,20,100);
   cardboard22.shapeColor = "brown";




  var cardboard23 = createSprite(410,70,100,20);
   cardboard23.shapeColor = "brown";
  var cardboard24 = createSprite(500,50,20,100);
  cardboard24.shapeColor = "brown";
  var cardboard25 = createSprite(480,130,100,20);
  cardboard25.shapeColor = "brown";
  var cardboard26 = createSprite(450,250,20,100);
  cardboard26.shapeColor = "brown";
  var cardboard27 = createSprite(530,210,100,20);
   cardboard27.shapeColor = "brown";
  var cardboard28 = createSprite(410,250,100,20);
   cardboard28.shapeColor = "brown";
  var cardboard29 = createSprite(560,120,20,100);
   cardboard29.shapeColor = "brown";
  var cardboard30 = createSprite(550,20,100,20);
   cardboard30.shapeColor = "brown";
  var cardboard31 = createSprite(650,70,20,100);
   cardboard31.shapeColor = "brown";
  var cardboard32 = createSprite(670,150,100,20);
   cardboard32.shapeColor = "brown";
  var cardboard33 = createSprite(730,50,100,20);
   cardboard33.shapeColor = "brown";
  var cardboard34 = createSprite(740,125,20,100);
   cardboard34.shapeColor = "brown";
  var cardboard35 = createSprite(820,250,20,100);
   cardboard35.shapeColor = "brown";
  var cardboard35 = createSprite(730,210,150,20);
   cardboard35.shapeColor = "brown";
  var cardboard36 = createSprite(500,300,20,100);
   cardboard36.shapeColor = "brown";
  var cardboard37 = createSprite(580,310,100,20);
   cardboard37.shapeColor = "brown";
  var cardboard38 = createSprite(430,352,20,100);
   cardboard38.shapeColor = "brown";
  var cardboard39 = createSprite(575,352,20,100);
   cardboard39.shapeColor = "brown";
  var cardboard40 = createSprite(680,290,20,100);
   cardboard40.shapeColor = "brown";
  var cardboard41 = createSprite(750,270,120,20);
   cardboard41.shapeColor = "brown";
  var cardboard42 = createSprite(650,390,100,20);
   cardboard42.shapeColor = "brown";
  var cardboard43 = createSprite(730,370,20,100);
   cardboard43.shapeColor = "brown";


   var cardboard44 = createSprite(810,70,100,20);
   cardboard44.shapeColor = "brown";
  var cardboard45 = createSprite(900,50,20,100);
  cardboard45.shapeColor = "brown";
  var cardboard46 = createSprite(880,130,100,20);
  cardboard46.shapeColor = "brown";
  var cardboard47 = createSprite(850,250,20,100);
  cardboard47.shapeColor = "brown";
  var cardboard48 = createSprite(930,210,100,20);
   cardboard48.shapeColor = "brown";
  var cardboard49 = createSprite(810,250,100,20);
   cardboard49.shapeColor = "brown";
  var cardboard50 = createSprite(960,120,20,100);
   cardboard50.shapeColor = "brown";
  var cardboard51 = createSprite(950,20,100,20);
   cardboard51.shapeColor = "brown";
  var cardboard52 = createSprite(1050,70,20,100);
   cardboard52.shapeColor = "brown";
  var cardboard53 = createSprite(1070,150,100,20);
   cardboard53.shapeColor = "brown";
  var cardboard54 = createSprite(1130,50,100,20);
   cardboard54.shapeColor = "brown";
  var cardboard55 = createSprite(1140,125,20,100);
   cardboard55.shapeColor = "brown";
  var cardboard56= createSprite(1220,250,20,100);
   cardboard56.shapeColor = "brown";
  var cardboard57 = createSprite(1130,210,150,20);
   cardboard57.shapeColor = "brown";
  var cardboard59 = createSprite(900,300,20,100);
   cardboard36.shapeColor = "brown";
  var cardboard = createSprite(980,310,100,20);
   cardboard37.shapeColor = "brown";
  var cardboard61 = createSprite(830,352,20,100);
   cardboard38.shapeColor = "brown";
  var cardboard62 = createSprite(975,352,20,100);
   cardboard39.shapeColor = "brown";
  var cardboard63 = createSprite(1080,290,20,100);
   cardboard40.shapeColor = "brown";
  var cardboard63 = createSprite(1150,270,120,20);
   cardboard41.shapeColor = "brown";
  var cardboard64 = createSprite(1050,390,100,20);
   cardboard42.shapeColor = "brown";
  var cardboard65 = createSprite(1130,370,20,100);
   cardboard43.shapeColor = "brown";



   var cardboard66 = createSprite(1210,70,100,20);
  var cardboard67 = createSprite(1300,50,20,100);
  
  var cardboard68 = createSprite(1280,130,100,20);
  
  var cardboard69 = createSprite(1250,250,20,100);
  
  var cardboard70 = createSprite(1330,210,100,20);
   
  var cardboard71 = createSprite(1210,250,100,20);
   
  var cardboard72 = createSprite(1360,120,20,100);
   
  var cardboard73 = createSprite(1350,20,100,20);
   
  var cardboard74 = createSprite(1450,70,20,100);
   
  var cardboard75 = createSprite(1470,150,100,20);
   
  var cardboard80 = createSprite(1300,300,20,100);
   
  var cardboard81 = createSprite(1380,310,100,20);
   
  var cardboard82= createSprite(1230,352,20,100);
   
  var cardboard83 = createSprite(1375,352,20,100);
   
  var cardboard84 = createSprite(1480,290,20,100);
   
  var cardboard86 = createSprite(1450,390,100,20);



  var cardboard1 = createSprite(10,470,100,20);
   cardboard1.shapeColor = "brown";
  var cardboard2 = createSprite(100,450,20,100);
  cardboard2.shapeColor = "brown";
  var cardboard3 = createSprite(80,530,100,20);
  cardboard3.shapeColor = "brown";
  var cardboard4 = createSprite(50,650,20,100);
  cardboard4.shapeColor = "brown";
  var cardboard5 = createSprite(130,610,100,20);
   cardboard5.shapeColor = "brown";
  var cardboard6 = createSprite(10,650,100,20);
   cardboard6.shapeColor = "brown";
  var cardboard7 = createSprite(160,520,20,100);
   cardboard7.shapeColor = "brown";
  var cardboard8 = createSprite(150,420,100,20);
   cardboard8.shapeColor = "brown";
  var cardboard9 = createSprite(250,770,20,100);
   cardboard9.shapeColor = "brown";
  var cardboard10 = createSprite(270,550,100,20);
   cardboard10.shapeColor = "brown";
  var cardboard11 = createSprite(330,450,100,20);
   cardboard11.shapeColor = "brown";
  var cardboard12 = createSprite(340,525,20,100);
   cardboard12.shapeColor = "brown";
  var cardboard13 = createSprite(220,650,20,100);
   cardboard13.shapeColor = "brown";
  var cardboard14 = createSprite(330,610,150,20);
   cardboard14.shapeColor = "brown";
  var cardboard15 = createSprite(100,750,20,100);
   cardboard15.shapeColor = "brown";
  var cardboard16 = createSprite(180,760,100,20);
   cardboard16.shapeColor = "brown";
  var cardboard17 = createSprite(30,752,20,150);
   cardboard17.shapeColor = "brown";
  var cardboard18 = createSprite(175,752,20,100);
   cardboard18.shapeColor = "brown";
  var cardboard19 = createSprite(280,790,20,170);
   cardboard19.shapeColor = "brown";
  var cardboard20 = createSprite(350,670,120,20);
   cardboard20.shapeColor = "brown";
  var cardboard21 = createSprite(250,790,100,20);
   cardboard21.shapeColor = "brown";
  var cardboard22 = createSprite(330,770,20,100);
   cardboard22.shapeColor = "brown";




  var cardboard23 = createSprite(410,470,100,20);
   cardboard23.shapeColor = "brown";
  var cardboard24 = createSprite(500,450,20,100);
  cardboard24.shapeColor = "brown";
  var cardboard25 = createSprite(480,530,100,20);
  cardboard25.shapeColor = "brown";
  var cardboard26 = createSprite(450,650,20,100);
  cardboard26.shapeColor = "brown";
  var cardboard27 = createSprite(530,610,100,20);
   cardboard27.shapeColor = "brown";
  var cardboard28 = createSprite(410,450,100,20);
   cardboard28.shapeColor = "brown";
  var cardboard29 = createSprite(560,520,20,100);
   cardboard29.shapeColor = "brown";
  var cardboard30 = createSprite(550,420,100,20);
   cardboard30.shapeColor = "brown";
  var cardboard31 = createSprite(650,470,20,100);
   cardboard31.shapeColor = "brown";
  var cardboard32 = createSprite(670,550,100,20);
   cardboard32.shapeColor = "brown";
  var cardboard33 = createSprite(730,450,100,20);
   cardboard33.shapeColor = "brown";
  var cardboard34 = createSprite(740,525,20,100);
   cardboard34.shapeColor = "brown";
  var cardboard35 = createSprite(820,650,20,100);
   cardboard35.shapeColor = "brown";
  var cardboard35 = createSprite(730,610,150,20);
   cardboard35.shapeColor = "brown";
  var cardboard36 = createSprite(500,700,20,100);
   cardboard36.shapeColor = "brown";
  var cardboard37 = createSprite(580,710,100,20);
   cardboard37.shapeColor = "brown";
  var cardboard38 = createSprite(430,752,20,100);
   cardboard38.shapeColor = "brown";
  var cardboard39 = createSprite(575,752,20,100);
   cardboard39.shapeColor = "brown";
  var cardboard40 = createSprite(680,690,20,100);
   cardboard40.shapeColor = "brown";
  var cardboard41 = createSprite(750,670,120,20);
   cardboard41.shapeColor = "brown";
  var cardboard42 = createSprite(650,790,100,20);
   cardboard42.shapeColor = "brown";
  var cardboard43 = createSprite(730,770,20,100);
   cardboard43.shapeColor = "brown";


   var cardboard44 = createSprite(810,470,100,20);
   cardboard44.shapeColor = "brown";
  var cardboard45 = createSprite(900,450,20,100);
  cardboard45.shapeColor = "brown";
  var cardboard46 = createSprite(880,530,100,20);
  cardboard46.shapeColor = "brown";
  var cardboard47 = createSprite(850,650,20,100);
  cardboard47.shapeColor = "brown";
  var cardboard48 = createSprite(930,610,100,20);
   cardboard48.shapeColor = "brown";
  var cardboard49 = createSprite(810,650,100,20);
   cardboard49.shapeColor = "brown";
  var cardboard50 = createSprite(960,520,20,100);
   cardboard50.shapeColor = "brown";
  var cardboard51 = createSprite(950,420,100,20);
   cardboard51.shapeColor = "brown";
  var cardboard52 = createSprite(1050,470,20,100);
   cardboard52.shapeColor = "brown";
  var cardboard53 = createSprite(1070,550,100,20);
   cardboard53.shapeColor = "brown";
  var cardboard54 = createSprite(1130,450,100,20);
   cardboard54.shapeColor = "brown";
  var cardboard55 = createSprite(1140,525,20,100);
   cardboard55.shapeColor = "brown";
  var cardboard56= createSprite(1220,650,20,100);
   cardboard56.shapeColor = "brown";
  var cardboard57 = createSprite(1130,610,150,20);
   cardboard57.shapeColor = "brown";
  var cardboard59 = createSprite(900,700,20,100);
   cardboard36.shapeColor = "brown";
  var cardboard = createSprite(980,710,100,20);
   cardboard37.shapeColor = "brown";
  var cardboard61 = createSprite(830,752,20,100);
   cardboard38.shapeColor = "brown";
  var cardboard62 = createSprite(975,752,20,100);
   cardboard39.shapeColor = "brown";
  var cardboard63 = createSprite(1080,690,20,100);
   cardboard40.shapeColor = "brown";
  var cardboard63 = createSprite(1150,670,120,20);
   cardboard41.shapeColor = "brown";
  var cardboard64 = createSprite(1050,790,100,20);
   cardboard42.shapeColor = "brown";
  var cardboard65 = createSprite(1130,770,20,100);
   cardboard43.shapeColor = "brown";



   var cardboard66 = createSprite(1210,470,100,20);
  var cardboard67 = createSprite(1300,450,20,100);
  
  var cardboard68 = createSprite(1280,530,100,20);
  
  var cardboard69 = createSprite(1250,650,20,100);
  
  var cardboard70 = createSprite(1330,410,100,20);
   
  var cardboard71 = createSprite(1210,650,100,20);
   
  var cardboard72 = createSprite(1360,520,20,100);
   
  var cardboard73 = createSprite(1350,420,100,20);
   
  var cardboard74 = createSprite(1450,570,20,100);
   
  var cardboard75 = createSprite(1470,550,100,20);
   
  var cardboard80 = createSprite(1300,700,20,100);
   
  var cardboard81 = createSprite(1380,710,100,20);
   
  var cardboard82= createSprite(1230,752,20,100);
   
  var cardboard83 = createSprite(1375,752,20,100);
   
  var cardboard84 = createSprite(1480,790,20,100);
   
  var cardboard86 = createSprite(1450,790,100,20);


  
}

function draw() {
  background(255,255,255); 

  if(keyDown("UP_ARROW")){
    Player.y = Player.y -3;
  }

    if( keyDown("DOWN_ARROW")){
      Player.y=Player.y+3;
    }
  
      if(keyDown("LEFT_ARROW")){
         Player.x=player.x-3;
      }
  
    if(keyDown("RIGHT_ARROW")){
       Player.x=Player.x+3;
    }

  drawSprites();
}