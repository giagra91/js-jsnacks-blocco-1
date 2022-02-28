// Inizializzazione array e assegnazione
const peopleList =["Luca", "Roberto", "Laura", "Roberta", "Luigi", "Riccardo", "Stefano", "Alessandro", "Teresa", "Valentina"];

// Variabile riferita al nome dell'utente
const userName = prompt("Inserisci il tuo nome");

// Variabile flag riferita alla verifica del NamedNodeMap, di fase falsa
let nameFound = false;

// ciclo for per verifica del contenuto dell'array
for (let i = 0; i < peopleList.length ; i++){

    if (peopleList[i].toLowerCase() === userName.toLowerCase()){
        nameFound = true;
        console.log(nameFound);
    }
}

// Istruzioni condizionali per verifica post ciclo for
if (nameFound === true){
    nameFound = true;
    console.log("Puoi accedere.");
    document.getElementById("output").innerHTML=`Puoi entrare alla festa di Gatsby!`;
} else {
    nameFound = false;
    document.getElementById("output").innerHTML=`Non puoi entrare alla festa di Gatsby!`;
    console.log("Non puoi accedere.")
}


// Soluzione con Indexof()
// if (peopleList.indexOf(userName) > -1 ) {
    
//         console.log("Puoi accedere.");
//         document.getElementById("output").innerHTML=`Puoi entrare alla festa di Gatsby!`;
//     } else {
//         document.getElementById("output").innerHTML=`Non puoi entrare alla festa di Gatsby!`;
//         console.log("Non puoi accedere.")
//     }
// }


// Soluzione con includes
// if (peopleList.includes(userName) ) {
    
//         console.log("Puoi accedere.");
//         document.getElementById("output").innerHTML=`Puoi entrare alla festa di Gatsby!`;
//     } else {
//     document.getElementById("output").innerHTML=`Non puoi entrare alla festa di Gatsby!`;
//     console.log("Non puoi accedere.")
// }
