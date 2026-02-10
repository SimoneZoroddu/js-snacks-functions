/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/*
function name_char(array) {
    let single_name = []
    for (let i = 0; i < array.length; i++) {
        const single_array = array[i];
        if (single_array.indexOf('A') + 1) { //// +1 perche indexof partendo da 0 da falso
            single_name.push(single_array)
        }
    }
    return single_name
}
*/

// console.log(name_char(names));

/// penso si puo fare anche con 2 funzioni una per l array e una per il carattere

function name_array(array) {
    let single_name = []
    for (let i = 0; i < array.length; i++) {
        const single_array = array[i];
        single_name.push(single_array)
    }
    return single_name
}


function char_in_names(char) {
    let single_char = []
    for (let i = 0; i < char.length; i++) {
        const element = char[i];
        
    }
}







// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]