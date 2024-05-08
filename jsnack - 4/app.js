
// Crea due array che hanno un numero di elementi diversi.
const array1 = [];


const array2 = [1, 2, 3, 4];


// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


while (array1.length !== array2.length) {                                   


    if(array1.length > array2.length) {

        array2.push(Math.floor((Math.random() * 9) + 1));
        console.log(array1.length, array2.length);
        console.log('ho aggiunto un numero casuale all array 2');

    } else if (array1.length < array2.length) {

        array1.push(Math.floor((Math.random() * 9) + 1));
        console.log('ho aggiunto un numero casuale all array 1');
        console.log(array1.length, array2.length);

    } 
    // else {

    //     break
        
    // }
    
}

    console.log('gli array hanno lo stesso numero di elementi');