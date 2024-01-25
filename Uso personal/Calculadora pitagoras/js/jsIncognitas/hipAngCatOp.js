const inputValor1 = document.getElementById('valor1');
const inputValor2 = document.getElementById('valor2');
const botonCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function calculo(){
    const a = parseFloat(inputValor1.value);
    const b = parseFloat(inputValor2.value);

    if(isNaN(a) || isNaN(b)){
        resultado.innerText = "No se introdujo ningun valor."; 
    }
    else{
        let radianes = a * Math.PI / 180;
        let grados = Math.sin(radianes);
        let valor = b / grados;

        resultado.innerText = "El resultado es: " + valor.toFixed(3);
    }
}

botonCalcular.addEventListener('click', calculo);