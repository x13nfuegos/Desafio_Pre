let usuarioPuntaje = 0;
let compuPuntaje = 0;
let cerrarBtn;
const usuarioPuntaje_span = document.getElementById("usuario-puntaje");
const compuPuntaje_span = document.getElementById("compu-puntaje");

const restart = document.getElementById("restart");
const resultado = document.getElementById ("resultado")
const modal = document.querySelector(".modal");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById("tijera");


function getCompuOpciones() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const randomNumber = Math.floor(Math.random() * 3);
  return opciones[randomNumber];
}


function ganaste(usuarioOpciones, compuOpciones) {
  usuarioPuntaje++;
  usuarioPuntaje_span.innerHTML = usuarioPuntaje;
  compuPuntaje_span.innerHTML = compuPuntaje;
  resultado.innerHTML = `<span class="cerrar"></span> <h1 class="texto-ganaste">Ganaste :)</h1> <p>Eleccion Compu <strong>${compuOpciones}</strong></p>`;
  modal.style.display = 'block';
}

function perdiste(usuarioOpciones, compuOpciones){
  compuPuntaje++;
  usuarioPuntaje_span.innerHTML = usuarioPuntaje;
  compuPuntaje_span.innerHTML = compuPuntaje;
  resultado.innerHTML = `<span class="cerrar"></span> <h1 class="texto-perdiste">Perdiste :(</h1> <p>Eleccion Compu <strong>${compuOpciones}</strong></p>`; 
  modal.style.display = 'block'
}

function tabla(usuarioOpciones, compuOpciones){
  usuarioPuntaje_span.innerHTML = usuarioPuntaje;
  compuPuntaje_span.innerHTML = compuPuntaje;
  resultado.innerHTML = `<span class="cerrar"></span> <h1>Empate :=</h1> <p>Eligen los dos <strong>${compuOpciones}</strong></p>`;
  modal.style.display = 'block'
}


function play(usuarioOpciones) {
  const compuOpciones = getCompuOpciones();
  switch (usuarioOpciones + compuOpciones) {
    case 'piedratijera':
    case 'papelpiedra':
    case 'tijerapapel':
      win(usuarioOpciones, compuOpciones);
      break;
    case 'piedrapapel':
    case 'papeltijera':
    case 'tijerapiedra':
      lose(usuarioOpciones, compuOpciones);
      break;
    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijertijera':
      draw(usuarioOpciones, compuOpciones);
  }
}


function main() {
  piedra_div.addEventListener('click', function() {
    play('piedra');
  })
  
  papel_div.addEventListener('click', function() {
    play('papel');
  })
  
  tijera_div.addEventListener('click', function() {
    play('tijera');
  })
}


function limpiarModal(e){
  closeBtn = document.querySelector('.cerrar');

  if(e.target == modal) {
    modal.style.display = "none"
  }
  else if(cerrarBtn){
    cerrarBtn.addEventListener('click', function(){
      modal.style.display = "none"
    });
  }
}


function restartJuego(){
  usuarioPuntaje = 0;
  compuPuntaje = 0;
  usuarioPuntaje_span.innerHTML = usuarioPuntaje;
  compuPuntaje_span.innerHTML = compuPuntaje;
}

restart.addEventListener('click', restartJuego);
window.addEventListener('click', limpiarModal);
main ();