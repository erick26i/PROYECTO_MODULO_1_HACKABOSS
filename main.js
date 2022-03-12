import { preguntas } from "/preguntas.js";

/// seleccion de botones y titulo
const titulo = document.querySelector("h2")
const boton1 = document.querySelector("#btn1")
const boton2 = document.querySelector("#btn2")
const boton3 = document.querySelector("#btn3")
const boton4 = document.querySelector("#btn4")
let correcta;
let contador;
//let j;
let botonAtt1;
let botonAtt2;
let botonAtt3;
let botonAtt4;

///Funcion para cambio de preguntas y respuestas
function vueltas (vuelta){
    for(let i = 0 ; i < vuelta ; i++){
    
    /// Introducimos datos en el DOM
    titulo.textContent = preguntas[i].question
    boton1.textContent = preguntas[i].answers[0]
    boton2.textContent = preguntas[i].answers[1]
    boton3.textContent = preguntas[i].answers[2]
    boton4.textContent = preguntas[i].answers[3] 
    
    /// Introducimos atributos a los botones
    boton1.setAttribute("name", preguntas[i].answers[0])
    boton2.setAttribute("name", preguntas[i].answers[1])
    boton3.setAttribute("name", preguntas[i].answers[2])
    boton4.setAttribute("name", preguntas[i].answers[3])
    
    /// Declaramos cada boton con lectura de su atributo
    botonAtt1 = boton1.getAttribute("name")
    botonAtt2 = boton2.getAttribute("name")
    botonAtt3 = boton3.getAttribute("name")
    botonAtt4 = boton4.getAttribute("name")

    /// Declaramos la respuesta correcta
    correcta = preguntas[i].correct
    
    }}
    vueltas(1)

/// funcion para modificar las preguntas

function modPreguntas(){
}

/// Comparacion de respuesta elegida con respuesta correcta
boton1.addEventListener("click", ()=>{
    if(botonAtt1 === correcta){
        let j=1;
        j++;
        vueltas(j)
        console.log(j);
    console.log(`Correcto ${botonAtt1}`);
    
} else {console.log("incorrecto");}})

boton2.addEventListener("click", ()=>{if(botonAtt2 === correcta){
    let j=1;
    j++;
    vueltas(j)
    console.log(j);
    console.log(`Correcto ${botonAtt2}`);
} else {console.log("incorrecto");
}})

boton3.addEventListener("click", ()=>{if(botonAtt3 === correcta){
    let j=1;
    j++;
    vueltas(j)
    console.log(j);
    console.log(`Correcto ${botonAtt3}`);
} else {console.log("incorrecto");}})

boton4.addEventListener("click", ()=>{if(botonAtt4 === correcta){
    let j=1;
    j++;
    vueltas(j)
    console.log(j);
    console.log(`Correcto ${botonAtt4}`);
} else {console.log("incorrecto");}})


///////////////////////////////////////////////////
////////////////////////////////////////////////////
