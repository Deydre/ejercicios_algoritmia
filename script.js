// // ------------ EJERCICIOS NIVEL BÁSICO ------------
// // Suma de dos números: Escribe una función que tome dos números como parámetros y devuelva su suma.
// function suma(num1, num2){
//     return num1 + num2;
// }
// console.log(suma(2,8));

// // --------------------------
// // Número par o impar: Escribe una función que verifique si un número es par o impar.
// function tipoNum(num){
//     return num % 2 === 0 ? `${num} es par` : `${num} es impar`
// }
// console.log(tipoNum(8));

// // --------------------------
// // Máximo de tres números: Escribe una función que encuentre el mayor de tres números.
// function numMayor(num1, num2, num3){
//     return `El número mayor es ${Math.max(num1, num2, num3)}`
// }
// console.log(numMayor(45, 27, 58));

// // --------------------------
// // Invertir cadena: Escribe una función que tome una cadena como entrada y devuelva la cadena invertida.
// function invertirString(string){
//     return string.split("").reverse().join("");
// }

// console.log(invertirString("La lluvia en Sevilla es una maravilla"))

// // --------------------------
// // Calcular factorial: Escribe una función que calcule el factorial de un número dado.
// function calcFactorial(num){
//     result = 1;
//     for (let i = num; i > 1; i--) {
//         result *= i 
//     }
//     return result; 
// }

// console.log(calcFactorial(8))

// // --------------------------
// // Comprobar si una palabra es un palíndromo: Verifica si una cadena es un palíndromo (se lee igual de adelante hacia atrás).
// function esPalindromo(string){
//     return string === string.split("").reverse().join("") 
//         ? `"${string}" sí es un palíndromo` 
//         : `"${string}" no es un palíndromo` ;
// }

// console.log(esPalindromo("somos"))

// // --------------------------
// // Contar vocales en una cadena: Escribe una función que cuente cuántas vocales hay en una cadena.
// function contarVocales(string){
//     let counter = string.match(/[aeiouáéíóú]/gi);
//     return `La frase "${string}" tiene ${counter.length} vocales`
// }

// console.log(contarVocales("El veloz murciélago hindú comía feliz cardillo y kiwi"))

// // --------------------------
// // Encontrar el número más grande en un array: Dado un array de números, encuentra y devuelve el número más grande.
// function numMayor2(array){
//     return `El número mayor es ${Math.max(...array)}`
// }
// console.log(numMayor2([25, 27, 67, 89, 2, 54, 120]));

// // --------------------------
// // Ordenar un array de números: Escribe una función que ordene un array de números en orden ascendente.
// function ordenarNums(array){
//     return array.sort((a, b) => a - b);
// }

// console.log(ordenarNums([4, 5, 8, 2, 1, 3, 6, 9, 7, 10]))

// // --------------------------
// // Sumar todos los números de un array: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.

// function suma2(array){
//     return array.reduce((a, b) => a + b);
// }

// console.log(suma2([2,4,8,6,20]))

// // --------------------------
// // Eliminar duplicados en un array: Escribe una función que elimine los valores duplicados en un array.

// function eliminarDuplicados(array){
//     let resultado = [];
//     array.forEach(num => {
//         !resultado.includes(num) ? resultado.push(num) : "";
//     })

//     return resultado;
// }

// console.log(eliminarDuplicados([2,7,4,1,5,2,3,5,8,9,10,2,7,10]))

// // --------------------------
// // Generar una lista de números del 1 al n: Escribe una función que genere una lista de números del 1 al número n especificado.
// function crearLista(num){
//     let resultado = [];
//     for (let i = 1; i <= num; i++) {
//         resultado.push(i);   
//     }
//     return resultado;
// }

// console.log(crearLista(8))

// // --------------------------
// // Encontrar el número más pequeño en un array: Dado un array de números, encuentra y devuelve el número más pequeño.
// function encontrarPequeño(array){
//     return Math.min(...array);
// }

// console.log(`El número más pequeño es el ${encontrarPequeño([28, 78, 5, 123, 93, 16, 6, 4, 102])}`)

// // --------------------------
// // Multiplicar todos los números de un array: Escribe una función que multiplique todos los números de un array y devuelva el producto total.
// function multipNums(array){
//     return array.reduce((a, b) => a * b);
// }

// console.log(`El resultado de multiplicar todos los números es ${multipNums([2, 2, 4])}`);

// // --------------------------
// // Convertir una cadena a mayúsculas: Escribe una función que tome una cadena y la convierta completamente a mayúsculas.
// function convertirMayus(string){
//     return string.toUpperCase();
// }

// console.log(`String en mayúsculas: ${convertirMayus("The cake is a lie, but the cube is forever.")}`)

// // --------------------------
// // Reemplazar espacios por guiones en una cadena: Escribe una función que reemplace todos los espacios en una cadena con guiones.
// function crearGuiones(string){
//     return string.replace(/ /g, "-");
// }

// console.log(crearGuiones("Esta cadena antes iba con espacios y ahora con guiones"))

// // --------------------------
// // Calcular la media de los números en un array: Dado un array de números, calcula y devuelve su media.
// function calcMedia(array){
//     return (array.reduce((a, b) => a + b))/ array.length;
// }

// console.log(`La media es ${calcMedia([2,7,5,41,2])}`)

// // --------------------------
// // Generar números aleatorios en un rango: Escribe una función que genere un número aleatorio dentro de un rango dado (min y max).
// function numAleatorio(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(`Número aleatorio entre 20 y 50: ${numAleatorio(20,50)}`)

// // --------------------------
// // Contar palabras en una cadena: Escribe una función que cuente cuántas palabras hay en una cadena.
// function contarPalabras(string){
//     return `"${string}" tiene ${string.split(" ").length} palabras`;
// }
// console.log(contarPalabras("Somos los caballeros que dicen Ni!"))

// // --------------------------
// // Comprobar si todos los elementos de un array son iguales: Dado un array, verifica si todos sus elementos son iguales o no.
// function todosIguales(array){
//     return array.every(elem => elem === array[0]);
// }

// console.log(todosIguales([2,2,2,2,2]))

// // --------------------------
// console.log("--------------------------")
// ------------ EJERCICIOS NIVEL MEDIO-ALTO ------------
// Fibonacci Recursivo: Escribe una función que devuelva el n-ésimo número de Fibonacci usando recursión.
function fibonacci(n){
    if (n <= 0){
        return 0;
    }else if (n === 1){
        return 1;
    }else{
        return (fibonacci(n-2) + fibonacci(n-1))
    }
}
console.log(fibonacci(12))


// --------------------------
// Contar caracteres en una cadena: Escribe una función que cuente cuántas veces aparece cada carácter en una cadena y devuelva un objeto con el resultado.
function contarCaracteres(string){
    let arrayLetras = string.toLowerCase().split("");
    let letras = {};
    arrayLetras.forEach(letra => {
        letras[letra] = string.split(letra).length - 1;
    })

    return letras;
    // caracter.a = 8;
    // caracter.b= 2;
    // return caracter;
}

console.log(contarCaracteres("welcome to the world of the plastic beach"))

// --------------------------
// Ordenar un array de objetos: Dado un array de objetos, escribe una función que lo ordene en función de una propiedad específica del objeto (por ejemplo, por edad o nombre).
function ordenarArrayObjs(arrayObjetos){
    
}

let personajes = [
    {
        nombre: "Isaac Asimov",
        edad: 45
    },
    {
        nombre: "Philip K. Dick",
        edad: 46
    },
    {
        nombre: "Arthur C. Clarke",
        edad: 48
    }
]
console.log(ordenarArrayObjs(personajes))

// --------------------------
// Eliminar elementos falsy de un array: Escribe una función que elimine todos los valores falsy (false, 0, "", null, undefined, NaN) de un array.

// --------------------------
// Anagramas: Escribe una función que determine si dos cadenas son anagramas, es decir, si tienen las mismas letras en diferente orden.

// --------------------------
// Matriz identidad: Crea una función que genere una matriz identidad de tamaño n x n.

// --------------------------
// Contar palabras repetidas en una cadena: Escribe una función que cuente cuántas veces aparece cada palabra en una cadena y devuelva el resultado en un objeto.

// --------------------------
// Invertir los elementos de un array sin usar reverse: Implementa una función que invierta los elementos de un array sin usar el método reverse.

// --------------------------
// Encontrar el primer número que no se repite: Dado un array de números, encuentra el primer número que no se repite y devuélvelo.

// --------------------------
// Rotar un array: Escribe una función que rote los elementos de un array n posiciones hacia la derecha o hacia la izquierda.

// --------------------------
// Encontrar la subsecuencia creciente más larga: Dado un array de enteros, encuentra la subsecuencia creciente más larga.

// --------------------------
// Validar paréntesis balanceados: Escribe una función que verifique si los paréntesis en una cadena están balanceados.

// --------------------------
// Sumar matrices de igual tamaño: Dadas dos matrices del mismo tamaño, escribe una función que devuelva una nueva matriz que sea la suma de las dos matrices.

// --------------------------
// Comprimir una cadena: Implementa una función que reciba una cadena y la comprima usando el conteo de caracteres repetidos. Ejemplo: "aaabb" se convierte en "a3b2".

// --------------------------
// Calcular la potencia de un número (recursivo): Escribe una función recursiva que calcule la potencia de un número base elevado a un exponente exp.

// --------------------------
// Encontrar la intersección de dos arrays: Escribe una función que tome dos arrays y devuelva un nuevo array con los elementos que están en ambos arrays (intersección).

// --------------------------
// Filtrar números primos en un array: Dado un array de números, filtra los números que son primos y devuélvelos en un nuevo array.

// --------------------------
// Contar ocurrencias de dígitos en un número: Escribe una función que tome un número y cuente cuántas veces aparece cada dígito en él.

// --------------------------
// Suma máxima en un subarray: Dado un array de enteros, encuentra la suma máxima de un subarray contiguo usando el algoritmo de Kadane.

// --------------------------
// Convertir un número en palabras: Escribe una función que convierta un número entero a su representación en palabras. Por ejemplo, 123 se convierte en "ciento veintitrés".

// --------------------------

