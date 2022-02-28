// Inizializzazione variabile riferita al primo numero
const mainNumber = prompt(`Inserisci un numero.`);
document.getElementById("main-number").innerHTML=`${mainNumber}`;

// Inizializzazione variabile riferita al secondo numero
const otherNumber = prompt(`Inserisci un numero.`);
document.getElementById("other-number").innerHTML=`${otherNumber}`;

// Inizializzazione variabile riferita all'output
let output = document.getElementById("output");

// Istruzioni condizionali per verifica output du DOM  e in console
if (mainNumber > otherNumber){
    output.innerHTML=`Il primo numero è il maggiore.`;
    console.log(`Il primo numero è il maggiore.`);
} else if (mainNumber < otherNumber) {
    output.innerHTML=`Il secondo numero è il maggiore.`;
    console.log(`Il secondo numero è il maggiore.`);
} else {
    output.innerHTML=`I numeri hanno lo stesso valore.`;
    console.log(`I numeri hanno lo stesso valore`);
}