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

//2//

function printNumbers(array) {
    for (let index = 0; index < array.value; index++) {
        console.log(index);
    }
}

console.log(printNumbers(5)); // Erwartete Ausgabe: 1, 2, 3, 4, 5