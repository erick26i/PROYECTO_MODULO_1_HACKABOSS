import { preguntas } from "/preguntas.js";

/// Hacer lectura de cada uno de los objetos
const titulo = document.querySelector("h2")

console.log(preguntas[0]);
for(let i = 0; i<preguntas.length ; i++){
    
    console.log(preguntas[i])
}

/* for(const objetos of preguntas){
    const pregunta = objetos.question
    const respuestas = objetos.answers
    const correcta = objetos.correct
    titulo.textContent = pregunta
    for(const objRespuestas of respuestas){     
    }
} */


/// Hacer lectura de cada una de las respuestas y mostrarlas en el dom

/// Tomar la respuesta seleccionada y validarla con la correcta
//// Si la respuesta es correcta, contador sube 1, si no, se mantiene
/// Al final, debe sumar el puntaje de todas las respuestas correctas


//Debo tomar 1 objeto, con su respuesta y su pregunta a la vez, luego meterla en una funcion para conseguir las 50 preguntas