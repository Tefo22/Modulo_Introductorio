/* 1. Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y
haga un loop de 0 a 100 mostrando en la consola cada número del loop.
En caso de que el número de la iteración sumado con el número pasado por parámetro,
sea par, mostrá en la consola “El número x es par”.
 */

 /* function loopDePares (numero){
     let res = 0;
     for(let i=0; i<=100; i++){
         res = i + numero;
         if(!(res%2)){
             console.log(`${i} : El número ${res} es par `)
         }
    }
 }

 loopDePares(5); */

 /* 2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un
número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número
del loop.
Ahora, modificar el código para que, en caso de que ese número sumado con el número
pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro */

/* function loopDeImpares (numero, palabra){
    let res=0;
    for(let i=0; i<=100; i++){
        //console.log(i);
        res =  i + numero;
        if(res%2===1){
            console.log(`${res} : ${palabra} `);
        }
    }
}

loopDeImpares(8,"Impar"); */

/* 3. Sumatoria
Debés crear una función llamada `sumattion` que reciba un número como parámetro y
que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
Ejemplo:
- sumattion(3) debe retornar 6 por que hace (1 +2 +3)
- sumattion(8) debe retornar 36 */

/* function sumattion (numero){
    let res=0;
    for(let i=1; i<=numero; i++){
        res=res+i;
    }
    return res;
}
let numero = 3
console.log(`La sumatoria de ${numero} = ${sumattion(numero)}`); */

/* 4. Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas
pasado.
Ejemplo:
- nuevoArreglo(5) debe retornar [1,2,3,4,5]
- nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

/* function nuevoArreglo(numero){
    let arreglo=[];
    for(let i=1; i<=numero; i++){
        arreglo.push(i);
    }
    return arreglo;
}

console.log(nuevoArreglo(10));
console.log(nuevoArreglo(5)); */

/* 5. Similar String.split()
Debés crear una función llamada `split` que reciba un `string` y simule el
comportamiento de la función original Si no sabés cómo funciona, Google puede
ayudarte..
Importante: No podés usar el String.split()
Ejemplo:
- split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
- split(“chau”) debe retornar [“c”,”h”,”a”,”u”] */

/* function split(string){
    let arreglo = [];
    for(let i=0; i < string.length; i++){
        arreglo.push(string[i])
    }
    return arreglo;
}

console.log(split("hola"));
console.log(split("chau")); */

/* 6. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro
y devuelva sus caracteres del medio.
Ejemplo:
- middleCharacter(“plataforma5”) debe retornar “f”
- middleCharacter(“hola”) debe retornar “ol”
- middleCharacter(“cosas”) debe retornar “s”
 */
/* function middleCharacter (string){
    let redondeo = Math.floor(string.length/2);
    if(string.length % 2===0){
        return `${string[redondeo-1]}${string[redondeo]}`
    }
    else{
        return `${string[redondeo]}`
    }
}
console.log(middleCharacter("cosas")); */
/* 7. Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y
devuelva otro con los números `0` ordenados al final.
Ejemplo:
- moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
- moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
 */
///////////////CON PUSH ///////////////////////
/* function moveZeros (arreglo){
    let nuevoArreglo = [];
    let ceros=[];
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i] !==0){
            nuevoArreglo.push(arreglo[i]);
        } else{
            ceros.push(arreglo[i]);

        }
    
    }
    //return [nuevoArreglo,ceros];
    for(let i=0; i<ceros.length;i++){
        nuevoArreglo.push(ceros[i])
    }
    return nuevoArreglo;
    
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) */

////CREDITOS MAURO BRUNO/////////////////////////
/* function moveZeros (arreglo){
    let moverZeros = []
    arreglo.forEach(function(x){
    if(x!==0){
        moverZeros.unshift(x)
    }else{
        moverZeros.push(x);
        
    }
})
    console.log(moverZeros.reverse())
}

moveZeros([1,2,0,1,0,1,0,3,0,1])
moveZeros([false,1,0,1,2,0,1,3,"a"]) */
//////////////////////////////////////////////////
///CON SPLICE/////////////////////////////////////
/* function moveZeros(arreglo){
    let nuevoArreglo = []
    for(let i=0; i<arreglo.length;i++){
        if(arreglo[i]===0){
            nuevoArreglo.push(arreglo[i])
            //splice(inicio, cuantos elem a borrar)
            arreglo.splice(i,1)
        }
    }
    for(let i=0; i< nuevoArreglo.length; i++){
        arreglo.push(nuevoArreglo[i]);
    }
    return arreglo;
}
let arreglo = [1,2,0,1,0,1,0,3,0,1]
let arreglo2= [false,1,0,1,2,0,1,3,"a"]
console.log(moveZeros(arreglo));
console.log(moveZeros(arreglo2)); */

/* 8. Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo
como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy
{elemento de array 2}”.
Ejemplo:
- arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
 */

/* function arrayHandler(arreglo1, arreglo2){
    if(arreglo1.length === arreglo2.length){
        for (let i=0; i<arreglo1.length ||i<arreglo2.length;i++){
            console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`)
        }
    }
    else {
        alert(`${arreglo1} no es del mismo tamanio de ${arreglo2}`)
    }
}
arrayHandler([1,2,3,4], ["h","o","l","a"]); */
//Prueba diferentes tamanios arreglo1 y arreglo2, alert
//arrayHandler([1,2,3,4], ["h","o","l"]);

/* 9. Mezclando arreglos I
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como
parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.
Ejemplo:
- mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
- mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
- mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4] */

/* function mezclarArreglos (arreglo1, arreglo2){
    let nuevoArreglo = [];
    for(let i=0; i<arreglo1.length || i<arreglo2.length; i++){
        if(arreglo1[i] !== arreglo2[i]){
            nuevoArreglo.push(arreglo1[i]);
            nuevoArreglo.push(arreglo2[i]);
        }
    }
    let pop = [];
    for(let i=0; i<nuevoArreglo.length; i++){
        if(typeof(nuevoArreglo[i]) !== "undefined"){
            pop.push(nuevoArreglo[i])
        }
    }
    return pop;
}

console.log(mezclarArreglos([1,2,3,4],["h","o","l","a"]));
console.log(mezclarArreglos([1,2,3,4], ["h","p"]));
console.log(mezclarArreglos(["h","p"], [1,2,3,4])); */


/* 10. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números
desordenados y devuelva la suma entre los dos números más chicos.
Ejemplo:
- minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
- minSum([1, 10, 43, 900, 20, 8]) debe retornar 9 */

/* function minSum(arreglo){
    //dar valores altos al azar a min y min2
    let min = 1000
    let min2 = 1000
    for(let i=0; i<arreglo.length; i++){
        if(min > arreglo[i]){
            min=arreglo[i];
        }
    }    
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i]>min && min2>arreglo[i]){
            min2=arreglo[i];
        }
    }
    return min + min2;
}
console.log(minSum([7, 6, 5, 4, 3, 2]))
console.log(minSum([1, 10, 43, 900, 20, 8]))
console.log(minSum([2, 10, 43, 900, 20, 8]))
console.log(minSum([2,3,4,5,6,7])) */
//Otra forma con algoritmo de ordenacion bubble sort, mas avanzado
/* function minSuma (arreglo){
    const tamanio = arreglo.length - 1;
    for(let i=0; i<tamanio;i++){
        for(let j=0; j<(tamanio-i); j++){
            if(arreglo[j]>arreglo[j+1]){
                const temp = arreglo[j];
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]=temp;
            }
        }
    }
    let sumaMinima = 0;
    for(let i=0; i<2;i++){
        sumaMinima += arreglo[i];
    }
    return sumaMinima;
}

console.log(minSuma([1, 10, 43, 900, 20, 8]))
console.log(minSuma([7, 6, 5, 4, 3, 2]))
console.log(minSuma([1, 10, 43, 900, 20, 8]))
console.log(minSuma([2, 10, 43, 900, 20, 8]))
console.log(minSuma([2,3,4,5,6,7])) */

/* 11. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como
parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada `valor`
que contenga el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4},
{valor: 5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}] */

/* function arregloDeObjetos(numero){
    let arreglo = []
    for(let i=1; i<=numero;i++){
        let objeto = {}
        objeto["valor"] = i
        arreglo.push(objeto);
    }
    return arreglo
    // for(let j=0; j<arreglo.length; j++){
    //     console.log(arreglo[j]);
    //  }
}
console.log(arregloDeObjetos(5));
// console.log(" ")
// arregloDeObjetos(3); */


/* 12. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una
palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad
llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5, “hola”) debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4},
{hola: 5 }]
- arregloDeObjetos(3, “chau”) debe retornar [{chau: 1}, {chau: 2}, {chau: 3}] */

/* function arregloDeObjetos(numero, palabra){
    let arreglo = [];
    for(let i=1; i<= numero; i++){
        let objeto = {};
        objeto[palabra] = i;
        arreglo.push(objeto);
    }
    return arreglo;
}

console.log(arregloDeObjetos(5, "hola"));
console.log(arregloDeObjetos(3, "chau")); */

/* 13. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como
parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
var arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ]
- oneProperty(arreglo, “edad”) debe retornar [ { edad: 20 }, { edad: 22 } ]
- oneProperty(arreglo, “name”) debe retornar [ { name: “lucas”}, { name: “santi” } ] */

/* function oneProperty(arregloDeObjetos, string){
    let arreglo= [];
    for(let i=0; i<arregloDeObjetos.length; i++){
        for(let j in arregloDeObjetos[i]){
            let objeto={};
            if(j===string){
                objeto[j] =arregloDeObjetos[i][j];
                arreglo.push(objeto);
            }
        }
    }
    return arreglo;
    // for(let a=0; a<arreglo.length; a++){
    //     console.log(arreglo[a])
    // }
}

let arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ]
console.log(oneProperty(arreglo, "name"));
console.log(oneProperty(arreglo, "edad")); */

/* 14. Guerra de palabras
Utils:
var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:
21,v:22,w:23,x:24,y:25,z:26}
Debés crear una función llamada `warWords` que reciba dos palabras como parámetro
y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en
el abecedario).
Ejemplo:
- warWord(“hola”, “chau”) debe retornar “hola” (36 > 33)
- warWord(“love”, “friendship”) debe retornar “friendship”
 */

/* function warWords (palabra, palabra2){
    let abc = {a : 1, b : 2, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10, k : 11, l : 12, m : 13, n : 14, o : 15, p : 16, q : 17, r : 18, s : 19, t : 20, u : 21, v : 22, w : 23, x : 24, y : 25, z : 26}
    let sumatoria1 = 0;
    let sumatoria2 = 0;
    for(let i=0; (i<palabra.length) || (i<palabra2.length); i++){
        for(let j in abc){
            if(palabra[i] === j){
                sumatoria1+=abc[j];
            }
            else if(palabra2[i]===j){
                sumatoria2+=abc[j];
            }
        }
    }

    if(sumatoria1 > sumatoria2){
        console.log(`${palabra} (${sumatoria1} > ${sumatoria2})`);
    }
    else{
        console.log(`${palabra2} (${sumatoria1} < ${sumatoria2})`);
    }
}

warWords("hola", "chau");
warWords("love", "friendship"); */

/* 15. Prefijos Telefónicos
Utils:
var prefijos = [54, 55, 56, 57, 58]
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro.
Deberá:
1. Generar un objeto desde dos arreglos dados. Deberá tener como propiedades,
los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo :
{
    54: “Argentina”,
    55: ”Brasil”,
    56: ”Ecuador”,
    57: ”Bolivia”
}
2. Validar si los dos primeros números del pasado por parámetro existen en el
objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este
número pertenece a X”.
3. En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros
países”
*/

/* function validarPrefijo(numero){
    let prefijos = [54,55,56,57,51,58,59];
    let paises = ["Argentina", "Brasil", "Chile", "Colombia", "Peru", "Venezuela","Bolivia"];
    let objeto = {};
    for(let i=0; i<paises.length&&i<prefijos.length;i++){
        objeto[paises[i]]= prefijos[i]      
    }

    for(let i in objeto){
        if(numero === objeto[i]){
            return `Este numero ${numero} pertenece a ${i}`;
        }
    }
    return `este numero ${numero} no pertenece a a nuestros paises`
}

console.log(validarPrefijo(55));
console.log(validarPrefijo(54));
console.log(validarPrefijo(51));
console.log(validarPrefijo(59));
console.log(validarPrefijo(60)); */

/* 16. {value: key} 
Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro.
Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de
dato fue ingresado como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas
las propiedades que sean un string puestas como key y el value deberá ser el key
anterior
Ejemplo:
- reverseKeys(344) debería devolver “error, input can’t be a number”
- reverseKeys([ ]) debería devolver “error, input can’t be an Array”
- reverseKeys(‘hola’) debería devolver “error, input can’t be a string”
var prueba = {
nombre: ‘santi’,
edad: 22,
nacionalidad: ‘de otro planeta’,
documento: 44444444
}
- reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’,
edad: 22,
‘’de otro planeta”: nacionalidad,
documento: 44444444
}
 */

/* function reverseKeys(objeto){
    let objeto2 ={}; 
    if(typeof(objeto) !== "object"){
        return (`error, input can´t be a ${typeof(objeto)}`)
    }
    else if(Array.isArray(objeto)){
        return (`error, input can´t be an Array`)
    }else{
        for(let key in objeto){
            objeto2[objeto[key]] = key
            //console.log(`${i} ${objeto[i]}`)
        }
    }
    //console.log(objeto2)
    // for(let a in objeto2){
    //     console.log(`${a} : ${objeto2[a]}`)
    // }
    return objeto2;
} 
let objeto = {
    nombre: "santi",
    edad: 22,
    nacionalidad: "de otro planeta",
    documento: 44444444
    }    
// reverseKeys(objeto);
console.log(reverseKeys(objeto)) */

/* 17. Palindromo
Deben crear una función llamada “palíndromo” que indique si una palabra es
palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
Definición de palíndromo aquí.
Ejemplo:
- palindromo(“anilina ”) debe retornar true
- palindromo(“Ana ”) debe retornar true
- palindromo(“Enrique”) debe retornar false */

/* function palindromo(pal) {
    let string = pal.toLowerCase()
    let mitad = Math.floor(pal.length/2);
    for ( let i = 0; i < mitad; i++ ) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo("anilina"));
console.log(palindromo("ana"));
console.log(palindromo("enrique")); */

/* 18. Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera
retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el
número a la derecha.
Ejemplo:
- rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
- rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2] */

/* function rotar(arreglo, numero){
    let nuevoArreglo =[];
    for(let i=arreglo.length-1; i>=arreglo.length-numero; i--){
        nuevoArreglo.unshift(arreglo[i]);
    }
    //return nuevoArreglo;
    for(let i=0; i<arreglo.length-numero; i++){
        nuevoArreglo.push(arreglo[i]); //
            
    }
    return nuevoArreglo;
}

console.log(rotar([1,2,3,4,5],2)); */

/* 19. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne
cuantos consecutivos similares hay en un string.
Ejemplo:
- consecutivosSimilares(“AAAA”) debe retornar 3
- consecutivosSimilares(“BBBBB”) debe retornar 4
- consecutivosSimilares(“ABABABAB”) debe retornar 0
- consecutivosSimilares(“BABABA”) debe retornar 0
- consecutivosSimilares(“AAABBB”) debe retornar 4 */

/* function consecutivosSimilares(string){
    let res=0;
    for(let i=1; i<string.length;i++){
        if(string[i-1] === string[i]){
            res+=1;
        }
    }
    return res;
}

console.log(consecutivosSimilares("AAAA"));
console.log(consecutivosSimilares("BBBBB"));
console.log(consecutivosSimilares("ABABABAB"));
console.log(consecutivosSimilares("BABABA"));
console.log(consecutivosSimilares("AAABBB")); */

////////////////////////////////////////////////////////////////
//////////////////////////   FIN  //////////////////////////////
////////////////////////////////////////////////////////////////