// Assignment Code
var generateBtn = document.querySelector("#generate");

//array of all upper/lower/number/special
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", ];
var selectedChars = [];

//add other variables here
var selectBig = "false";
var selectSmall = "false";
var selectNum = "false";
var selectSpecial = "false";
var passLength = 0;

//on button click - prompt "how long do you want your password to be? Has to be between 8-128 characters"
//if passLength is between 8-128 then move on, if not ask prompt again
document.getElementById("generate").addEventListener("click", function(){
  while (passLength > 129 || passLength < 7 || isNaN(passLength)){
  var passPrompt = prompt("how long do you want your password to be? Has to be between 8-128 characters");
  console.log(passPrompt); 
//parseInt prompt to passLength
  passLength = parseInt(passPrompt);
  console.log(passLength);
};


//confirm "do you want upper case, lower, etc"
//if no confirms then loop back to the confirms
  selectBig = confirm("Do you want uppercase letters?");
  selectSmall = confirm("Do you want lowercase letters?");
  selectNum = confirm("Do you want numbers?");
  selectSpecial = confirm("Do you want special characters?");

  if (selectBig || selectSmall || selectSpecial || selectNum) {
  } 
  else {
    selectBig = confirm("Do you want uppercase letters?");
    selectSmall = confirm("Do you want lowercase letters?");
    selectNum = confirm("Do you want numbers?");
    selectSpecial = confirm("Do you want special characters?");
  }
  
  console.log(selectBig);
  console.log(selectSmall);
  console.log(selectNum);
  console.log(selectSpecial);
  });

  
  //gotta work on this part of pushing the selected arrays into the array of all the selected characters.
  // if (selectBig === "true") {
  //   selectedChars.push.apply(selectedChars, bigLetters);
  // }
  // console.log(selectedChars);





//have a var array that has the arrays for the selected password types
//var array length
//var totalChars = selectedChars.length

//randint of array -1 to select the input and loop through passlength
// for(var i=1; i<= passLength; i++){
//   var ranChar = mathRand.totalChars;
//   var addedChar = selectedChars[ranChar];
//   var password = "";
//   password.push.apply(password, addedChar);

// }

//return string










// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
