window.sr = ScrollReveal();
sr.reveal('.menu',{
     duration: 2000,
     origin: 'left',
     distance: '300px'
});
sr.reveal('#seleccionVehiculo',{
    duration: 2000,
    origin: 'top',
    distance: '300px'
});
sr.reveal('#carousel',{
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('#servicios',{
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('#blog',{
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});

//Smooth scrolling 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});