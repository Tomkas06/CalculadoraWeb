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
        let divi = b/a;

        if(divi > 1){
            resultado.innerText = "Error de dominio, la division supero el numero 1";    
        }else{
            let radianes = Math.atan(divi);
            let valor = radianes * 180 / Math.PI;
            resultado.innerText = "El resultado es: " + valor.toFixed(3);
        }
    }
}

botonCalcular.addEventListener('click', calculo);