let dimensionArray: number = Number(prompt(`Ingrese dimension del arreglo`)); // Se ingresa la dimension del array
let nombres: string[] = new Array(dimensionArray); // Se guardan los valores en arreglos
let años: number[] = new Array(dimensionArray);
let altura: number[] = new Array(dimensionArray);

//Funcion para realizar la carga de datos de las personas: Nombre, Edad y altura.
function cargarPersonas(
  nombres: string[],
  años: number[],
  altura: number[],
  dimensionArray: number
) {
  let i: number;
  for (i = 0; i < dimensionArray; i++) {
    nombres[i] = String(prompt(`Nombre de persona n° ${i + 1}`));
    años[i] = Number(prompt(`Edad de persona n° ${i + 1}`));
    altura[i] = Number(prompt(`Altura de persona n° ${i + 1}`));
  }
}

//Funcion para imprimir por consola datos de ingreso y salida
function mostrarDatos(nombres: string[],años: number[],altura: number[],dimensionArray: number) {
  let i: number;
  for (i = 0; i < dimensionArray; i++) {
    console.log(`Nombre: ${nombres[i]}
    Edad: ${años[i]} años
    Altura: ${altura[i]} centimetros`);
  }
}

// Se realiza comparacion de los valores de años y alturas en las posiciones [i] y [j],
// devolviendo 0 si son iguales. -1 si lo que hay en i es menor de lo que hay en j y 1 si lo que hay en i es mayor que lo que hay en j.
function comparar(años: number[], altura: number[], i: number, j: number) {
  let comparacion: number;
  if (años[i] === años[j]) {
    if (altura[i] === altura[j]) {
      comparacion = 0;
    } else if (altura[i] < altura[j]) {
      comparacion = -1;
    } else {
      comparacion = 1;
    }
  } else if (años[i] < años[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

// Se usa una variable auxiliar para guardar el dato que se va a intercambiar
function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}

//Se recorre el arreglo y achicando el recorrido del arreglo mientras se van ubicando en su lugar
//Se realiza la comparacion de valores igualando a 1 para ver si corresponde intercambiar
function burbuja(
  nombres: string[],
  años: number[],
  altura: number[],
  dimensionArray: number
) {
  let i: number;
  let j: number;
  for (i = 0; i < dimensionArray - 1; i++) {
    for (j = 0; j < dimensionArray - 1 - i; j++) {
      if (comparar(años, altura, j, j + 1) === 1) {
        intercambiar(nombres, j, j + 1);
        intercambiar(años, j, j + 1);
        intercambiar(altura, j, j + 1);
      }
    }
  }
}

// Se llama a las funciones, se pasan parametros.
cargarPersonas(nombres, años, altura, dimensionArray);
console.log(`Arreglo cargado`);
mostrarDatos(nombres, años, altura, dimensionArray);
console.log(`Arreglo ordenado`);
burbuja(nombres, años, altura, dimensionArray);
mostrarDatos(nombres, años, altura, dimensionArray);
