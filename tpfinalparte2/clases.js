
class Anaconda {

  constructor(imagenA) {

    this.posX= 5;
    this.posY= 250;
    this.tamX= 800;
    this.tamY= 180;
    this.imagen = imagenA;
    this.vel=5
  }

  dibujarAna() {

    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
  }
}

class Hoja {

  constructor(imagenH) {

    this.imagen= imagenH
      this.posX= width/2;
    this.posY= 180;
    this.tamX= 170;
    this.tamY= 80;
    this.vel=7
  }

  dibujarHoja() {

    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
  }

  moverHizq() {

    if (this.posX > 0) {
      this.posX-=this.vel;
    }
  }

  moverHder() {

    if (this.posX < width-this.tamX) {
      this.posX+=this.vel;
    }
  }
}

class Gotas {

  constructor (imagenG) {

    this.imagen= imagenG
      this.posX= random (50, 750);
    this.posY= -100;
    this.tamX= 40;
    this.tamY= 80;
    this.vel=3
    this.caer= random (20, 300);
  }

  dibujarGotas() {

    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
  }
  
  moverGotas(){
  
    
    if(this.caer>0){
    
    this.caer--;
    }
  else {
  this.posY+=this.vel;
  }
  
  }
  
  reiniciarGotas(){
  
  if (this.posY>= 260){
     this.posX= random (50, 750);
    this.posY= -100;
      this.caer= random (20, 300);
  
  }
  
  }
  
  colision (hoja){
  
  if(this.posX< hoja.posX + hoja.tamX && this.posX + this.tamX > hoja.posX && this.posY < hoja.posY + hoja.tamY && this.posY + this.tamY > hoja.posY){
  
      this.posX= random (50, 750);
    this.posY= -100;
      this.caer= random (20, 300);
  
  }
  
  }
  
}
