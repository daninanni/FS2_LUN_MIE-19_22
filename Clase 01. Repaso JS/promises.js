const data = require("./helpers/data")
 
// 1 sincrono (retorna los datos)

// const getData =() => {
//     console.clear();
//     return data;
// };
// console.log(getData())

//2 simular async code (retorna undefined)

//  const getData =() => {
//      console.clear();
//      setTimeout(() => data,2000)
//  };
//  console.log(getData())

//esto se resuelve con uma promesa
//3 PROMISES retornara el resultado (resolve, reject) cuando haya terminado el ciclo
// estados: pending, fullfilled, rejected  

const getData =()=>{
    const err = false // esto es para simular error
    console.clear();
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (err) {
                reject('error, se fue todo al chango')
            } else {
                resolve(data)
            }  
        },2000)
    })
};

getData()
.then((data)=>console.log(data))   //un solo then xq no hay que parsear datos, nice!
.catch((err)=>console.log(err))

