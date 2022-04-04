 /*MAP (ES6):
 Es un objeto que almacena pares de claves-valor. 
 Podemos usar objetos o valores primitivos.
 Objetos y Maps son similares en cuanto a funcionamiento
 (pares clave-valor)
 - Las claves de un objeto son String o Symbols; las Map pueden ser
 de cualquier tipo
 - Para saber el tamaño de un Map usamos la propiedad size. 
 En objetos, hay que recorrerlo manualmente. 
 -El Map es iterable, podemos usar metodos. Para iterar objetos 
 primero necesitamos las claves y luego iterar sobre ellas. */

let objetoMap = new Map([
    [1, 'Roberto'],
    [7, 'Julieta'],
    ['carne', 'Scooby']
]);
console.log(objetoMap)

//PROPIEDADES
// size: tamaño del map
console.log(objetoMap.size) //3
// o tambien puedo hacer:
console.log(`el tamaño del map es: ${objetoMap.size}`) // el tamaño del map es 3
//va sin parentesis xq es propiedad, no metodo. 

// METODOS
//GET: devuelve el valor asociado a una clave o un 'undefined
console.log(objetoMap.get(7)) //Julieta
console.log(objetoMap.get(5)) //undefined
console.log(objetoMap.get('carne'))//Scooby

//SET: establece un valor asociado a una clave, si esta ya existe, actualiza
objetoMap.set(4,'Matias')
console.log(objetoMap.get(4)) // Matias
 
objetoMap.set(1, 'Clarisa') //Clarisa
console.log(objetoMap.get(1))// reemplaza Roberto por Caarisa

//HAS: comprueba si el map tiene un elemento a partir de su clave
console.log(objetoMap.has('carne')) // retornara true
console.log(objetoMap.has(5)) // retornara false
console.log(objetoMap) 

//DELETE: borra un elemento segun la clave que le pases
objetoMap.delete(4)
console.log(objetoMap)


//CLEAR: borra todos los elementos del map (borra el contendio sin borrar el contenedor)
// objetoMap.clear() 
// console.log(objetoMap)

//ITERADORES:
//keys: devuelve un iterador con las claves
//values: devuelve un iterador con los valores
//entries: devuelve un iterador con los pares (clave y valor)

const iteratorKeys=objetoMap.keys()
console.log(iteratorKeys)

const iteratorValues=objetoMap.values()
console.log(iteratorValues)

const iteratorEntries= objetoMap.entries()
console.log(iteratorEntries)
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().value);
console.log(iteratorEntries.next().done); // true si termino de iterar o false si todavia quedan entries (en este caso true)

