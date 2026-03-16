// contador de cuenta regresiva

const fechaEvento = new Date("April 11, 2026 20:30:00").getTime();

const contador = setInterval(function(){
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;
    
    if(diferencia < 0){
        clearInterval(contador);
        const contadorElement = document.querySelector(".contador");
        if(contadorElement) {
            contadorElement.innerHTML = "¡La fiesta comenzó!";
        }
        return;
    }
    
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    const diasElement = document.getElementById("dias");
    const horasElement = document.getElementById("horas");
    const minutosElement = document.getElementById("minutos");
    const segundosElement = document.getElementById("segundos");
    
    if(diasElement) diasElement.innerText = String(dias).padStart(2, '0');
    if(horasElement) horasElement.innerText = String(horas).padStart(2, '0');
    if(minutosElement) minutosElement.innerText = String(minutos).padStart(2, '0');
    if(segundosElement) segundosElement.innerText = String(segundos).padStart(2, '0');
    
},1000);