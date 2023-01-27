function generatePassword() {
  // Initialize the password variable with a null value
  let password = null;

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
      case "passphrase":
          // Add code here to generate a passphrase
          let words = ["abstract", "adventure", "ambition", "analyst", "animal", "annual", "answer", "antique",
              "anxiety", "apartment", "apology", "appetite", "appliance", "application", "appoint", "approve", "architect",
              "argument", "arrival", "article", "artist", "aspect", "assemble", "assess", "assign", "assist",
              "assume", "athlete", "atmosphere", "attach", "attack", "attempt", "attract", "auction", "average",
              "awesome", "balance", "balloon", "banana", "banner", "barbecue", "bargain", "barrier", "baseball", "basic",
              "basket", "battalion", "beauty", "before", "beginning", "behalf", "behavior", "belief", "bell", "belong",
              "below", "belt", "bench", "benefit", "best", "betray", "better", "between", "beyond", "big", "bike", "billion",
              "bind", "biology", "bird", "birthday", "bishop", "black", "blade", "blank", "blanket", "blast", "blend",
              "bless", "blind", "block", "blood", "bloom", "blossom", "blouse", "blue", "board", "boat", "body",
              "boiling", "bold", "bolt", "bomb", "bond", "bone", "bonus", "book", "boost", "border", "bore", "born",
              "borrow", "boss", "both", "bottle", "bottom", "boundary", "bowl", "bowling", "box", "boy", "boyfriend",
              "brain", "brake", "branch", "brand", "brave", "bread", "breakfast", "breast",
          ];
          let passphrase = "";
          for (let i = 0; i < length; i++) {
              passphrase += words[Math.floor(Math.random() * words.length)];
              if (i !== length - 1) {
                  passphrase += " ";
              }
          }
          // Assign the passphrase to the password variable
          password = passphrase;
          break;
      default:
          characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  // If the user wants to include special characters and password type is not passphrase
  if (includeSpecialCharacters && passwordType !== "passphrase") {
      characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  // If password is null then we generate the password
  if (password === null) {
      // Generate the password
      for (let i = 0; i < length; i++) {
          password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
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

// passpharase generator
function generateWordList(length) {
  let words = myWordList;
  let wordList = [];
  for (let i = 0; i < length; i++) {
      let word = words[Math.floor(Math.random() * words.length)];
      if (Math.random() < 0.5) {
          let index = Math.floor(Math.random() * word.length);
          word = word.slice(0, index) + "-" + word.slice(index);
      }
      wordList.push(word);
  }
  return wordList;
}
let myWordList = generateWordList(10);
// Function to copy the password to the clipboard
function copyPassword() {
  let passwordDisplay = document.getElementById("password-display");
  passwordDisplay.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}