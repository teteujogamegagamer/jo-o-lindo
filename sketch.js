let palavra;

function setup() {
  createCanvas(550, 450);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["João é lindo", "João é baixinho", "João é chatinho"];
  
  return random(palavras);
}

function inicializaCores() {
  background("lightblue");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let texto = palavraParcial(0, width);
    
  text(texto, 275, 225);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20);
