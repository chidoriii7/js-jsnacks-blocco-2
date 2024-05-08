// snack-b
// scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

// array dei tre colori primari
let coloriPrimari = ['rosso','verde','blu'];

let coloreInserito = '';

let risultato = trovaIndice(coloriPrimari, coloreInserito)

function trovaIndice(coloriPrimari, coloreInserito) {
    
   

    for (let i = 0 ; i < coloriPrimari.length; i++) {

    if (coloreInserito === coloriPrimari[i]) {

        return i
        
    } 
}
        
  return -1;     
}

console.log(risultato)