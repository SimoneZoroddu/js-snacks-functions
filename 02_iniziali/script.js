/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log(names);

// Dichiara la funzione qui.
function start_array(array) {
    // let  single_name = []
    // for (let i = 0; i < array.length; i++) {
    //     const single_array = array[i];
    //     single_name.push(single_array)
    // }
    // console.log(single_name);
    
    let start_char = []
    for (let i = 0; i < array.length; i++) {
        const single_char = array[i];
        start_char.push(single_char[0])
    }
    return start_char
}

// Invoca la funzione qui e stampa il risultato in console

console.log(start_array(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//info