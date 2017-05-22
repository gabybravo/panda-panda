(function fotosPanda(){
	var pandas = Array.from(document.getElementsByClassName("panda"));
	
	pandas.forEach(function(element){
		element.addEventListener("click", function(){
			this.classList.toggle("no");
		});
	});

	var boton =	document.getElementById("restaurar");
	boton.addEventListener("click", function(el){

		el.preventDefault();

		pandas.forEach(function(e){
			e.classList.remove("no");
		});
	});

})();


/*No logré que al presionar el botón desaparezcan los textos, 
así que esta función replica lo mismo que la primera*/
(function origen(){

	var textOrigen = Array.from(document.getElementsByClassName("parrafos"));

	textOrigen.forEach(function(ele){
		ele.addEventListener("click", function(){
			this.classList.toggle("no");
		})
	});

	var boton2 = document.getElementById("orig");
	boton2.addEventListener("click", function(e){
		e.preventDefault();

		textOrigen.forEach(function(elem){
		elem.classList.remove("no");
	});
});

})();
