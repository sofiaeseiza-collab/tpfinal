let imagenes = [];
let texto = [];
let posXbotI, posYbotI, tamXbotI, tamYbotI, posXbot1, posYbot1, tamXbot1, tamYbot1;
let pantallas=0

function preload(){


  
  for (let i = 0; i < 3; i++){

imagenes[i]= loadImage ("data/img"+i+".jpeg")

}

  for (let i = 0; i < 10; i++) {
    texto[i] = loadStrings("data/texto/P" + i+ ".txt");
}
};

function setup() {
  
createCanvas(800, 450);

posXbotI=350;
posYbotI=200;
tamXbotI= 50;
tamYbotI=50;
posXbot1=560;
posYbot1=365;
tamXbot1= 210;
tamYbot1=60;
}


function inicio(){

 background (0);
 textAlign(CENTER);
 fill(255);
 textSize(20);
 text("El regreso de Anaconda", 400, 100);

 rect (posXbotI,posYbotI,tamXbotI,tamYbotI);
 


};


function pantalla1 (){

 image (imagenes[0], 0,0,800,450);
 textAlign(CENTER);
 fill(255);
 textSize(17);
 text (texto[1], 50,30, 700,700);
 

};

function pantalla2(){

image (imagenes[1], 0,0,800,450);
 textAlign(CENTER);
 fill(255);
 textSize(17);
 text (texto[2], 50,30, 700,700);
 

};

function pantalla3(){

image (imagenes[2], 0,0,800,450);
 textAlign(CENTER);
 fill(255);
 textSize(16);
 text (texto[3], 50,20, 700,700);



};

function mousePressed (){

if(pantallas==0){

  if (detectarBoton(posXbotI,posYbotI,tamXbotI,tamYbotI)){
 
 pantallas=1;
 
 };

}

else if(pantallas==1){

  if (detectarBoton(posXbot1,posYbot1,tamXbot1,tamYbot1)){
 
 pantallas=2;
 
 };

}

else if(pantallas==2){

  if (detectarBoton(posXbot1,posYbot1,tamXbot1,tamYbot1)){
 
 pantallas=3;
 
 };

}



};

function detectarBoton (posX, posY, tamX, tamY){

if (mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY){

return true

};

};
