// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

function reverseNumber(x) {
    let a = x.toString();
    b = '';
    for (let i = a.length - 1; i >= 0; i--) {
        b += a[i];
    }
    return (parseInt(b));

}
let y = reverseNumber(321);
console.log(y);


// Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function isPalindrome(y) {
    let b = '';
    for (let i = y.length - 1; i >= 0; i--) {
        b += y[i];
    }
    if (b === y) {
        return true;
    }
    else {
        return false;
    }

}

let a = isPalindrome("wow")
console.log(a);
a = isPalindrome("do geese see god?")
console.log(a);


//Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g

function combineString(str) {
    let result = [];

    function generateCombinations(start, prefix) {
        if (prefix.length > 0) {
            result.push(prefix);
        }

        for (let i = start; i < str.length; i++) {
            generateCombinations(i + 1, prefix + str[i])
        }

    }
    generateCombinations(0, "");
    return (result);
}

y = combineString("hell");
console.log(y);


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabeticOrder(x) {
    let a = [];
    for (let i = 0; i < x.length; i++) {
        a.push(x.charCodeAt(i));
    }
    let b = [];
    a = a.sort();
    for (let i = 0; i < a.length; i++) {
        b.push(String.fromCharCode(a[i]));
    }
    return (b.join(""))

}

let j = alphabeticOrder("hello");
console.log(j);

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.

function capitalizeWords(str) {
    // split the string into an array of words
    const words = str.split(' ');

    // loop through each word and convert the first letter to upper case, and join it with rest of the word using slice
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const capitalizedWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
        words[i] = capitalizedWord;
    }
    return words.join(' ');
}

j = capitalizeWords("my name is manas");
console.log(j);

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.

function longestWord(str) {
    // split the string into an array of words
    const words = str.split(' ');
    let len = [];

    for (let i = 0; i < words.length; i++) {
        len.push(words[i].length);
    }
    return (words[len.indexOf(Math.max(...len))]);
}

j = longestWord("my name is manas");
console.log(j);


//7. Write Js function to count number of vowels in a string
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase();

        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}

j = countVowels("my name is manas");
console.log(j);

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.

function isPrime(num) {

    if (num < 2) {
        return false;
    }


    if (num === 2) {
        return true;
    }


    if (num % 2 === 0) {
        return false;
    }

    // loop from 3 to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) { // if the number is divisible by i, it's not prime
            return false;
        }
    }

    // if we get here, the number is prime
    return true;
}

j = isPrime(32);
console.log(j);

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function getType(a) {
    return (typeof (a));
}

let str = "hello";
let num = 42;
let bool = true;
let obj = {};
let func = function () { };
let undef = undefined;

console.log(getType(str)); // "string"
console.log(getType(num)); // "number"
console.log(getType(bool)); // "boolean"
console.log(getType(obj)); // "object"
console.log(getType(func)); // "function"
console.log(getType(undef)); // "undefined"


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n) {
    idMatrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                row.push(1);
            }
            else {
                row.push(0);
            }

        }
        idMatrix.push(row)
    }
    return idMatrix;
}

j = identityMatrix(3);
console.log(j);

//11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function findSecondLowestAndGreatest(numbers) {
    // Sort the array in ascending order
    numbers.sort(function (a, b) {
        return a - b;
    });

    var secondLow = numbers[1];

    // Find the second greatest number
    var secondGreat = numbers[numbers.length - 2];

    // Return an array with the second lowest and second greatest numbers
    return [secondLow, secondGreat];
}


j = findSecondLowestAndGreatest([4, 7, 2, 8, 10]);
console.log(j);

//12.  Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).

function isPerfectNum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return (sum === n);
}

console.log(isPerfectNum(6));

// 13. Write a JavaScript function to compute the factors of a positive integer.

function findFactor(num) {
    let factors = [];

    // Loop from 1 to num, adding each divisor to the factors array
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(findFactor(10))

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

function Power(b, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= b;
    }
    return result;
}

console.log(Power(5, 2));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueChar(s) {
    let a = new Set(s);
    return [...a].join('');
}
console.log(uniqueChar("hello"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function noOfOccurances(s) {
    let a = Array.from(new Set(s.split('')));
    let b = {};
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        b[a[i]] = 0;
    }
    console.log(b);

    for (let i = 0; i < s.length; i++) {
        if (s[i] in b) {
            b[s[i]] += 1;
        }
    }
    return (b);

}

console.log(noOfOccurances("hello"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

//  19. Write a JavaScript function that returns array elements larger than a number.

function getElementsLargerThan(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}


const myArray = [1, 2, 3, 4, 5, 6, 7];
const myNumber = 3;
const largerThanNumber = getElementsLargerThan(myArray, myNumber);
console.log(largerThanNumber);


// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateRandomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const idLength = 10;
const randomId = generateRandomId(idLength);
console.log(randomId); // Output: "dM2kl1z8Hx"


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function getSubsets(arr, subsetLength) {
    const result = [];

    function generateCombinations(startIndex, subset) {
        if (subset.length === subsetLength) {
            result.push(subset);
            return;
        }
        for (let i = startIndex; i < arr.length; i++) {
            generateCombinations(i + 1, subset.concat([arr[i]]));
        }
    }

    generateCombinations(0, []);
    return result;
}

const hellomeArray = [1, 2, 3];
const subsetLength = 2;
const subsets = getSubsets(hellomeArray, subsetLength);
console.log(subsets); // Output: [[1, 2], [1, 3], [2, 3]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 

function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences("hello", "o"));

// 23. Write a JavaScript function to find the first not repeated character.

function notRepeat(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null;
}

console.log(notRepeat("hello Manas"));

// 24. Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap adjacent elements if they are in the wrong order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([2, 9, 7, 3, 10]));

// 25. Longest Country Name
function longestCountryName(countries) {
    let longestName = '';
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestName.length) {
            longestName = countries[i];
        }
    }
    return longestName;
}

const countryNames = ['Australia', 'Canada', 'United States of America', 'Brazil', 'Germany'];
const longestName = longestCountryName(countryNames);
console.log(longestName); // Output: 'United States of America'

//26. Longest substring without repeating characters

function longestSubstring(str) {
    let longest = "";
    let current = "";

    for (let i = 0; i < str.length; i++) {
        let index = current.indexOf(str[i]);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += str[i];
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
}

console.log(longestSubstring("hello"));

// 27. Longest plandromic substring

function longestPalindrome(str) {
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            if (substring === substring.split("").reverse().join("") && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
}

console.log(longestPalindrome("bob is lolol"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function cube(callback, num) {
    // Call the callback function with the square of the input number
    let result = callback(num * num * num);

    return result;
}

// Define a function to be used as the callback
function double(x) {
    return x * 2;
}

// Call the square function and pass the double function as a parameter
let output = cube(double, 10);

console.log(output); // Output: 2000

//29. Write a JavaScript function to get the function name

function getFunctionName(fn) {
    return fn.name;
}

function hello() {
    console.log("Hello, world!");
}

console.log(getFunctionName(hello));

// Assignment 4
// myMap and myReduce

//myMap
const numbers = [1, 2, 3, 4, 5];

// Map each number to its square
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

//myReduce
const numbers1 = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers
const sum = numbers1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

//Using myMap and myReduce to create an object that maps orginal values in array to their mapped counterparts
const numbers3 = [1, 2, 3, 4, 5];

const mappedArray = numbers3.map((num) => {
    return {
        original: num,
        squared: num * num,
    };
});
console.log(mappedArray);
const mappedObject = mappedArray.reduce((obj, item) => {
    obj[item.original] = item.squared;
    return obj;
}, {});

console.log(mappedObject);