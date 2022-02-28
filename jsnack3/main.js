// Creazione e assegnazione variabile di somma prima del ciclo for
let sumNumber = 0;

// Ciclo for per inserire 10 numeri
for (let i=0; i < 10; i++){
    sumNumber += parseInt(prompt("inserisci un nuovo numero."));
}

// Modifica DOM tramite innerHTML
document.getElementById("output").innerHTML=`La somma dei numeri è pari a ` + sumNumber;

// Verifica tramite console
console.log(sumNumber);
