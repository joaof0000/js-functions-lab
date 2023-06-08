// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(12, 9));
  


// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// 2.
const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
  };
  
  console.log(maxOfThree(4, 9, 2));
  
  // 3.
  
  function isCharAVowel(char) {  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log(isCharAVowel('a'));
  
  // 4.
  const sumArray = function(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  };
  
  console.log(sumArray([2, 4, 5]));
  
  // 5.
  function multiplyArray(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
      product *= numbers[i];
    }
    return product;
  }
  
  console.log(multiplyArray([2, 4, 5]));
  
  // 6.
  const numArgs = function() {
    return arguments.length;
  };
  
  console.log(numArgs(6, 2, 3, 4, 5));
  
  // 7.
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseString('rockstar'));
  
  // 8.
  const longestStringInArray = function(strings) {
    let longestLength = 0;
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > longestLength) {
        longestLength = strings[i].length;
      }
    }
    return longestLength;
  };
  
  console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));
  
  // 9.
  function stringsLongerThan(strings, length) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > length) {
        result.push(strings[i]);
      }
    }
    return result;
  }
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 6));
  