const texto = document.querySelector('#texto');
const valor = document.querySelector('#valor');
const inicialDiv = document.querySelector('#div-inicial');
const divResultado = document.querySelector('#resultado');

function encriptar(){
	inicialDiv.style.display='none';
	divResultado.style.display='block';

	var value = texto.value;
	var encriptar = value.replaceAll('e', 'enter')
	.replaceAll('i', 'imes')
	.replaceAll('a', 'ai')
	.replaceAll('o', 'ober')
	.replaceAll('u', 'ufat');
	valor.value = encriptar;
	
	var minusculas = encriptar.toLowerCase();

	if(encriptar == '' ){
		inicialDiv.style.display='block';
		divResultado.style.display='none';
	}else if (encriptar == minusculas){
		valor.value = encriptar;
	}else{
		valor.value = 'Solo letras minúsculas y sin acento.';
	}
}