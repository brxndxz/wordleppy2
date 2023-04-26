let intentos = 6;
//let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const API = "https://random-word-api.herokuapp.com/word?number=1&length=5&lang=es";
//Función asíncrona.
fetch(API).then(response => response.json())
.then(response =>{
    palabra = response[0].toUpperCase()
    console.log(palabra)
})
.catch(err => console.log(err))



//const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click",intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input").value;
    return intento.toUpperCase();
}
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra){
        terminar('<h1>GANASTE</h1>')
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]){
            //Verde
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if(palabra.includes(INTENTO[i])){
            //Amarillo
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else{
            //gris
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--;
    if (intentos == 0){
        terminar('<h1>PERDISTE</h1>')
    }
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    }