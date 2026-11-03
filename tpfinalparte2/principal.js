class Principal {

  constructor (imagenA, imagenH) {

    this.ana= new Anaconda (imagenA);
    this.h= new Hoja (imagenH);
  }

  dibujar() {

    this.ana.dibujarAna();
    this.h.dibujarHoja();
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
