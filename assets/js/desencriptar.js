function desencriptar(){
	inicialDiv.style.display='none';
	divResultado.style.display='block';

	var value = texto.value;
	var desencriptar = value.replaceAll('enter', 'e')
	.replaceAll('imes', 'i')
	.replaceAll('ai', 'a')
	.replaceAll('ober', 'o')
	.replaceAll('ufat', 'u');
	valor.value = desencriptar;

	var minusculas = desencriptar.toLowerCase();

	if(desencriptar == ''){
		inicialDiv.style.display='block';
		divResultado.style.display='none';
	}else if(desencriptar == minusculas){
		valor.value = desencriptar;
	}else{
		valor.value = 'Solo letras minúsculas y sin acento.';
	}
}