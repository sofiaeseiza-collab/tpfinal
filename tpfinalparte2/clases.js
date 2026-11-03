
class Anaconda {

  constructor(imagenA) {

    this.posX= 5;
    this.posY= 250;
    this.tamX= 790;
    this.tamY= 170;
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
    this.posY= 150;
    this.tamX= 200;
    this.tamY= 110;
  }

  dibujarHoja() {

    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
  }

  moverHizq() {

    if (this.posX > 0) {
      this.posX-=5;
    }
  }

  moverHder() {

    if (this.posX < width-this.tamX) {
      this.posX+=5;
    }
  }
}
