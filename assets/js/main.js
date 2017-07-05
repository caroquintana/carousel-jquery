$(document).ready(function() {
	
	//Variables on page load 
	var miCarrusel = $('#principal-carrusel');
	var	primeraAnimacion = miCarrusel.find('.item:first').find();
		
	//Inicializar carrusel 
	miCarrusel.carousel();

	//Pausar carrusel  
	miCarrusel.carousel('pause');

	//Para animar las otras imágenes 
	miCarrusel.on('slide.bs.carousel', function (e) {
		var otroelementos = $(e.relatedTarget).find();
	});

    $('#principal-carrusel').carousel({
        interval:5000,
        pause: "false"
    });

});

