
const newArray = [];

let newNumber = 0;

while (newNumber < 200){
    newArray.push(parseInt(prompt(`Inserisci un numero`)));
    newNumber += newArray[newArray.length - 1];

    console.log("La somma degli elementi è uguale a " +newNumber);
    console.log(newNumber)
    
}
document.getElementById("output").innerHTML="La somma degli elementi è uguale a " +newNumber;
console.log(newArray);