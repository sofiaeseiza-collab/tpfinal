class Principal {

  constructor (imagenA, imagenH, imagenG, cantG) {

    this.ana= new Anaconda (imagenA);
    this.h= new Hoja (imagenH);
    this.cantG= cantG;
    this.gotas=[]
   for (let i=0; i<this.cantG; i++) {
      this.gotas[i]= new Gotas(imagenG);
  }
  }

  dibujar() {

    this.ana.dibujarAna();
    this.h.dibujarHoja();
        for (let i=0; i<this.cantG; i++) {
      this.gotas[i].dibujarGotas();
      this.gotas[i].moverGotas();
        this.gotas[i].reiniciarGotas();
                this.gotas[i].colision(this.h);
    }
  }

  moverHoja() {

    if (keyIsDown(65)) {

      this.h.moverHizq();
    }
    if (keyIsDown(68)) {

      this.h.moverHder();
    }
  }
}
