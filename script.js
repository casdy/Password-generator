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
                "basket", "battalion", "beauty", "before", "beginning", "Oak", "Maple", "Pine", "Cherry", "Apple", "Peach", "Lemon", "Lime",
                "Coconut", "Banana", "Almond", "Walnut", "Pecan", "Hazelnut", "Macadamia", "Avocado", "Mango", "Strawberry", "Raspberry", "Blueberry",
                "Blackberry", "Lilac", "Rose", "Daisy", "Sunflower", "Lily", "Orchid", "Iris", "Tulip", "Peony", "Cactus", "Bamboo", "Redwood", "Palm",
                "Fern", "Ivy", "Moss", "Clover", "Heather", "Thistle", "Honeysuckle", "Lavender", "Jasmine", "Lemon Balm", "Peppermint", "Basil", "Rosemary",
                "Thyme", "Oregano", "Sage", "Parsley", "Mint", "Dill", "Chives", "Marjoram", "Lovage", "Chamomile", "Angelica", "Coriander", "Caraway", "Anise",
                "Mustard", "Fennel", "Cumin", "Cardamom", "Cinnamon", "nearly", "kiddingly", "reassuringly", "usually", "correctly", "upliftingly",
                "instantly", "easily", "also", "specifically", "recently", "kindly", "powerfully",
                "rudely", "terrifically", "silently", "more", "energetically", "surprisingly",
                "furiously", "upside-down", "vastly", "coolly", "positively", "lazily",
                "righteously", "heavily", "beautifully", "vacantly", "very", "politely",
                "automatically", "quarrelsomely", "however", "almost", "successfully",
                "merely", "upbeat", "too", "irritably", "cautiously", "fervently", "calmly",
                "briskly", "cheerfully", "acidly", "faithfully", "strictly", "likely", "always",
                "really", "closely", "tomorrow", "neatly", "frantically", "hungrily", "properly",
                "similarly", "knavishly", "enormously", "deftly", "safely", "simply", "shyly",
                "well", "certainly", "therefore", "significantly", "suddenly", "needily",
                "innocently", "happily", "fiercely", "generally", "swiftly", "dramatically",
                "upright", "effectively", "solidly", "sometimes", "sharply", "often",
                "devotedly", "hastily", "openly", "curiously", "literally", "defiantly",
                "especially", "monthly", "early", "warmly", "oddly", "badly", "possibly",
                "essentially", "courageously", "commonly", "partially", "madly", "primarily",
                "unnaturally", "willfully", "scarily", "sadly", "nervously", "carelessly",
                "yearly", "completely", "altogether", "mockingly", "jealously", "joyfully",
                "soon", "vaguely", "unexpectedly", "wisely", "tediously", "painfully",
                "seriously", "viciously", "helpfully", "upward", "obnoxiously", "blindly",
                "constantly", "longingly", "vainly", "steadily", "forth", "coaxingly",
                "intensely", "instead", "crazily", "probably", "potentially", "fortunately",
                "fast", "frenetically", "promptly", "eagerly", "ahead", "directly", "softly",
                "mysteriously", "yieldingly", "actually", "currently", "majestically",
                "rigidly", "sedately", "strongly", "fondly", "zestily", "continually",
                "bitterly", "elegantly", "widely", "gently", "foolishly", "bashfully", "only",
                "enthusiastically", "inquisitively", "gratefully", "sweetly", "Cloves", "Nutmeg",
                "Allspice", "Star Anise", "Vanilla", "Saffron", "Turmeric", "Ginger", "Galangal",
                "Peppercorn", "Juniper", "Oregano", "Hops", "Echinacea", "Goldenseal", "Ginseng",
                "Licorice", "Yarrow", "Calendula", "Comfrey", "Chickweed", "St. John's Wort", "Nettle",
                "Horehound", "Mullein", "Lobelia", "Burdock", "Dandelion", "Plantain", "Shepherd's Purse", "Wild Yam",
                "Black Cohosh", "Ginkgo", "Gentian", "Ephedra", "Kava", "Catnip", "Lemon Grass", "Lemongrass",
                "Celery Seed", "Anise Seed", "Caraway Seed", "Mustard Seed", "Fennel Seed", "Cumin Seed",
                "Coriander Seed", "Dill Seed", "Parsley Seed", "Thyme Seed", "Basil Seed", "Rosemary Seed", "Sage Seed", "Oregano Seed",
                "Marjoram Seed", "Mint Seed", "Chamomile Seed", "Calendula Seed", "Echinacea Seed", "Goldenrod Seed",
                "Comfrey Seed", "Yarrow Seed", "Nettle Seed", "Hops Seed", "Licorice Seed", "Ginger Root", "Turmeric Root", "Galangal Root",
                "Ginseng Root", "Echinacea Root", "Goldenseal Root", "Black Cohosh Root", "Dandelion Root", "Burdock Root",
                "Lobelia Root", "Mullein Root", "Horehound Root", "Shepherd's Purse Root", "Plantain Root", "Wild Yam Root", "Yarrow Root", "Calendula Root",
                "Comfrey Root", "Chickweed Root", "St. John's Wort Root", "Nettle Root", "Hops Root", "Licorice Root", "Echinacea Root", "Ginseng Root", "behalf",
                "behavior", "belief", "bell", "belong", "microstep", "microsoft",
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