// FUNDAMENTOS DE PROGRAMACIÓN - PRÁCTICA
// Nombre del estudiante: _________________
// Fecha: _________________

// ============================================
// SECCIÓN 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

/**
 * Ejercicio 1.1: Declarar variables (2 puntos)
 * Crea tres variables con tu información personal
 * @returns {Object} - Objeto con nombre, edad y carrera
 */
function miInformacion() {
  // TODO: Declara las variables nombre, edad y carrera
  const nombre = "Venus Getsemaní Semino Alemán";
  const edad = 18;
  const carrera = "TSU";
  return { nombre, edad, carrera };
}

/**
 * Ejercicio 1.2: Operaciones aritmeticas básicas (3 puntos)
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {Object} - Objeto con suma, resta, multiplicación y división
 */
function operacionesBasicas(a, b) {
  // TODO: Calcula suma, resta, multiplicación y división de a y b
  const suma = b + a; // Sumo los dos números
  const resta = a - b; // Resto el segundo al primero
  const multiplicacion = a * b; // Multiplico ambos números
  const division = a / b; // Divido el primero entre el segundo
  return { suma, resta, multiplicacion, division };
}

/**
 * Ejercicio 1.3: área de un rectángulo (2 puntos)
 * @param {10} base - Base del rectánguloo
 * @param {2} altura - Altura del rectángulo
 * @returns {10} - Área del rectángulo
 */
function areaRectangulo(base, altura) {
  // TODO: Calcula y retorna el área (base * altura)
  return base * altura;  // Multiplico base por altura y retorno el resultado
}

/**
 * Ejercicio 1.4: Conversión de temperatura (3 puntos)
 * Convierte grados Celsius a Fahrenheit
 * Fórmula: F = C * 9/5 + 32
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} - Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
  // TODO: Implementación la conversión
  return celsius * 9/5 + 32; // Aplico la fórmula de conversión
}

// ============================================
// SECCIÃ“N 2: CONDICIONALES (15 puntos)
// ============================================

/**
 * Ejercicio 2.1: NÃºmero par o impar (3 puntos)
 * @param {number} numero - NÃºmero a evaluar
 * @returns {string} - "par" o "impar"
 */
function parOImpar(numero) {
  // TODO: Usa el operador % (mÃ³dulo) para determinar si es par o impar
  // Pista: Un nÃºmero es par si numero % 2 === 0
  if ( numero % 2 === 0) { // Si el residuo al dividir entre 2 es 0, es par
    return "par";
  } else { // Si no, es impar
    return "impar";
  }

}

/**
 * Ejercicio 2.2: CalificaciÃ³n (4 puntos)
 * @param {number} nota - Nota del 0 al 100
 * @returns {string} - "Aprobado" si nota >= 60, "Reprobado" si no
 */
function evaluarNota(nota) {
  // TODO: Implementa la lÃ³gica con if/else
   if (nota >= 60) {
      return "Aprobado"; // Cumple con el mínimo para aprobar
    } else {
      return "Reprobado"; // No alcanza la nota mínima
    }
}

/**
 * Ejercicio 2.3: El mayor de tres nÃºmeros (4 puntos)
 * @param {number} a - Primer nÃºmero
 * @param {number} b - Segundo nÃºmero
 * @param {number} c - Tercer nÃºmero
 * @returns {number} - El nÃºmero mayor
 */
function mayorDeTres(a, b, c) {
  // TODO: Encuentra y retorna el mayor de los tres nÃºmeros
  if (a >= b && a >= c) {
    return a; // a es el más grande
  } else if (b >= a && b >= c) {
    return b; // b es el más grande
  } else {
    return c; // c es el más grande
  }
}

/**
 * Ejercicio 2.4: ClasificaciÃ³n de edad (4 puntos)
 * @param {number} edad - Edad de la persona
 * @returns {string} - "menor" (0-17), "adulto" (18-64), "mayor" (65+)
 */
function clasificarEdad(edad) {
  /**
 * Clasifico una persona según su edad en tres grupos:
 * menor (0–17), adulto (18–64) y mayor (65 o más).
 */
  if (edad < 18) {
    return "menor";
  } else if (edad < 65) {
    return "adulto";
  } else {
    return "mayor";
  }
}

// ============================================
// SECCIÃ“N 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

/**
 * Ejercicio 3.1: Factorial (5 puntos)
 * Calcula el factorial de un nÃºmero (n! = n * (n-1) * (n-2) * ... * 1)
 * Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * @param {number} n - NÃºmero entero positivo
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  let resultado = 1; // Inicializo el resultado en 1
  for (let i = 1; i <= n; i++) { // Recorro desde 1 hasta n
    resultado *= i; // Multiplico acumulativamente
  }
  return resultado; // Devuelvo el resultado final
}

/**
 * Ejercicio 3.2: Suma de nÃºmeros del 1 al n (4 puntos)
 * @param {number} n - NÃºmero lÃ­mite
 * @returns {number} - Suma de 1 + 2 + 3 + ... + n
 */
function sumaHastaN(n) {
  // TODO: Usa un bucle para sumar todos los nÃºmeros desde 1 hasta n
  let suma = 0; // Variable acumuladora
  for (let i = 1; i <= n; i++) { // Bucle desde 1 hasta n
    suma += i; // Acumulo la suma
  }
  return suma; // Devuelvo la suma total
}

/**
 * Ejercicio 3.3: Tabla de multiplicar (5 puntos)
 * @param {number} numero - NÃºmero para generar su tabla
 * @returns {Array} - Array con los resultados de numero x 1 hasta numero x 10
 * Ejemplo: tablaMultiplicar(3) debe retornar [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 */
function tablaMultiplicar(numero) {
 const tabla = []; // Array vacío para guardar los resultados
  
  // TODO: Genera un array con la tabla de multiplicar
  for (let i = 1; i <= 10; i++) { // Recorro del 1 al 10
    const resultado = numero * i; // Calculo la multiplicación
    tabla.push(resultado); // Guardo el resultado en el array
  }
  return tabla; // Devuelvo la tabla completa
}

/**
 * Ejercicio 3.4: NÃºmeros pares hasta n (6 puntos)
 * @param {number} n - NÃºmero lÃ­mite
 * @returns {Array} - Array con todos los nÃºmeros pares desde 2 hasta n
 * Ejemplo: numerosPares(10) debe retornar [2, 4, 6, 8, 10]
 */
function numerosPares(n) {
  // TODO: Crea un array con todos los nÃºmeros pares hasta n
const pares = []; // Array para guardar los pares
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) { // Si el número es divisible entre 2
      pares.push(i); // Lo agrego al array
    }
  }
  return pares; // Devuelvo el array con los pares
}

// ============================================
// SECCIÃ“N 4: ARRAYS (25 puntos)
// ============================================

/**
 * Ejercicio 4.1: Suma de elementos de un array (4 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 */
function sumaArray(numeros) {
  // TODO: Suma todos los elementos del array
let suma = 0;
  for (let i = 0; i < numeros.length; i++) { // Recorro cada posición del array
    suma += numeros[i]; // Acumulo el valor actual
  }
  return suma;
}

/**
 * Ejercicio 4.2: Promedio de un array (5 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - Promedio de los nÃºmeros
 */
function promedioArray(numeros) {
  // TODO: Calcula el promedio (suma total / cantidad de elementos)
 let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Acumulo cada elemento
  }
  const cantidad = numeros.length; // Guardo el total de elementos
  if (cantidad === 0) { // Evito división entre cero
    return 0;
  }
  return suma / cantidad; // Retorno el promedio
}

/**
 * Ejercicio 4.3: Encontrar el mÃ¡ximo (6 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - El nÃºmero mÃ¡s grande del array
 */
function encontrarMaximo(numeros) {
  // TODO: Encuentra y retorna el nÃºmero mÃ¡s grande
  // Pista: Puedes usar Math.max(...numeros) o hacerlo con un bucle
if (numeros.length === 0) {
    return undefined; // Si el array está vacío, no hay máximo
  }
  let maximo = numeros[0]; // Inicio con el primer número
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) { // Comparo con el máximo actual
      maximo = numeros[i]; // Actualizo si encuentro uno mayor
    }
  }
  return maximo; // Devuelvo el número mayor
}


/**
 * Ejercicio 4.4: Filtrar nÃºmeros mayores a un valor (5 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @param {number} limite - Valor lÃ­mite
 * @returns {Array<number>} - Nuevo array solo con nÃºmeros mayores al lÃ­mite
 * Ejemplo: filtrarMayores([1, 5, 3, 8, 2], 4) debe retornar [5, 8]
 */
function filtrarMayores(numeros, limite) {
  // TODO: Crea un nuevo array con solo los nÃºmeros mayores al lÃ­mite
  const mayores = []; // Array donde guardo los números filtrados
  for (let i = 0; i < numeros.length; i++) {
    const numeroActual = numeros[i];
    if (numeroActual > limite) { // Si es mayor que el límite
      mayores.push(numeroActual); // Lo agrego al nuevo array
    }
  }
  return mayores;
}

/**
 * Ejercicio 4.5: Invertir un array (5 puntos)
 * @param {Array} arr - Array a invertir
 * @returns {Array} - Nuevo array con los elementos en orden inverso
 * Ejemplo: invertirArray([1, 2, 3, 4]) debe retornar [4, 3, 2, 1]
 */
function invertirArray(arr) {
  // TODO: Invierte el orden de los elementos
  // Pista: Puedes usar arr.reverse() o hacerlo manualmente
  const invertido = [];
for (let i = arr.length - 1; i >= 0; i--) { // Recorro el array desde el final
    invertido.push(arr[i]); // Agrego los elementos en orden contrario
  }
  return invertido;
}

// ============================================
// SECCIÃ“N 5: ARRAYS BIDIMENSIONALES (30 puntos)
// PreparaciÃ³n para matrices
// ============================================

/**
 * Ejercicio 5.1: Crear una matriz (6 puntos)
 * Crea una matriz de filas x columnas llena de ceros
 * @param {number} filas - NÃºmero de filas
 * @param {number} columnas - NÃºmero de columnas
 * @returns {Array<Array<number>>} - Matriz de ceros
 * Ejemplo: crearMatriz(2, 3) debe retornar [[0, 0, 0], [0, 0, 0]]
 */
function crearMatriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) { // Recorro las filas
    const fila = [];
    for (let j = 0; j < columnas; j++) { // Recorro las columnas
      fila.push(0); // Agrego ceros en cada posición
    }
    matriz.push(fila); // Agrego la fila a la matriz
  }
  return matriz;
}

/**
 * Ejercicio 5.2: Suma de elementos de una matriz (6 puntos)
 * @param {Array<Array<number>>} matriz - Matriz de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 * Ejemplo: sumaMatriz([[1, 2], [3, 4]]) debe retornar 10
 */
function sumaMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) { // Recorro las filas
    for (let j = 0; j < matriz[i].length; j++) { // Recorro las columnas
      suma += matriz[i][j]; // Acumulo cada valor
    }
  }
  return suma;
}

/**
 * Ejercicio 5.3: Obtener una fila (5 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceFila - Ãndice de la fila (empezando en 0)
 * @returns {Array<number>} - La fila especificada
 * Ejemplo: obtenerFila([[1, 2], [3, 4], [5, 6]], 1) debe retornar [3, 4]
 */
function obtenerFila(matriz, indiceFila) {
  // TODO: Retorna la fila indicada
  return matriz[indiceFila]; // Retorno la fila pedida
}

/**
 * Ejercicio 5.4: Obtener una columna (7 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceColumna - Ãndice de la columna (empezando en 0)
 * @returns {Array<number>} - Array con los elementos de la columna
 * Ejemplo: obtenerColumna([[1, 2], [3, 4], [5, 6]], 0) debe retornar [1, 3, 5]
 */
function obtenerColumna(matriz, indiceColumna) {
  const columna = [];
  for (let i = 0; i < matriz.length; i++) { // Recorro todas las filas
    columna.push(matriz[i][indiceColumna]); // Extraigo el valor de la columna
  }
  return columna;
}

/**
 * Ejercicio 5.5: Transponer una matriz (6 puntos)
 * La transpuesta intercambia filas por columnas
 * @param {Array<Array<number>>} matriz - Matriz original
 * @returns {Array<Array<number>>} - Matriz transpuesta
 * Ejemplo: transponer([[1, 2, 3], [4, 5, 6]]) debe retornar [[1, 4], [2, 5], [3, 6]]
 */
function transponer(matriz) {
  if (matriz.length === 0) {
   return []; // Si la matriz está vacía, retorno una vacía
  }
  const filasOriginales = matriz.length; // Cantidad de filas
  const columnasOriginales = matriz[0].length; // Cantidad de columnas
  const transpuesta = [];
  for (let j = 0; j < columnasOriginales; j++) { // Recorro columnas
    const nuevaFila = [];
    for (let i = 0; i < filasOriginales; i++) { // Recorro filas
      nuevaFila.push(matriz[i][j]); // Intercambio posición
    }
    transpuesta.push(nuevaFila); // Agrego la nueva fila transpuesta
  }
  return transpuesta;
}

// ============================================
// NO MODIFIQUES ESTA LÃNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
