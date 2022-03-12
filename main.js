import { preguntas } from "/preguntas.js";

/// Hacer lectura de cada uno de los objetos y mostrarlos en el dom
/// Hacer lectura de cada una de las respuestas y mostrarlas en el dom
/// Tomar la respuesta seleccionada y validarla con la correcta
//// Si la respuesta es correcta, contador sube 1, si no, se mantiene
/// Al final, debe sumar el puntaje de todas las respuestas correctas

//console.log(cuestionario);

function quiz(respuesta){
    for(const questionJSON of preguntas){
    const respuestaCorrecta = questionJSON.correct;
    const pregunta = questionJSON.question
    const opciones = questionJSON.answers
    let counter = 0

    /* for(const answers of opciones){
        console.log(answers);
    }
    console.log(opciones); */
    if(respuesta === respuestaCorrecta){
        counter++;
        console.log(`Tu puntuacion es: ${counter}`);
    } else {console.log("Siguiente pregunta");}
    
    
    //console.log(`Pregunta: ${pregunta} y la respuesta correcta es ${respuestaCorrecta}`);
   // console.log(`Pregunta: ${questionJSON.question}`);
   
}
}
quiz("Labrador Retriever")