var generateBtn = document.querySelector("#generate");

var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','-','+','=','~','<','>','?'];

function generatePassword() {

  var length = parseInt(prompt("How many characters (8-128) would you like your password to contain?"));

  if (length < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }

  if (length > 128) {
    alert('The password must be less than 128 characters!');
    return;
  }

  var uppercase1 = confirm("Do you want to include uppercase characters?");
  var lowercase1 = confirm("Do you want to include lowercase characters?");
  var numeric1 = confirm("Do you want to include numeric characters?");
  var special1 = confirm("Do you want to include special characters?");
    
  if (!uppercase1 && !lowercase1 && !numeric1 && !special1) {
    alert("Your password must contain at least one uppercase, lowercase, numeric, or special character.");
    return;
  }

  