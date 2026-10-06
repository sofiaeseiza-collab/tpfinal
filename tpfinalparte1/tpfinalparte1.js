let imagenes = [];
let texto = [];
let posXbotI, posYbotI, tamXbotI, tamYbotI, posXbot1, posYbot1, tamXbot1, tamYbot1, posXbot2, posYbot2, tamXbot2, tamYbot2, posXbot3, posYbot3, tamXbot3, tamYbot3, posXbot4, posYbot4, tamXbot4, tamYbot4, posXbot5, posYbot5;
let pantallas=0
  let miFuente
  let tamSig, sigR, sigG, sigB, desR, desG, desB;
  let decision1=0;

function preload() {



  for (let i = 0; i < 10; i++) {

    imagenes[i]= loadImage ("data/img"+i+".jpeg")
  }

  for (let i = 0; i < 10; i++) {
    texto[i] = loadStrings("data/texto/P" + i+ ".txt");
  }

  miFuente = loadFont("data/LibreBaskerville-Regular.ttf");
}

function setup() {
  createCanvas(800, 450);

  tamSig=30
    sigR=44;
  sigG=38;
  sigB=17;
  desR=255;
  desG=255;
  desB=255;

  posXbotI=350;
  posYbotI=200;
  tamXbotI= 50;
  tamYbotI=50;

  posXbot1=560;
  posYbot1=365;
  tamXbot1= 210;
  tamYbot1=60;

  posXbot2=144;
  posYbot2=376;
  tamXbot2=234;
  tamYbot2=45;

  posXbot3=477;
  posYbot3=376;
  tamXbot3=234;
  tamYbot3=45;
  
   posXbot4=53;
  posYbot4=375;
  tamXbot4=234;
  tamYbot4=45;
  
  posXbot5=443;
  posYbot5=375;
}


function inicio() {

  background (0);
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("El regreso de Anaconda", 400, 100);

  rect (posXbotI, posYbotI, tamXbotI, tamYbotI);
}

function pantalla(numImg, numTxt) {

  image (imagenes[numImg], 0, 0, 800, 450);
  fill(0, 0, 0, 150);
  rect(0, 0, 800, 100);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(17);
  textFont (miFuente);
  text (texto[numTxt], 50, 0, 700, 100);
}

function mensaje (R, G, B, tamTxt, posX, posY, texto) {

  textAlign(CENTER);
  fill(R, G, B);
  textSize(tamTxt);
  text(texto, posX, posY);
}

function mousePressed () {

  if (pantallas===0) {

    if (detectarBoton(posXbotI, posYbotI, tamXbotI, tamYbotI)) {

      pantallas=1;
    }
  } else if (pantallas===1) {


    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=2;
    }
  } else if (pantallas===2) {


    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=3;
    }
  } else if (pantallas===3) {

    if (detectarBoton(posXbot2, posYbot2, tamXbot2, tamYbot2)) {

      pantallas=4;
    } else  if (detectarBoton(posXbot3, posYbot3, tamXbot3, tamYbot3)) {

      pantallas=5;
    }
  } else if (pantallas===4) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=5;
    }
  }else if (pantallas===5) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=6;
    }
  } else if (pantallas===6) {

    if (detectarBoton(posXbot4, posYbot4, tamXbot4, tamYbot4)) {

      pantallas=8;
    } else  if (detectarBoton(posXbot5, posYbot5, tamXbot4, tamYbot4)) {

      pantallas=7;
    }
  }else if (pantallas===7) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=8;
    }
  }else if (pantallas===8) {

    if (detectarBoton(posXbot1, posYbot1, tamXbot1, tamYbot1)) {

      pantallas=9;
    }
  }else if (pantallas===9) {

    if (detectarBoton(posXbot4, posYbot4, tamXbot4, tamYbot4)) {

      pantallas=11;
      decision1=2;
    }else  if (detectarBoton(posXbot5, posYbot5, tamXbot4, tamYbot4)) {

      pantallas=10;
      decision1=1;
    }
  }
}

function detectarBoton (posX, posY, tamX, tamY) {

  if (mouseX>posX && mouseX<posX+tamX && mouseY>posY && mouseY<posY+tamY) {

    return true
  }
}
