const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');
const boton6 = document.getElementById('boton6');
const boton7 = document.getElementById('boton7');
const boton8 = document.getElementById('boton8');
const boton9 = document.getElementById('boton9');
const boton10 = document.getElementById('boton10');
const boton11 = document.getElementById('boton11');
const boton12 = document.getElementById('boton12');

const lugares = ["../html/Incognitas/hipo.html", "../html/Incognitas/cateto.html", "../html/Incognitas/angAng.html", "../html/Incognitas/angDosCat.html", "../html/Incognitas/angCatOpHip.html", "../html/Incognitas/angCatAdyHip.html", "../html/Incognitas/catOpAngCatAdy.html", "../html/Incognitas/catOpHipAng.html", "../html/Incognitas/catAdyAngCatOp.html", "../html/Incognitas/catAdyAngHip.html", "../html/Incognitas/hipAngCatAdy.html", "../html/Incognitas/hipAngCatOp.html"];
function ir(path){
    location.href = path;
}

boton1.addEventListener('click', function(){
    ir(lugares[0]);
    console.log("PUTO");
});

boton2.addEventListener('click', function(){
    ir(lugares[1]);
    console.log("PUTO");
});

boton3.addEventListener('click', function(){
    ir(lugares[2]);
    console.log("PUTO");
});

boton4.addEventListener('click', function(){
    ir(lugares[3]);
    console.log("PUTO");
});

boton5.addEventListener('click', function(){
    ir(lugares[4]);
    console.log("PUTO");
});

boton6.addEventListener('click', function(){
    ir(lugares[5]);
    console.log("PUTO");
});

boton7.addEventListener('click', function(){
    ir(lugares[6]);
    console.log("PUTO");
});

boton8.addEventListener('click', function(){
    ir(lugares[7]);
    console.log("PUTO");
});

boton9.addEventListener('click', function(){
    ir(lugares[8]);
    console.log("PUTO");
});

boton10.addEventListener('click', function(){
    ir(lugares[9]);
    console.log("PUTO");
});

boton11.addEventListener('click', function(){
    ir(lugares[10]);
    console.log("PUTO");
});

boton12.addEventListener('click', function(){
    ir(lugares[11]);
    console.log("PUTO");
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky-top', window.scrollY > navbar.offsetHeight);
});