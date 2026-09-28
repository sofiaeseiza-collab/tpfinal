function draw() {

  
  
if(pantallas==0){
  
inicio();

}

if(pantallas==1){

pantalla1();

};
if(pantallas==2){

pantalla2();

};
if(pantallas==3){

pantalla3();

};

 fill(255);
  textSize(16);
  text("X: " + mouseX + " Y: " + mouseY, 40, 20);


}
