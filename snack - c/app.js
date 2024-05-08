// snack-c
// scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola


let array = ['nero', 'bianco', 'rosso', 'arancione', 'blu', 'verde']

// console.log(array)

function stampa(array) {
    
    let stringa = '';

    for (let i = 0; i < array.length; i++) {
    
        if (i === 0) {

            stringa = stringa + '' + array[0] 
            continue
        }


        stringa = stringa + ',' + array[i]
    
    }

    return stringa
}

let risultato = stampa(array)

console.log(risultato);