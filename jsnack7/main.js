const numbers = [];
let sumNumber = 0;

for (let i = 0; i < 10; i++){
    
    let newNumbers = Math.floor(Math.random(i)* 10000 );
    numbers.push(newNumbers);
    sumNumber += newNumbers;
}

console.log(numbers);
console.log(sumNumber);
console.log(sumNumber / numbers.length);