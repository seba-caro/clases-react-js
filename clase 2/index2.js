/*const nombre = "Mauricio";
const apellido = "Cuello";
const edad = 32;

console.log("Hola, me llamo " + nombre + " " + apellido + " y el año que viene voy a tener " + (edad + 1) + " años.")

console.log(`Hola, me llamo ${nombre} ${apellido} y el año que viene voy a tener ${edad + 1} años.`) ------ forma mas facil de crear -----

const bienvenida = function(name){return `Bienvenido ${name} al curso!`}

console.log(`${bienvenida("Mauricio")}, espero que lo disfrutes!`)

console.log(`
Hola, me llamo ${nombre} ${apellido} 
y el año que viene voy a tener 
${edad + 1} años.
`)

*/


/*
const persona1 = { 
    name: "Mauricio",  
    lastName: "Cuello",  
    age: 32}
    
    const persona2 = {
        name: "Lionel",  
        lastName: "Messi",  
        age: 35}
    const persona3 = {
        name: "Cristiano",  
        lastName: "Ronaldo",  
        age: 38}
        
    const persona4 = {...persona1}; -----Asi podemos copiar el dato sin modificar lo anterior ya que es un string-----
    persona4.name = "Juan"
    
    const data = [persona1, persona2, persona3, persona4]
    
    console.table(data)


*/





/*
let mi_arreglo1 = [10, 20, 30, 40];
let mi_arreglo2 = mi_arreglo1

mi_arreglo1.push(100)
console.log(mi_arreglo1)
console.log(mi_arreglo2)

---- los datos son iguales por lo cual afectan a ambos. son valores de referencia
*/





/*
let mi_arreglo1 = [10, 20, 30, 40];
let mi_arreglo2 = [...mi_arreglo1, 100] ---- spred operator. para insertar valor a solo el arreglo 2. es entre corchetes porque lo hago sobre el arreglo
console.log(mi_arreglo1)
console.log(mi_arreglo2)


*/

/*
let mi_arreglo1 = [10, 20, 30, 40];

let mi_arreglo2 = mi_arreglo1.map( (elem) =>{ 
    return elem * 2 
})

console.log(mi_arreglo1);
console.log(mi_arreglo2)

*/

/*



let mi_arreglo1 = [10, 20, 30, 40];

let mi_arreglo2 = mi_arreglo1.map( (elem) => elem * 2)
// retono implicito

const numeros = [1,2,3,4,5,6,7,8,9,10];

// let sumaPares = 0;

// for (let i = 0; i < numeros.length; i++) {
    //   if (numeros[i] % 2 === 0){
        //     sumaPares += numeros[i]
        //   }
        // }

const sumaPares = numeros.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0)

console.log(sumaPares)
*/

/*

const persona1 = {  
    name: "Mauricio", 
    lastName: "Cuello",
    age: 32}
    
const nombres = ["Mauricio", "Lionel", "Cristiano"];

const { name, age } = persona1

const [,,n3] = nombres

console.log(n3)

*/

const persona1 = {  
    name: "Mauricio", 
    //lastName: "Cuello",
    age: 32
}

    let msg;

    const {lastName} = persona1

//if(!lastName){
  //  msg = "No tiene apellido"
//}
//else {
  //  msg = 'Su apellido es ${lastName}'
//}


msg = !lastName ? "No tiene apellido" : 'Su apellido es ${lastName}'

console.log(msg)