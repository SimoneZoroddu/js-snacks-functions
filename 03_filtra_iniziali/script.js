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
// Ho creato 2 funzioni che non siano collegate ad una variabile cosi che siano a se per questo ho messo let ArrayForChar invece di names

/// divido i vari elementi dentro l array
function name_array(array) {
    let single_name = []
    for (let i = 0; i < array.length; i++) {
        const single_array = array[i];
        single_name.push(single_array)
    }
    return single_name
}

//console.log(name_array(names));
//creo una variabile con dentro la function e l array specificato
let ArrayForChar = name_array(names)

//creo una funzione che cerca solo la lettera che voglio
function char_in_names(char) {
    let single_char = []
    for (let i = 0; i < ArrayForChar.length; i++) {
        const single_array_char = ArrayForChar[i];  
        if (single_array_char.indexOf(char) + 1) { //// +1 perche indexof partendo da 0 da falso
            single_char.push(single_array_char)
        }
    }
    return single_char
}

// Invoca la funzione qui e stampa il risultato in console

// chiamo la funzione con la lettera che voglio
console.log(char_in_names('A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// correzzione
/*
const names_2 = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function filterNamesByInitial(names, initial) {
    const filteredNames = []
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name[0] == initial) {
            filteredNames.push(name)
        }
    }
    return filteredNames
}

console.log(filterNamesByInitial(names_2, 'A'));
*/
//correzzione finita