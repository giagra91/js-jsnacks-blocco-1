// Inizializzaione array e assegnazione
const userNumber = [];

// Ciclo for per inserire e aggiungere il numero all'array
for (let i=0; i < 7; i++){
    let newNumber = parseInt(prompt(`Inserisci un numero`));

    if ((newNumber % 2 != 0) && (!isNaN(newNumber))) {
        userNumber.push(newNumber);
        console.log(userNumber);
    }
}

