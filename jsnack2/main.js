// Inizializzazione variabile riferita alla prima parola
const firstWord = prompt(`Inserisci una parola.`);
document.getElementById("first-word").innerHTML=`${firstWord}`;

// Inizializzazione variabile riferita alla seconda parola
const secondWord = prompt(`Inserisci una parola.`);
document.getElementById("second-word").innerHTML=`${secondWord}`;

// Inizializzazione variabile riferita all'output
let output = document.getElementById("output");

// Istruzioni condizionali per verifica output du DOM  e in console
if (firstWord.length > secondWord.length) {
    console.log(secondWord, firstWord);
    output.innerHTML=`${secondWord} - ${firstWord}`;
} else if ( secondWord.length > firstWord.length) {
    console.log(firstWord, secondWord);
    output.innerHTML=`${firstWord} - ${secondWord}`;
} else {
    console.log(`Le parole hanno la stessa lunghezza.`)
    output.innerHTML="Le parole hanno la stessa lunghezza.";
}
