// Activity 1: Searching Strings
let sentence1 = "Learning JavaScript is fun!";
let containsJavaScript = sentence1.includes("JavaScript");
let funPosition = sentence1.indexOf("fun");

console.log("Contains JavaScript:", containsJavaScript);
console.log("Position of 'fun':", funPosition);

// Activity 2: Transforming Strings
let text = " CODE BOOTCAMP ";
let cleanedText = text.toLowerCase().trim();
let replacedText = cleanedText.replace("bootcamp", "JavaScript");

console.log("Cleaned text:", cleanedText);
console.log("Replaced text:", replacedText);

// Activity 3: Breaking Apart a Sentence
let sentence2 = "Coding is fun and educational";
let words = sentence2.split(" ");

console.log("Words array:", words);

// Activity 4: Retrieving Substrings
let word = "Bootcamp";
let firstChar = word.charAt(0);
let campPart = word.slice(4);

console.log("First character:", firstChar);
console.log("Extracted 'camp':", campPart);

// Advanced Challenge
let orderInfo = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

let lines = orderInfo.split("\n");
let customerName = lines[0].replace("Customer: ", "");
let orderItems = lines[1].replace("Order: ", "").split(", ");
let totalUppercase = lines[2].toUpperCase();

console.log("Customer Name:", customerName);
console.log("Order Items:", orderItems);
console.log("Total Uppercase:", totalUppercase);