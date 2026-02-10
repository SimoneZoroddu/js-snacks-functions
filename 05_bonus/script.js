/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

const d = new Date();
let hour = d.getHours();

console.log(hour);


// Dichiara la funzione qui.
function name_string(names) {
    let namestring = ''
    for (let i = 0; i < names.length; i++) {
        const char = names[i]
        namestring += char
        if (hour < 13) {
            return `Buongiorno ${names}`
        } else if (hour > 17) {
            return `Buonasera ${names}`
        } else {
            return `Buon Pomeriggio ${names}`
        }
    }
}


// Invoca la funzione qui e stampa il risultato in console

console.log(name_string(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.