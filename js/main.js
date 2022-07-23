/*
Ronda 1

realizar una funcion que reciba como parametro el nombre completo de un koder y retorne sus iniciales.
Ejemplo:

input: 'Fernanda Palacios Vera'

Output: f, p, v.

*/

//forma 1
var name = prompt("forma 1: dime un nombre completo")
let divideName = name.split(" ")
let suma=[]
for(let i=0 ; i < divideName.length; i++){
let word = divideName[i]
let initial = word.charAt(0)+". "
suma = suma + initial
}
console.log(suma)
console.log(" ")

//forma 2
const getFirstLetter = text => {
    let newArr = text.split(" ");
    let newText = "";
    newArr.map(item => newText += console.log(item.charAt(0)+". "))
    return newText
}
getFirstLetter(prompt("forma 2: dime un nombre completo"))
console.log(" ")


//forma 3
function getInitial(name){
    const namesplit = name.split(" ")
    console.log(namesplit)

    let initials = ''
    namesplit.forEach((word)=>{
        console.log(word.charAt(0))
       initials += word.charAt(0) + '. '
    })
    return initials
}
getInitial(prompt("forma 3: dime un nombre completo"))
console.log(getInitial("Jonathan Reyes Alatorre"))
console.log(" ")


//forma 4
function getInitial0(name0){
    const namesplit0 = name0.split(" ")
    console.log(namesplit0)

    let initials0 = []
    namesplit0.forEach((word)=>{
        console.log(word.charAt(0))
       initials0.push(word.charAt(0)+" ")
    })
    return initials0.join()
}

getInitial0(prompt("forma 4: dime un nombre completo"))
console.log(getInitial0("Jonathan Reyes Alatorre"))
console.log(" ")

/*
Realiza una funcion que reciba n parametros de tipo string y y validar por cada string cuantas vocales tiene y retornal el resultado en un objeto.
Ejemplo:

input: 
    string1: 'Hola Mundo'
    srting2: 'soy fullstack'
    .
    .
    .

    Output:
    {
        Hola Mundo: 4,
        soy fullstack:3
    }

*/

/*let text0 = "The rain in SPAIN stays mainly in the plain";
let result = text0.match(/ain/g);

console.log(text0)
console.log(result)*/


//forma 1 incompleta
const getVocal = text => {
    let result = {
        [text]: text.match(/[aeiou]/gi).length
    }
    return result;
}
console.log(getVocal("Hola Mundo"))
console.log(getVocal("soy fullstack"))
console.log(getVocal(prompt("Digita un texto con vocales")))
console.log(" ")

//forma 2
//...string genera un arreglo por cada parametro 
function getQuantityVowels(...string) {
    console.log("string",string)
    const object = []
    string.forEach((str)=>{
        console.log("str",str)
        const quantity = str.match(/[aáeéiíoóuú]/gi).length
        console.log("quantity",quantity)
        object[str] = quantity
    })
    return object
}

console.log(getQuantityVowels(prompt("Digita un texto")))
console.log(getQuantityVowels("Hola Mundo", "soy fullstack" ))
console.log(getQuantityVowels("Jonathan", "Reyes", "Alatorre" ))
console.log(" ")