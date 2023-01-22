function generatePassword() {
  
  // Get the length of the password
  let length = document.getElementById("length").value;

  // Check if the user wants to include special characters
  let includeSpecialCharacters = document.getElementById("include-special-characters").checked;

  // Get the type of password
  let passwordType = document.getElementById("password-type").value;

  // The characters that can be included in the password
  let characters = "";

  switch (passwordType) {
    case "alphanumeric":
      characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      length = length;
      break;
    case "alphabetic":
      characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      length = length;
      break;
    case "numeric":
      characters = "0123456789";
      length = length;
      break;
    case "pin":
      characters = "0123456789";
      length = length;
      break;
    default:
      characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }
  // If the user wants to include special characters, add them to the list of characters
  if (includeSpecialCharacters) {
    characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Add the event listener to the document
    document.addEventListener("keydown", function(event) {
     // Check if the key pressed was the enter key
     if (event.keyCode === 13) {
         // Call the generatePassword() function
         generatePassword();
     }
   });
 });
 
  // Initialize the password
  let password = "";

  // Generate the password
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Create a new element to display the password
  let passwordDisplay = document.createElement("input");
  passwordDisplay.setAttribute("type", "text");
  passwordDisplay.setAttribute("id", "password-display");
  passwordDisplay.setAttribute("value", password);
  passwordDisplay.setAttribute("readonly", true);

  // Create a new button to copy the password
  let copyButton = document.createElement("button");
  copyButton.setAttribute("onclick", "copyPassword()");
  copyButton.innerHTML = "Copy";

  // Add the password and copy button to the page
  let passwordContainer = document.getElementById("password");
  passwordContainer.innerHTML = "";
  passwordContainer.appendChild(passwordDisplay);
  passwordContainer.appendChild(copyButton);
}

// Function to copy the password to the clipboard
function copyPassword() {
  let passwordDisplay = document.getElementById("password-display");
  passwordDisplay.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
