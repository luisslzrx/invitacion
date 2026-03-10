// desaparecer video después de 15 segundos

/*
setTimeout(() => {

const intro = document.getElementById("video-intro");

intro.classList.add("ocultar");

}, 15000);


// música de fondo

const music = document.getElementById("bg-music");

// volumen al 75%
music.volume = 0.75;


// intentar reproducir automáticamente (compatibilidad móvil)

document.addEventListener("click", () => {

if (music.paused) {
    music.play();
}

}, { once: true });

*/



const fechaEvento = new Date("April 11, 2026 20:30:00").getTime();

const contador = setInterval(function(){

const ahora = new Date().getTime();

const diferencia = fechaEvento - ahora;

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);


document.getElementById("dias").innerText = dias;
document.getElementById("horas").innerText = horas;
document.getElementById("minutos").innerText = minutos;
document.getElementById("segundos").innerText = segundos;


if(diferencia < 0){

clearInterval(contador);

document.querySelector(".contador").innerHTML = "¡La fiesta comenzó!";

}

},1000);