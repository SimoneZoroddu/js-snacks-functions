/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let vocals = ['a', 'e', 'i', 'o', 'u']


function vocal(words) {
    for (let i = 0; i < words.length; i++) {
        const single_char = words[i];
        for (let i = 0; i < vocals.length; i++) {
            const element = vocals[i];
            let vocals_false = false
            if (single_char == element) {
                vocals_false += true
            }
            if (vocals_false) {
                return single_char
            }   
        }
    }
}

// // Invoca la funzione qui e stampa il risultato in console

console.log(vocal(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)


