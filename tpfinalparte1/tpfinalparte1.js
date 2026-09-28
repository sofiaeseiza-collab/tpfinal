let imagenes = [];
let texto = [];

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

}


function draw() {
  
  background (0);

pantalla1();
}

function pantalla1 (){

  
 image (imagenes[0], 0,0,800,450);
 textAlign(CENTER);
 fill(255);
 textSize(15);
text (texto[1], 50,30, 700,700);
};
