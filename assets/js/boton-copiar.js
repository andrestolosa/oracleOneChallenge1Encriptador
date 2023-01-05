function copiar(){
    const boton = document.querySelector('.boton-copiar');
    const resultado = document.querySelector('#valor').value;

    navigator.clipboard.writeText(resultado)
    boton.classList.add('click');
	boton.innerText = 'Copiado';
    
    setInterval(()=>{
        boton.classList.remove('click')
        boton.innerText = 'Copiar';
    }, 3000);
}
