// Creazione variabile per far inserire un numero all'utente
const userNumber = prompt(`Inserisci un numero di 7 cifre`);

// Variabile della somma, inizialmente con valore 0
let sum = 0;

// Ciclo for per prendere valori ed effettuare la somma
for (let i = 0; i < userNumber.length; i++){
    sum += parseInt(userNumber.charAt(i));
}

// Inserimento risultato nel DOM
document.getElementById("output").innerHTML=`Il risultato della somma è `+ sum;

// Verifica risultato tramite console
console.log(sum)
