// snack-d
// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo

let arrayA = [1, 2, 3, 4, 5];


function rimuoviDallaCoda(arrayA) {
    
    let arrayB = [];

for (let i = 0; i < arrayA.length - 1; i++) {

    arrayB[i] = arrayA[i]

}

return arrayB

}

console.log(rimuoviDallaCoda(arrayA))