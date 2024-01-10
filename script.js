// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {}

//Arrays for acceptable characters
const length = 0 ;
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
const numeric = ["0","1","2","3","4","5","6","7","8","9",];
const specialChar =["~","`","!","@","#","$","%","^","&","*","(",")","-","_","=","[","{","}","]",";",":",";","'","<",".",">","?","/"];

const passwordChoices = []


let lengthConfirm = "";

let password = "";

allChars = upperCase + lowerCase + numeric + specialChar
console.log (allChars)


// prompt questions & validation
function writePassword() { 
let lengthConfirm = parseInt(prompt("How many characters would you like in your password?"))
console.log (lengthConfirm)
if (lengthConfirm < 8 || lengthConfirm > 128){
return
}

password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
password += numeric[Math.floor(Math.random() * numeric.length)]
password += specialChar[Math.floor(Math.random()* specialChar.length)]
password += upperCase[Math.floor(Math.random()* upperCase.length)]



for (let i = 0 ; i < lengthConfirm - 4; i++){
  console.log (password)
password = password.concat (allChars[Math.floor(Math.random() * allChars.length)]) 
}

{
let upperCaseConfirm = confirm("Click OK to confirm using upper case letters.");
if (upperCaseConfirm == true)
passwordChoices.push(upperCase); 
console.log = ( "Error: must contain an uppercase letter.")
  }
  
  {
  let lowerCaseConfirm = confirm("Click OK to confirm using lower case letters.");
  if (lowerCaseConfirm == true)
  passwordChoices.push(lowerCase)
  console.log = ("Error: must contain a lowercase letter.")
  }
  
  {
  let numericConfirm = confirm("Click OK to confirm using numbers.");
  if (numericConfirm == true)
  passwordChoices.push(numeric)
  console.log = ("Error: must contain 1 number.")
  }
  
  {
  let specialCharConfirm = confirm("Click OK to confirm using special characters.");
  if (specialCharConfirm == true) 
  passwordChoices.push(specialChar)
  console.log = ( "Error: must contain a special charcter.")
  }
  

  //prompt user for password criteria
  //      password length 8<128
  //      lowercase upper case numbers special characters
  //validate the input
  //generate password based on criteria


    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
