//-------------------------------------Template Literals--------------------------------
//------------------------------------1--------------------------------------------------
// const name = "mirjon yoldashev";
// const age = 18;
// const city = "tashkent-yunusobod-10/16/67";

// const info = `My name is ${name}. I am ${age} years old and currently living in ${city}.`;

// console.log(info);
//------------------------------------2------------------------------------------------
// function generateGreeting(name, birthdate) {
//   const currentDate = new Date();
//   const age = currentDate.getFullYear() - birthdate.getFullYear();

//   const greeting = `Hello, ${name}! Happy ${age}th birthday!`;
//   return greeting;
// }

// const personName = "yoldashev_mirjon";
// const personBirthdate = new Date(2006, 7, 4);

// const greetingMessage = generateGreeting(personName, personBirthdate);
// console.log(greetingMessage);
//------------------------------------String Length------------------------------------
//------------------------------------1------------------------------------------------
// function calculateStringLength(str) {
//   return str.length;
// }

// const inputString = "eng agressivniy mashina  bu albatta bmw m8";
// const length = calculateStringLength(inputString);
// console.log("Length of the string:", length);
//---------------------------------------2-----------------------------------------------
// function findMiddleCharacter(str) {
//   const middleIndex = Math.floor(str.length / 2);

//   if (str.length % 2 === 0) {
//     return str.substr(middleIndex - 1, 2);
//   } else {
//     return str.charAt(middleIndex);
//   }
// }

// const inputString = "Hello world the noting is here";
// const middleChar = findMiddleCharacter(inputString);
// console.log("Middle character(s):", middleChar);
//--------------------------------------String Comparison--------------------------
//--------------------------------------1-------------------------------------------
// function compareStrings(str1, str2) {
//   return str1 > str2;
// }

// // Example usage
// const string1 = "samsung s24 ultra";
// const string2 = "iphone 15 pro max";
// const result = compareStrings(string1, string2);
// console.log(result);
//-------------------------------------2-------------------------------------------
// function getFirstCharacterCodePoint(str) {
//   return str.codePointAt(0);
// }

// // Example usage
// const inputString = "javascript";
// const codePoint = getFirstCharacterCodePoint(inputString);
// console.log("Unicode code point of the first character:", codePoint);
//------------------------------------String Iteration--------------------------------
//----------------------------------------1-------------------------------------------
// function logCharacters(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }

// // Example usage
// const inputString = "javascript developer";
// logCharacters(inputString);
//----------------------------------------2-------------------------------------------
// function getCharacterArray(str) {
//   return Array.from(str);
// }

// // Example usage
// const inputString = "javascript developer";
// const characterArray = getCharacterArray(inputString);
// console.log(characterArray);
//-------------------------------------Slicing and Substring:-----------------------
//--------------------------------------1-------------------------------------------
// function getSubstring(str, startIndex, endIndex) {
//   return str.substring(startIndex, endIndex);
// }

// // Example usage
// const inputString = "javascript developer";
// const start = 7;
// const end = 12;
// const substring = getSubstring(inputString, start, end);
// console.log(substring);
//--------------------------------------2-------------------------------------------
// function getLastWord(str) {
//   const words = str.trim().split(" ");
//   return words[words.length - 1];
// }

// // Example usage
// const inputString = "Hello, world! Welcome to uzbekistan-tashkent-najot-talim.";
// const lastWord = getLastWord(inputString);
// console.log("Last word:", lastWord);
//-------------------------------------Uppercase and Lowercase:--------------------------------
// function convertToUppercase(str) {
//   return str.toUpperCase();
// }

// // Example usage
// const inputString = "welcome to uzbekistaan";
// const uppercaseString = convertToUppercase(inputString);
// console.log(uppercaseString);
//-------------------------------------2------------------------------------------------
// function convertToLowercase(str) {
//   return str.toLowerCase();
// }

// // Example usage
// const inputString = "WElcOme To uzbekistAan";
// const lowercaseString = convertToLowercase(inputString);
// console.log(lowercaseString);
//-------------------------------------. Replacing Text-----------------------------------------------
// function replaceValue(str, oldValue, newValue) {
//   return str.replace(oldValue, newValue);
// }

// // Example usage
// const inputString = "Hello, PROGRAMMING !";
// const oldVal = "PROGRAMMING";
// const newVal = "universe";
// const replacedString = replaceValue(inputString, oldVal, newVal);
// console.log(replacedString);
//---------------------------------------2------------------------------------------------
// function removeWord(str, word) {
//   const regex = new RegExp(`\\b${word}\\b`, "gi");
//   return str.replace(regex, "");
// }

// // Example usage
// const inputString = "Hello, USER! Hello, everyone! Hello, HTML!";
// const wordToRemove = "Hello";
// const removedString = removeWord(inputString, wordToRemove);
// console.log(removedString);
//---------------------------------------Concatenation:---------------------------------
// function concatenateStrings(str1, str2) {
//   return str1 + str2;
// }

// // Example usage
// const inputString1 = "YOLDASHEV ";
// const inputString2 = "MIRJON";
// const concatenatedString = concatenateStrings(inputString1, inputString2);
// console.log(concatenatedString);
//-------------------------------------2--------------------------------
// function concatenateArrayStrings(arr) {
//   return arr.join("");
// }

// // Example usage
// const inputArray = ["Hello, ", "TO TASHKENT!", " Welcome ", "CHILANZAR!"];
// const concatenatedString = concatenateArrayStrings(inputArray);
// console.log(concatenatedString);
//-------------------------------------. Trimming Whitespace:--------------------------------
//-------------------------------------1------------------------------------------------
// function removeWhitespace(str) {
//   return str.trim();
// }

// // Example usage
// const inputString =
//   "     My name is  Mirjon  my instagram: yoldashev 0017                ";
// const trimmedString = removeWhitespace(inputString);
// console.log(trimmedString);
//-------------------------------------2------------------------------------------------
// function removeLeadingWhitespace(str) {
//   return str.replace(/^\s+/, "");
// }

// // Example usage
// const inputString = "  the next day in tashkent";
// const trimmedString = removeLeadingWhitespace(inputString);
// console.log(trimmedString);
//------------------------------------ Padding--------------------------------

// function padWithZeros(str, targetLength) {
//   const zerosToAdd = targetLength - str.length;
//   if (zerosToAdd <= 0) {
//     return str;
//   }
//   const paddedString = "0".repeat(zerosToAdd) + str;
//   return paddedString;
// }

// // Example usage
// const inputString = "17";
// const targetLength = 7;
// const paddedString = padWithZeros(inputString, targetLength);
// console.log(paddedString);
//--------------------------------------------------2 --------------------------------
// function padString(str, targetLength, padChar) {
//   const paddingLength = targetLength - str.length;
//   if (paddingLength <= 0) {
//     return str;
//   }
//   const paddedString = str + padChar.repeat(paddingLength);
//   return paddedString;
// }

// // Example usage
// const inputString = "javascript developer";
// const targetLength = 10;
// const paddingChar = "-";
// const paddedString = padString(inputString, targetLength, paddingChar);
// console.log(paddedString);

//-------------------------------------------- Accessing Characters:------------------------------
//----------------------------------------------------1-------------------------------------------
// function getCharacterAtIndex(str, index) {
//   if (index >= 0 && index < str.length) {
//     return str[index];
//   } else {
//     return "Index out of range";
//   }
// }

// // Example usage
// const inputString = "welcome to tashkent-77";
// const targetIndex = 2;
// const character = getCharacterAtIndex(inputString, targetIndex);
// console.log(character);
//--------------------------------------------2-------------------------------------------
// function getCharacterCodeAtIndex(str, index) {
//   if (index >= 0 && index < str.length) {
//     return str.charCodeAt(index);
//   } else {
//     return "Index out of range";
//   }
// }

// // Example usage
// const inputString = "javascript developer";
// const targetIndex = 7;
// const characterCode = getCharacterCodeAtIndex(inputString, targetIndex);
// console.log(characterCode);
//-------------------------------------------------Repetition-------------------------------------------
// function repeatString(str, times) {
//   let repeatedString = "";
//   for (let i = 0; i < times; i++) {
//     repeatedString += str;
//   }
//   return repeatedString;
// }

// // Example usage
// const inputString = "reels";
// const repeatCount = 12;
// const repeatedString = repeatString(inputString, repeatCount);
// console.log(repeatedString);

//----------------------------------------------2--------------------------------------------
// function repeatCharacter(char, times) {
//   let repeatedString = "";
//   for (let i = 0; i < times; i++) {
//     repeatedString += char;
//   }
//   return repeatedString;
// }

// // Example usage
// const inputCharacter = "*";
// const repeatCount = 12;
// const repeatedString = repeatCharacter(inputCharacter, repeatCount);
// console.log(repeatedString);
//----------------------------------------------Splitting into an Array-------------------
// function splitString(str, separator) {
//   return str.split(separator);
// }

// // Example usage
// const inputString = "welcome to tashkent-77";
// const separatorChar = ",";
// const substrings = splitString(inputString, separatorChar);
// console.log(substrings);
//---------------------------------------------2-------------------------------------------
// function splitStringWithLimit(str, separator, limit) {
//   return str.split(separator, limit);
// }

// // Example usage
// const inputString = "apple,banana,cherry,mango, orange";
// const separatorChar = ",";
// const splitLimit = 3;
// const substrings = splitStringWithLimit(inputString, separatorChar, splitLimit);
// console.log(substrings);
//----------------------------------------------Checking Substring Presence:--------------------------------------------
// function isSubstringAtBeginning(str, substring) {
//   return str.startsWith(substring);
// }

// // Example usage
// const inputString = "javascript developer";
// const targetSubstring = "javascript";
// const isAtBeginning = isSubstringAtBeginning(inputString, targetSubstring);
// console.log(isAtBeginning);
//----------------------------------------------2--------------------------------------------
// function isSubstringAtEnd(str, substring) {
//   return str.endsWith(substring);
// }

// // Example usage
// const inputString = "1223 3221";
// const targetSubstring = "1223";
// const isAtEnd = isSubstringAtEnd(inputString, targetSubstring);
// console.log(isAtEnd);
///----------------------------------------------3--------------------------------------------
function isSubstringInString(str, substring) {
  return str.includes(substring);
}

// Example usage
const inputString = "welcome to tashkent-77";
const targetSubstring = "welcome";
const isSubstringPresent = isSubstringInString(inputString, targetSubstring);
console.log(isSubstringPresent);
