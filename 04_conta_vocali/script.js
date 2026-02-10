/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
/*
const word = 'javascript';


// Dichiara la funzione qui.

// let vocals = ['a', 'e', 'i', 'o', 'u']


function vocal(words) {
    let word_vocal = []
    for (let i = 0; i < words.length; i++) {
        let single_char = words[i];
        //console.log('single char', single_char);
        if (single_char == 'a' || single_char == 'e' || single_char == 'i'  || single_char == 'o' || single_char == 'u') {
            word_vocal.push(single_char)
        } 
    }
    return word_vocal
}

// // Invoca la funzione qui e stampa il risultato in console

console.log(vocal(word));
*/
//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// FUNZIONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

const word_2 = 'javascript';
// creo una variabile con le vocali
let vocals_2 = ['a', 'e', 'i', 'o', 'u']

function vocal(words) {
    //creo una variabile dove pushare le vocali che finisco il ciclo ed escono
    let word_vocal = []
    // creo un ciclo della parola che voglio controllare
    for (let i = 0; i < words.length; i++) {
        let single_char = words[i];
        //console.log('single char', single_char);
        //creo un ciclo all interno che ogni volta che prende una lettera controllare anche le vocali
        for (let i = 0; i < vocals_2.length; i++) {
            let vocal = vocals_2[i];
            //console.log(vocal);
            // e se trova una vocale uguale alla prima lettera del primo ciclo la pusha fuori dai cicli
            if (single_char == vocal) {
                word_vocal.push(single_char)
            }
        }
    }
    // e per finire do il valore alla funzione con il return dicendogli di prendere le vocali pushare dai for
    return word_vocal
}

console.log(vocal(word_2));



// console.log(single_vocal);
