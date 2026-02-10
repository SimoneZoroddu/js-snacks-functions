/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

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


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// prove non funzionanti
/*
const word = 'javascript';

let vocals = ['a', 'e', 'i', 'o', 'u']


function vocal(words) {
    let word_vocal = []
    for (let i = 0; i < words.length; i++) {
        let single_char = words[i];
        //console.log('single char', single_char);
        let single_vocal = ''
        for (let i = 0; i < vocals.length; i++) {
            let vocal = vocals[i];
            //console.log(vocal);
            single_vocal += vocal
        }
        if (single_char == single_vocal) {
            word_vocal.push(single_char)
        }
    }
    return word_vocal
}


console.log(vocal(word));



// console.log(single_vocal);
*/