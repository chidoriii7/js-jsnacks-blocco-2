// snack-e
// scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione

let arrayA = [1, 2, 3, 4, 5]

function rimuoviDallaTesta(arrayA) {

    let arrayB = [];

    for(let i = 1; i < arrayA.length; i++) {
        
        arrayB[i - 1] = arrayA[i];

    }
        
    return arrayB
}

console.log(rimuoviDallaTesta(arrayA));