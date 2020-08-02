
var capital = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']

var lowercase = ['abcdefghijklmnopqrstuvwxy']

var specialChar = ['!%@#$']


var numberOfcharacters = parseInt(prompt('How many characters would you like?'))

var pickedLetterArr =[]
var characterArr =[]

if(confirm('Do you want capital letters?')){
  pickedLetterArr.push(capital)
}

if(confirm('Do you want lowercase letters?')){
  pickedLetterArr.push(lowercase)
}

if(confirm('Do you want special characters?')){
  pickedLetterArr.push(specialChar)
}

console.log(numberOfcharacters, pickedLetterArr)

for(var i = 0; i < numberOfcharacters; i++){
  var randomLetter = Math.floor(Math.random() * pickedLetterArr.length);
  var randomSpecChar = Math.floor(Math.random() * pickedLetterArr[randomLetter].length);
  var combo = pickedLetterArr[randomLetter][randomSpecChar]
  characterArr.push(combo)

  console.log(randomLetter, randomSpecChar, combo)
}














// Add event listener to generate button


// // Assignment Code
// // var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// //   function clickButton() { 
// //     el_down.innerHTML = generatePass(); 
// } 

// }