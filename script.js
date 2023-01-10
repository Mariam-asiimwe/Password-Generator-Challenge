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

// New Array with all character options
//console.log(passwordOptionsArray)
//var newArray = passwordOptionsArray;
//concat(numericCharacters,specialCharacters, upperCasedCharacters, lowerCasedCharacters)
//function passwordOptionsArray(){  
  //return passwordOptionsArray
  
  //console.log(passwordOptionsArray)
  
  // Password meeting all criteria of length and at least one of the characters
  let passwordLength = "True"
  
  let password = {
    
    length: 0,
    specialCharacters: [],
    lowerCasedCharacters: [],
    upperCasedCharacters: [],
    numericCharacters: [],
    //passwordOptionsArray: "",
    
  }
  if (passwordLength.password === "True") {
    console.log("Meets all criteria")
    
  } else {
    console.log("Password is not long enough! Please start again.")
  }
  
  //choice of length of password at least 10 character but no more than 64
  function getPasswordOptions() {
    let passwordLength = password.length()
    //for (let i = 0; i < passwordOptionsArray.length; i++); 
    //length += passwordOptionsArray[i];
    
  }
  console.log(getPasswordOptions)
  
  
  //let newPassword = "";
  
  /* Function to prompt user for password options
  //character types to include at least one character type: lowercase, uppercase, numeric and special characters
  //prompts
  //validate for each input
  */
let passwordOptionsArray = [];
passwordOptionsArray = passwordOptionsArray.concat(numericCharacters, specialCharacters, upperCasedCharacters, lowerCasedCharacters);
console.log(passwordOptionsArray)
//return passwordOptionsArray


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(math.random()*passwordOptionsArray.length);
  console.log(randomIndex)

  
  return randomIndex
}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = prompt("Choose length of password length between 10 and 64 characters");
  console.log(passwordLength)

  if (passwordLength > 10 && passwordLength < 64) {
    console.log("Yes")
    var numericCharacters = confirm("I want password to have numeric characters")
    console.log("Yes to numeric characters", numericCharacters)
    var specialCharacters = confirm("Yes to special characters")
    console.log("Yes to special character", specialCharacters)
    var upperCasedCharacters = confirm("I want upper cased characters in my password")
    console.log("Yes to upper cased charaters", upperCasedCharacters)
    var lowerCasedCharacters = confirm("Yes to lower cased characters in my password")
    console.log("Yes to lower cased characters", lowerCasedCharacters)


    if (numericCharacters === true) {
      passwordOptionArray = passwordOptionsArray.concat(numericCharacters)

    }

    if (specialCharacters === true) {
      passwordOptionArray = passwordOptionsArray.concat(specialCharacters)

    }

    if (upperCasedCharacters === true) {
      passwordOptionArray = passwordOptionsArray.concat(upperCasedCharacters)

    }

    if (lowerCasedCharacters === true) {
      passwordOptionArray = passwordOptionsArray.concat(lowerCasedCharacters)
    }

    console.log(passwordOptionsArray)

    let randomIndex = Math.floor(Math.random() * passwordOptionsArray.length)

    for (let i = 0; i < passwordLength; i++) {

      //newPassword += ""


      return "generate password"
    }


  }

  else {
    console.log("Start again")
    generatePassword()
  }




}

// Get references to the #generate element
generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);