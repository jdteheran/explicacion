/*
2520 es el numero mas pequeño que puede ser dividido exactamente por lo numeros del 1 al 10.
Encontrar el numero mas pequeño que pueda ser devivido por los numero del 1 hasta el 20?.
*/

let numero = 2
let sw = true

let limite = 10

while (sw) {
    
    let i
    for (i = 1; i <= limite; i++) {
        if (numero % i != 0) {
            break
        } 
    }

    if (i == limite) {
        sw = false
    } else {
        numero = numero + 1
    }
}

console.log(numero);