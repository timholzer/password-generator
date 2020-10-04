var generateBtn = document.querySelector("#generate");

//array of all upper/lower/number/special
var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", ];
var selectedChars = [];

//other variables
var selectBig = "false";
var selectSmall = "false";
var selectNum = "false";
var selectSpecial = "false";
var passLength = 0;
var newPassword = "";

//on button click - prompt "how long do you want your password to be? Has to be between 8-128 characters"
//if passLength is between 8-128 then move on, if not ask prompt again
      
  document.getElementById("generate").addEventListener("click", function(){
  while (passLength > 129 || passLength < 7 || isNaN(passLength)){
  var passPrompt = prompt("how long do you want your password to be? Has to be between 8-128 characters");
//parseInt prompt to passLength
  passLength = parseInt(passPrompt);
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
    alert("Make sure to select at least one option");
    selectBig = confirm("Do you want uppercase letters?");
    selectSmall = confirm("Do you want lowercase letters?");
    selectNum = confirm("Do you want numbers?");
    selectSpecial = confirm("Do you want special characters?");
  }
  
  //add the selected arrays into the array of all the selected characters.
  if (selectBig) {
    selectedChars = selectedChars.concat(bigLetters);
  }
  if (selectSmall) {
    selectedChars = selectedChars.concat(smallLetters); 
  }
  if (selectNum) {
    selectedChars = selectedChars.concat(numbers); 
  }
  if (selectSpecial) {
    selectedChars = selectedChars.concat(specialChar);
  }
  
 //selecting the random characters from the array and adding it to the password
  for(var i=1; i<= passLength; i++){
    var randItem = selectedChars[Math.floor(Math.random() * selectedChars.length)];
    newPassword += randItem;    
  }

  //adding a linebreak for people who want to run it again to do another password 
  newPassword += "\n";

  // reset the passLength so if they want to make another password it asks the password length again
  passLength = 0;
});

//Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
