const inputValor1 = document.getElementById('valor1');
const botonCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function calculo(){
    const a = parseFloat(inputValor1.value);

    if(isNaN(a)){
        resultado.innerText = "No se introdujo ningun valor."; 
    }
    else{
        const valor = 180 - (90 + a);
        resultado.innerText = "El valor del otro angulo es de: " + valor + " grados";   
    }
}

botonCalcular.addEventListener('click', calculo);