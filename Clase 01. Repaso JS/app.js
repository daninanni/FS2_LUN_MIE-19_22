// //objeto console

// console.time('Running time')
// let perro={
//     nombre:'felicia',
//     color:'negro',
//     hembra: true,
//     edad:5,
// };

// console.log('Hello word')
// console.info('hola mundo')
// console.error('que error te tiro, mira... jojo')
// console.table(perro)
// console.warn('warning!', {message:'si, la cague'})
// console.log('\033[32m ahora el texto es verde')

// for(let i=0; i<9; i++){
// console.count('iteration')
// }

// const x =5;
// const y=10;
// console.assert(x+y === 16, 'dame un falso') // esto no se imprime

// setTimeout(()=> {
//     console.log(perro)
//     console.timeEnd('Running time')
// },3000);

// console.clear()


// // LOOSE VS STRICK EQUALITY------------------

// const num1=10
// const num2='10'
// num1 == num2 // retorna true, esto es un loose equality
// num1 === num2 // retorna false, esto es un strict equality
// console.log(typeof num1, typeof num2)


// //HOISTING-----------------------------

// hoisting: jerarquizar algunas cosas del codigo de js, 
//declaracion de funciones y variables, pero no su inicializacion

// 'use strict'  // strict mode: no se pueden usar variables no declaradas, (solo var), se pude usar de forma local, x ej dentro de una funcion. 

// saludar('madroño') 
// despedir('madroño')
// hoisted='esta variable es asignada andes de declararla'
// console.log(hoisted)
// console.dir(hoisted)
// var hoisted   // esta declaracion, aunq venga despues de su comando, 
// // se la lleva para arriba, es decir, siempre y cuando la variable este declara
// // no importa en que lugar este, como en este caso puede ser al final. 
// //esto solo pasa con 'var' que es muy global, es una llamada al desastre!
// //let hoisted; // hoisting no elevan ni let ni const

// function saludar(n) {  // me la subio tb
// console.log(`hola ${n}`)
// }
 
// const despedir =(n) => {
//     console.log(`chauchis ${n}`)
// }                                //esta no funciona xq se ekeva la declaracion
// pero no la inicializacion  (basicamente xq tiene const)   

// //------------------------------------------------------

// 'use strict'
// let persona;
// let nacimiento;
// function info() {
//     persona= 'fede';
//     nacimiento=1900;
//     console.log(`${persona}, nacio en ${nacimiento}`)
// };
// info()
//no se pude usar variables no declaradas fuera de una fn
//el modo estricto tiene ambito global.
//pero se puede usar el modo estricto y estara contenido en ese scope

// //SPREAD OPERATOR----------------------------------------

//permite copiar rapidamente todo o una parte de un arreglo
//u objeto extstente dentro de otro array u objeto

// const numbers =[1,2,3,4,5,6];
// const [one, two, ...rest]=numbers // rest es un nombre convencional
// console.log('numbers:', numbers)
// console.log('one',one) //1
// console.log('two:', two)//2
// console.log('rest:', rest) //3,4,5,6

// const myVehicle={
//     make:'ford',
//     model:'T',
//     color:'negroide'
// };
// const updateMyVehicle = {
//     type:'car',
//     year:'1900',
//     color:'negron'
// };
// const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// console.log(myUpdatedVehicle)
// //la propiedaddes nuevas se agregan, y las que ya existian, se sobreescriben


// //otro caso: 
// console.log(Math.max(10,20,50)) //50
// const arrNums =[10,20,50] 
// console.log(Math.max(arrNums)) //NaN
// console.log(Math.max(...arrNums)) //50 


// //Contatenar 2 arrays
// const names=['juana', 'lucia', 'lucrecia']
// const num =[10,20]
// const arrCombined =[...names, ...num]
// console.log(arrCombined)

// //otra cadena:
// const saludo ='hola'
// console.log([...saludo]) //['h','o','l','a']


//REST PARAMETERS: parametros rest
//La sintaxis de los parametros rest nos permite representar
//un nro indefinido de argumentos en un array

// en el estandar ES% (viejo) se accedia a los argumentos asi:
function varArgs(a='foo', b='bar'){
    console.log('argumentos explicitos');
    console.log('a:',a)
    console.log('b:',b)
    console.log('resto de parametros:',arguments[2])//caniche, (objeto) 
    //sino especifico, me tira todo el resto
}
varArgs('uno', 'dos','caniches', NaN, 'mi vieja', 44)

// A partir de ES6:
//*rest es un nombre convencional, pero se usa siempre

function varArgs2(a,b,...rest){
    console.log('argumentos explicitos');
    console.log('a:',a)
    console.log('b:',b)
    console.log('resto de parametros:', rest)//caniche,(array)
}
varArgs2('uno', 'dos','caniches', NaN, 'mi vieja', 44)
