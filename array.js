//Array Excersises//

//search for specific element in array//

function containsElement(array, element) {
    return array.includes(element);
}

console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false


//search Index of element in array//

function findElementIndex(array, element) {
    return array.findIndex(searchedIndex);

    function searchedIndex(array) {
        return array === element;
    }
}

console.log(findElementIndex([10, 20, 30, 40], 30)); // 2
console.log(findElementIndex([10, 20, 30, 40], 50)); // -1


//remove first element of array and return new array//

function removeFirstElement(array) {
    array.shift();
    return array;
}

console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]
console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']


//add new elements to array and return new array//

function addElementToStart(array, element) {
    array.unshift(element);
    return array;
}

console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]
console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']


//"slice" spedific elements out of an array and return with a new array//

function getSubArray(array, start, end) {
    let newarray = array.slice(start, end);
    return newarray;
}

console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']

//6//

function joinArray(array, separator) {
    let newarray = array.join(separator);
    return newarray;
}

console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"
console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"