
let userNumber = parseInt(prompt("inserisci un numero"));

while (isNaN(userNumber)){
    userNumber = parseInt(prompt("inserisci un numero"));
}

if (userNumber >= 300){
    userNumber=300
}

for (let i = 0; i < userNumber; i++){
    const newArray = [];

    // Alternativa con ciclo while
    // while (newArray.length < 10){
    for (let x = 0; x < 10 ; x++){
        newArray.push((Math.floor(Math.random() *4528) +4));
    }
    console.log(newArray);
    document.getElementById("output").innerHTML+= i + " - " + newArray + "<br>";
}