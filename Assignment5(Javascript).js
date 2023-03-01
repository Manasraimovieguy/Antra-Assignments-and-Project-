// 1. Create a function that everytime you invoke it, 
// it will print out the message "Congrats you earn the chance!", 
// however it can only print out the message with the first 5 excutions. 
// all the rest invoke will print out the message "Sorry you missed the chance"

const chanceMessage = (function () {
    let count = 0;
    return function () {
        if (count < 5) {
            console.log("Hey you got your chance");
            count++;
        } else {
            console.log("You missed your chance");
        }
    }
})(); //Using IIFE and closure

// 2. Filter an Array with a user input of minimum length


// arr1 = ["123123", "123", "451511", "422"]
// minimumLength = 5

const arr1 = ["123123", "123", "451511", "422"];
const minimumLength = 5;

const filteredArray = arr1.filter(str => str.length >= minimumLength);

console.log(filteredArray);