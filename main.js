import { preguntas } from "/preguntas.js";

/// seleccion de botones y titulo
const titulo = document.querySelector("h2");
const boton1 = document.querySelector("#btn1");
const boton2 = document.querySelector("#btn2");
const boton3 = document.querySelector("#btn3");
const boton4 = document.querySelector("#btn4");
const count = document.querySelector(".container_points");

//Declaracion de variables globales
let correcta;
let contador = 0;
let j = 0;
let botonAtt1;
let botonAtt2;
let botonAtt3;
let botonAtt4;

///Funcion para cambio de preguntas y respuestas
function vueltas(vuelta) {
  for (let i = 0; i < vuelta; i++) {
    /// Introducimos datos en el DOM
    titulo.textContent = preguntas[i].question;
    boton1.textContent = preguntas[i].answers[0];
    boton2.textContent = preguntas[i].answers[1];
    boton3.textContent = preguntas[i].answers[2];
    boton4.textContent = preguntas[i].answers[3];

    /// Introducimos atributos a los botones
    boton1.setAttribute("name", preguntas[i].answers[0]);
    boton2.setAttribute("name", preguntas[i].answers[1]);
    boton3.setAttribute("name", preguntas[i].answers[2]);
    boton4.setAttribute("name", preguntas[i].answers[3]);

    /// Declaramos cada boton con lectura de su atributo
    botonAtt1 = boton1.getAttribute("name");
    botonAtt2 = boton2.getAttribute("name");
    botonAtt3 = boton3.getAttribute("name");
    botonAtt4 = boton4.getAttribute("name");

    /// Declaramos la respuesta correcta
    correcta = preguntas[i].correct;
    // Si el valor de la vuelta es mayor que 50
    // lanzamos un alert para indicar el fin del juego
    // y ponemos todos los valore a 0
    if (vuelta > 50) {
      alert(`Tu puntuación es ${contador} \n Vuelve a jugar de nuevo`);
      vuelta = 1;
      j = 0;
      contador = 0;
    }
  }
}
vueltas(1);

// funcion para imprimir el resultado
let tiempo = 15;
const cuentaAtras = () => {
  const reloj = setInterval(function () {
    if (tiempo === 0) {
      clearInterval(reloj);
      j++;
      setTimeout(() => {
        ejecutarVuelta(j);
        tiempo = 15;
        cuentaAtras();
      }, 1000);
    } else {
      tiempo--;
    }
    counterPrint();
  }, 1000);
};

cuentaAtras();

const counterPrint = () => {
  count.innerHTML = `Tu resultado es ${contador} **** Te quedan: ${tiempo} segundos!`;
};
counterPrint();

/// funcion para modificar las preguntas
function ejecutarVuelta(valor) {
  console.log(`Pregunta Numero: ${valor}`);
  vueltas(valor + 1);
}

/// Evento de boton y revision de preguntas
boton1.addEventListener("click", () => {
  tiempo = 15;
  if (botonAtt1 === correcta) {
    contador++;
    j++;
    ejecutarVuelta(j);
  } else {
    j++;
    ejecutarVuelta(j);
  }
  counterPrint();
});

boton2.addEventListener("click", () => {
  tiempo = 15;
  if (botonAtt2 === correcta) {
    contador++;
    j++;
    ejecutarVuelta(j);
  } else {
    j++;
    ejecutarVuelta(j);
  }
  counterPrint();
});

boton3.addEventListener("click", () => {
  tiempo = 15;
  if (botonAtt3 === correcta) {
    contador++;
    j++;
    ejecutarVuelta(j);
  } else {
    j++;
    ejecutarVuelta(j);
  }
  counterPrint();
});

boton4.addEventListener("click", () => {
  tiempo = 15;
  if (botonAtt4 === correcta) {
    contador++;
    j++;
    ejecutarVuelta(j);
  } else {
    j++;
    ejecutarVuelta(j);
  }
  counterPrint();
});
