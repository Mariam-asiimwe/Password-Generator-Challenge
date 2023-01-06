// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
console.log(specialCharacters);

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(numericCharacters)

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
console.log(lowerCasedCharacters)

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
console.log(upperCasedCharacters)

let passwordOptionsArray = [];

passwordOptionsArray = passwordOptionsArray.concat(specialCharacters,numericCharacters, lowerCasedCharacters, upperCasedCharacters)

//function passwordOptionArray(){
     
  //return passwordOptionArray

console.log(passwordOptionsArray);

// Function to prompt user for password options
function getPasswordOptions() {
  passwordOptionsArray = passwordOptionsArray.concat(exampleArray);

  return passwordOptionsArray
  
}


// Function for getting a random element from an array
function getRandom(arr) {
  return 

}

// Function to generate password with user input
function generatePassword() {

let newPassword = "";

let randomIndex = Math.floor(Math.random()*passwordsOptionArray.length)

for (let i = 0; i < 64; i++) {

    newPassword += ""

  
}
return generatePassword;



}

// Get references to the #generate element
 generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);