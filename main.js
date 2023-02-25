// 1
function printArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], 'array');
    }
}

function newPrintArrayValues(arr) {
    console.log(arr.shift(), "array");

    if (arr.length != 0) {
        newPrintArrayValues(arr);
    }
}

// newPrintArrayValues([1, 2, 3]);
// printArrayValues([1, 2, 3]);


// 2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9, 10];

let newArr = arr1.concat(arr2, arr3);
// console.log(newArr);


// 3
let arr = [1, 2, 3, 4, 5];
// console.log(arr.at(-1));


// 4
function countChar(str, symb) {
    for (var count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));

    return console.log(count);
}

// countChar('loremipsumdolor', 'o');