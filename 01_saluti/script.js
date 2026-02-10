/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function name_string(name) {
    let namestring = '' // si puo mettere anche qua ciao facendo 
    for (let i = 0; i < name.length; i++) {
        const char = name[i]
        namestring += char
    }
    return `ciao ${namestring}`
}

// correzzione



// Invoca la funzione qui e stampa il risultato in console

console.log(name_string(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario

