/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// console.log(names);

// Dichiara la funzione qui.
function start_array(array) {
    // anche qua non serve ciclare ogni nome perche puoi gia selezionare ogni nome senza ciclarlo
    // let  single_name = []
    // for (let i = 0; i < array.length; i++) {
    //     const single_array = array[i];
    //     single_name.push(single_array)
    // }
    // console.log(single_name);
    
    let start_char = []
    for (let i = 0; i < array.length; i++) {
        const single_char = array[i];
        // controllo che divide ogni parole in questo modo
        //console.log('single char', single_char);
        //pusha solo la lettera 0 di ogni parola
        start_char.push(single_char[0])
    }
    return start_char
}

// Invoca la funzione qui e stampa il risultato in console

console.log(start_array(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//info