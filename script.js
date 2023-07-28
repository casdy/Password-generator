async function generatePassword() {
    const length = parseInt(document.getElementById("length").value, 10);
    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid password length.");
        return;
    }

    const includeSpecialCharacters = document.getElementById("include-special-characters").checked;
    const passwordType = document.getElementById("password-type").value;
    let characters = "";

    switch (passwordType) {
        case "alphanumeric":
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
        case "alphabetic":
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case "numeric":
            characters = "0123456789";
            break;
        case "pin":
            characters = "0123456789";
            break;
        case "passphrase":

            // Load the words.js file asynchronously using the fetch API
            const wordsModule = await
            import ('./words.js');
            const words = wordsModule.default;

            let passphrase = "";
            for (let i = 0; i < length; i++) {
                passphrase += words[Math.floor(Math.random() * words.length)];
                if (i !== length - 1) {
                    passphrase += " ";
                }
            }
            // Set the passphrase as the value of the password container
            document.getElementById("password").textContent = passphrase;
            return; // Return here since we don't need to generate a random password
        default:
            characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    if (includeSpecialCharacters && passwordType !== "passphrase") {
        characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Set the randomly generated password as the value of the password container
    document.getElementById("password").textContent = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
    const passwordDisplay = document.getElementById("password");
    const password = passwordDisplay.textContent;

    if (password) {
        // Create a temporary input element to copy the password to the clipboard
        const tempInput = document.createElement("input");
        tempInput.value = password;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy.");
    }
}