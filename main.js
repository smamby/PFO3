function consolaPrint(text) {
    const consola = document.getElementById('consola');
    consola.innerHTML += text+'<br>';
}

//  EJERCICIO 1
function calcularAreaRectangulo(ancho, alto) {
    const area = ancho * alto / 2;
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 1    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 1: ${area}`;    
    return response
}
console.log(calcularAreaRectangulo(5, 3));
consolaPrint(' ');
consolaPrint(`Ejercicio 1:`);
consolaPrint('(calcularAreaRectangulo(5, 3))');
consolaPrint(' ');
/* Recibo los datos necesarios como parametros y los uso en la formula de area del triangulo*/

// EJERCICIO 2
function contarPalabras(str) {
    const count= str.split(' ').length;
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 2    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 2: ${count}`;    
    return response
}

console.log(contarPalabras("Humahuaca es un lugar copado"));
consolaPrint(' ');
consolaPrint(`Ejercicio 2:`);
consolaPrint('contarPalabras("Humahuaca es un lugar copado"');
consolaPrint(' ');
/* uso split para separar la cadena por sus espacios metiendo cada parte en un indice de array para luego leer su longitud */

// EJERCICIO 3
function invertirCadena(cadena) {
    let anedac = '';
    for (let i = 1; i <= cadena.length; i++) {
        let char = cadena[cadena.length-i]
        anedac += char;
    }
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 3    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 3: ${anedac}`;    
    return response
}

console.log(invertirCadena("hola"));
consolaPrint(' ');
consolaPrint(`Ejercicio 3:`);
consolaPrint('invertirCadena("hola")');
consolaPrint(' ');
/* Recorro la cadena para atras y cada caracter lo concateno al resultado para ir construyendo una cadena invertida */

// EJERCICIO 4
function esPalindromo(palabra) {
    let tamaño = palabra.length;
    let cantXLado = Math.floor(tamaño/2);
    let esPal = 'Si, es un palindromo'

    for (let i = 0; i <= cantXLado; i++) {
        let char1 = palabra[i]
        let char2 = palabra[palabra.length-1-i]
        if (char1 != char2) {
            esPal = 'No, no es un palindromo'        
        }
    }
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 4    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 4: ${esPal}`;    
    return response
}

console.log(esPalindromo("neuquen"));
consolaPrint(' ');
consolaPrint(`Ejercicio 4:`);
consolaPrint('esPalindromo("neuquen")');
consolaPrint(' ');
/* Leo la longitud del string y calculo la cantidad de comparaciones de caracteres tengo que hacer 
comparo los caracteres hacia adelante y hacia atras entre ambas mitades
Si encuentra una diferencia, no cambia el resultado a "no es palindromo" */

// EJERCICIO 5
function edadCanina() {
    let input = prompt('Escribe la edad humana');
    let edadPerro = input*7;
    
    console.log('');
    console.log('---------------------------------------------');
    console.log('');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('|||||||||||||    ejercicio 5    |||||||||||||');
    console.log('|||||||||||||                   |||||||||||||');
    console.log('');
    let response = `Solucion 5: Tu perro tiene ${edadPerro} años humanos`;    
    return response
}

console.log(edadCanina(7));
consolaPrint(' ');
consolaPrint(`Ejercicio 5:`);
consolaPrint('edadCanina(7)');
consolaPrint(' ');
/* recibe un imput, lo multiplica, y lo incrusta en una string */