//for loop excersises//

//add elements in array together//

let sum = 0;
function sumArray(array) {
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)
sum = 0;
console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)

//add numbers step by step until you reach the entered number//

function printNumbers(num) {
    let base = "";
    for (let i = 1; i <= num; i++) {
        if (i === num) {
            base = base + i;
        } else {
            base = base + i + ",";
        }
    }
    console.log(base);
}

printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5
printNumbers(3); // Erwartete Ausgabe: 1, 2, 3

//add numbers in a condescending manner step by step until you reach the entered number//

function printNumbersReverse(num) {
    let base = "";
    for (let i = num; i > 0; i--) {
        if (i === 1) {
            base = base + i;
        } else {
            base = base + i + ",";
        }
    }
    console.log(base);
}

printNumbersReverse(5); // Erwartete Ausgabe: 5, 4, 3, 2, 1   
printNumbersReverse(3); // Erwartete Ausgabe: 3, 2, 1  

//put every 3rd element in a new array (including the first element)//

function printEveryThirdElement(arr) {
let newArr = [];
for(let i = 0; i < arr.length; i += 3) {
   newArr.push(arr[i]);
}
return newArr;
}

console.log(printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Erwartete Ausgabe: 1, 4, 7
console.log(printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f'])); // Erwartete Ausgabe: 'a', 'd'
