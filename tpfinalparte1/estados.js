function draw() {

textFont (miFuente);
  
if(pantallas===0){
  
inicio();

}

if(pantallas===1){

pantalla(0,0);

mensaje(sigR, sigG, sigB, tamSig, 668, 390, "Siguiente");

}
if(pantallas===2){

pantalla(1,1);

mensaje(sigR, sigG, sigB, tamSig, 668, 390, "Siguiente");

}
if(pantallas===3){

pantalla(2,2);

mensaje(sigR, sigG, sigB, 17, 395, 330, "¿Qué hacer ahora?");

mensaje(sigR, sigG, sigB, 17, 262, 400, "Esperar a los tucanes");

mensaje(sigR, sigG, sigB, 17, 536, 400, "Actuar ahora");

}
if(pantallas===4){

pantalla(3,3);

mensaje(sigR, sigG, sigB, tamSig, 640, 375, "Siguiente");

}
if(pantallas===5){

pantalla(4,4);

mensaje(sigR, sigG, sigB, tamSig, 640, 375, "Siguiente");

}
if(pantallas===6){

pantalla(5,5);

mensaje(sigR, sigG, sigB, 17, 395, 337, "¿Qué hacer ahora?");

mensaje(sigR, sigG, sigB, 17, 195, 392, "Seguir con el plan");

mensaje(sigR, sigG, sigB, 17, 595, 392, "Detenerse para descansar");

}
if(pantallas===7){

pantalla(6,6);

mensaje(sigR, sigG, sigB, tamSig, 640, 375, "Siguiente");

}
if(pantallas===8){

pantalla(7,7);

mensaje(sigR, sigG, sigB, tamSig, 640, 375, "Siguiente");

}
if(pantallas===9){

pantalla(8,8);

mensaje(sigR, sigG, sigB, 17, 395, 337, "¿Qué hacer ahora?");

mensaje(sigR, sigG, sigB, 15, 555, 392, "Dejar que las vívoras lo ataquen");

mensaje(sigR, sigG, sigB, 17, 240, 392, "Defender al mensú");

}
if(pantallas===10){

pantalla(9,9);

mensaje(sigR, sigG, sigB, tamSig, 640, 375, "Siguiente");

}
if(pantallas===11){

pantalla(10,10);

mensaje(sigR, sigG, sigB, tamSig, 640, 375, "Siguiente");

}

 fill(255);
  textSize(16);
  text("X: " + mouseX + " Y: " + mouseY, 40, 90);


}
