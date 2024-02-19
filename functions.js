// Funciton that alert the first letter of a name
function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}

// Function to check if a number is divisible by 2
function divisibleByTwo(number) {
    return number % 2 === 0;
}

// Function to find the largest number in array
function largestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// Calls
firstLetterName("Rebecca");

console.log(divisibleByTwo(6)); 
console.log(divisibleByTwo(11)); 

console.log(largestNum([1, 6, 10, 30, 2, 55])); 