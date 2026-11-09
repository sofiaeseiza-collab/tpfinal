/* El regreso de Anaconda - Horacio Quiroga
 
 Luego de iniciar su plan, Anaconda decide detenerse por un tiempo para descansar.
 El jugador deberá protegerla de la lluvia desplazando una hoja que funciona como refugio, evitando que las gotas de agua lleguen a ella.
 El objetivo es mantenerla seca durante un tiempo determinado. Si logra protegerla hasta que termine el tiempo, gana, si recibe demasiada lluvia y se despierta, pierde.
 
 */

let imgfondo, imgana, imghoja, imggota;
let juego;
let cantGotas;

function preload () {

  imgfondo = loadImage ("data/fondo.png");
  imgana = loadImage ("data/anaconda.png");
  imghoja = loadImage ("data/hoja.png");
  imggota = loadImage ("data/gota.png");
}


function setup() {

  createCanvas(800, 400);
  cantGotas= 6
    juego= new Principal (imgana, imghoja, imggota, cantGotas);
}


function draw() {

  image (imgfondo, 0, 0, 800, 400);
  juego.dibujar();
  juego.moverHoja();
}
