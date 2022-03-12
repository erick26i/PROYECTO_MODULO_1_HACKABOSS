import { preguntas } from "/preguntas.js";

/// seleccion de botones
const titulo = document.querySelector("h2")
const boton1 = document.querySelector("#btn1")
const boton2 = document.querySelector("#btn2")
const boton3 = document.querySelector("#btn3")
const boton4 = document.querySelector("#btn4")


/* const answer = preguntas[0].answers[0]
console.log(answer); */
/// Introducir al dom la informacion requerida
/* titulo.textContent = preguntas[1].question
boton1.textContent = preguntas[1].answers[0]
boton2.textContent = preguntas[1].answers[1]
boton3.textContent = preguntas[1].answers[2]
boton4.textContent = preguntas[1].answers[3] */ 

///Funcion para cambio de preguntas y respuestas
function vueltas (vuelta){
for(let i = 0 ; i < vuelta ; i++){

/// Introducimos datos en el DOM
titulo.textContent = preguntas[i].question
boton1.textContent = preguntas[i].answers[0]
boton2.textContent = preguntas[i].answers[1]
boton3.textContent = preguntas[i].answers[2]
boton4.textContent = preguntas[i].answers[3] 

/// Introducimos atrritubos a los botones
boton1.setAttribute("name", preguntas[i].answers[0])
boton2.setAttribute("name", preguntas[i].answers[1])
boton3.setAttribute("name", preguntas[i].answers[2])
boton4.setAttribute("name", preguntas[i].answers[3])

/// Declaramos cada boton con lectura de su atributo
const botonAtt1 = boton1.getAttribute("name")
const botonAtt2 = boton2.getAttribute("name")
const botonAtt3 = boton3.getAttribute("name")
const botonAtt4 = boton4.getAttribute("name")

/// Declaramos la respuesta correcta
const correcta = preguntas[i].correct
}}
vueltas(1)

console.log(vueltas[correcta]);
//console.log(preguntas[1].answers[0]);
/// Darle atributo a los botones
/* boton1.setAttribute("name", preguntas[1].answers[0])
boton2.setAttribute("name", preguntas[1].answers[1])
boton3.setAttribute("name", preguntas[1].answers[2])
boton4.setAttribute("name", preguntas[1].answers[3]) */
//console.log(boton1, boton2, boton3, boton4);

//console.log(boton1.hasAttribute("name"))

///Leer los atributos de los botones
//console.log(boton1.getAttribute("name"));
const botonAtt1 = boton1.getAttribute("name")
const botonAtt2 = boton2.getAttribute("name")
const botonAtt3 = boton3.getAttribute("name")
const botonAtt4 = boton4.getAttribute("name")
//console.log(botonAtt1);

//// respuesta correcta
//const correcta = preguntas[1].correct


/// Comparacion de respuesta elegida con respuesta correcta
boton1.addEventListener("click", ()=>{if(botonAtt1 === correcta){
    console.log(`Correcto ${botonAtt1}`);
} else {console.log("incorrecto");}})
boton2.addEventListener("click", ()=>{if(botonAtt2 === correcta){
    console.log(`Correcto ${botonAtt2}`);
} else {console.log("incorrecto");}})
boton3.addEventListener("click", ()=>{if(botonAtt3 === correcta){
    console.log(`Correcto ${botonAtt3}`);
} else {console.log("incorrecto");}})
boton4.addEventListener("click", ()=>{if(botonAtt4 === correcta){
    console.log(`Correcto ${botonAtt4}`);
} else {console.log("incorrecto");}})

///////////////////////////////////////////////////
////////////////////////////////////////////////////
