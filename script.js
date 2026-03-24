// función para revelar la invitación
function revelarInvitacion() {
    // Ocultar pantalla de inicio
    const pantallaInicio = document.getElementById('pantalla-inicio');
    pantallaInicio.style.opacity = '0';
    pantallaInicio.style.visibility = 'hidden';
    
    // Reproducir música de fondo
    const music = document.getElementById("bg-music");
    music.volume = 0.75;
    music.play().catch(e => console.log("Autoplay bloqueado, esperando interacción"));
    
    // Mostrar y reproducir video
    setTimeout(() => {
        const videoIntro = document.getElementById("video-intro");
        videoIntro.style.display = 'block';
        
        const video = document.querySelector('#video-intro video');
        video.play().catch(e => console.log("Error al reproducir video"));
        
        // Cuando el video termine, ocultarlo y mostrar animaciones
        video.addEventListener('ended', function() {
            videoIntro.classList.add("ocultar");
            
            // Pequeño delay para que la transición sea suave
            setTimeout(() => {
                // Agregar clase para iniciar animaciones
                document.body.classList.add('animaciones-activas');
                
                // Ejecutar animaciones al cargar si ya son visibles
                handleScrollAnimation();
                handleSection3Animation();
                handleSection4Animation();
            }, 500);
        });
    }, 300); // Pequeña transición
}

// música de fondo (ya se maneja en la función revelarInvitacion)

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

// Animación al hacer scroll
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.rsvp-section > *:not(.planta-top-left):not(.planta-top-right)');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Animación para sección 3
function handleSection3Animation() {
    const elements = document.querySelectorAll('.save-date > *');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
        }
    });
}

// Animación para sección 4
function handleSection4Animation() {
    const elements = document.querySelectorAll('.dresscode-section > *');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0) rotate(0deg)';
        }
    });
}

// Inicializar elementos para animación (pero no iniciar hasta que termine el video)
document.addEventListener('DOMContentLoaded', function() {
    const rsvpElements = document.querySelectorAll('.rsvp-section > *:not(.planta-top-left):not(.planta-top-right)');
    
    rsvpElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    });
    
    // Animación para sección 3
    const section3Elements = document.querySelectorAll('.save-date > *');
    
    section3Elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) scale(0.9)';
        element.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    });
    
    // Animación para sección 4
    const section4Elements = document.querySelectorAll('.dresscode-section > *');
    
    section4Elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px) rotate(-5deg)';
        element.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    });
    
    // NO ejecutar animaciones al cargar - esperar a que termine el video
    
    // Ejecutar animación al hacer scroll (solo si las animaciones están activas)
    window.addEventListener('scroll', function() {
        if (document.body.classList.contains('animaciones-activas')) {
            handleScrollAnimation();
            handleSection3Animation();
            handleSection4Animation();
        }
    });
});