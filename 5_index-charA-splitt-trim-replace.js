var strHAY = "how are you?";

console.log("How are you?"[5]);


/* charAt() method to return the character using the index number as a parameter */
strHAY.charAt(5);          // -> r

/* indexOf() to return the index number by the first instance of a character. */
strHAY.indexOf("o");       // -> 1

/*
lastIndexOf()
to return the index number by the last instance of a character.
*/
/* if we use whole word - it returns index of first character from our String */
strHAY.lastIndexOf("o");   // -> 9

/*
to upperCase()
convert all characters to uppercase characters
*/
strHAY.toUpperCase();       // -> HOW ARE YOU?

/* toLowerCase()
convert all characters to lowercase characters
*/
strHAY.toLowerCase();       // -> how are you?

/* split()
method - separate the array
*/
strHAY.split(" ");          // -> (3) ["how", "are", "you?"] (by white space)

strHAY.split("");           // -> (12) ["h", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", "?"] (every character)

strHAY.split("o");          // -> (3) ["h", "w are y", "u?"] (takes "o" as a separator)

/*
trim()
method removes white space from both ends of a string, but not anywhere in between.
Whitespace can be tabs or spaces.
*/
"                How are you?         ".trim();     // -> "How are you?"

/* replace()
method - the first parameter will be the value to be found,
and the second parameter will be the value to replace it with.
*/
strHAY.replace("are", "cat");   // -> "how cat you?"
/* https://regexr.com/ */