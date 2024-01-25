// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
var specialArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+" ]
var characterPool = []
// get user input for how they want the password using prompt and confirms
// create character pool that holds characters that user says yes to
function generatePassword(){

var passwordLength= window.prompt("How long would you like your password to be?")
// confirm returns a true or false
var confirmLowercase= window.confirm("Would you like lowercase letters in your password?")
var confirmUppercase= window.confirm("Would you like uppercase letters in your password?")
var confirmNumbers= window.confirm("Would you like numbers in your password?")
var confirmSpecial= window.confirm("Would you like special characters in your password?")

//conditional statements
if(confirmLowercase === true){
  characterPool = characterPool.concat(lowercaseArray)
}

if(confirmUppercase === true){
  characterPool = characterPool.concat(uppercaseArray)
}

if(confirmNumbers === true){
  characterPool = characterPool.concat(numberArray)
}

if(confirmSpecial === true){
  characterPool = characterPool.concat(specialArray)
}

console.log()

  return "This is a new Password"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
