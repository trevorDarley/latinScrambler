var lettersByFrequency = "EARIOTNSLCUDPMHGBFYWKVXZJQ"; 
// String of letters arranged by the frequency with which they occur in English

function generatePairs(alphabet) { 
// Accepts a string of letters sorted by frequency and "pairs" 
// each with the letter that appears at a similar frequency
  
  var alphabetArray = alphabet.split(""); 
  // Split the string into an array to make it easier to work with
  var alphabetPairs = {};
  // Generate an empty object to store pairs of letters
  // that occur at similar frequencies
  for (var i = 0; i < alphabetArray.length; i += 2) { 
  // Iterate through the array of letters,
    alphabetPairs[alphabetArray[i]] = alphabetArray[i + 1];
    // creating one pair with letter i as the key and letter i + 1 as the value,
    alphabetPairs[alphabetArray[i + 1]] = alphabetArray[i];
    // and then one pair with letter i + 1 as the key and letter i as the value
   
  }
  
  return alphabetPairs;
  // Returns the result of the pairing:
  // an object used by performSubstitutions() to figure out which letters have similar frequencies
  
}

var exampleSentence = "More people have been to Latin than I have.";
// Comparative illusion hehe
var exampleSentence2 = "I can't think of more than 2 example sentences."
// Demonstrating that the script ignores parts of sentences
// such as numbers

function performSubstitutions(text, substitutionPairs) {
// Accepts a string of text to be "translated"
// based on the substitution rules created by substitutionPairs.
// In this case, the pairs are based on English use frequency.
  
  var result = "";
  // Create an array used to store the end result of the "translation"
  var usableLetters = Object.keys(substitutionPairs);
  // Create an array used to ensure a substitution can be performed
  // on any given letter
  for (var letterIndex in text) {
  // The substitution is performed letter-by-letter on the text
    var letter = text[letterIndex];
    // Retrieve the next letter in sequence
    if (usableLetters.includes(letter.toUpperCase())) {
    // Add the substituted version of the letter if one is available
      var letterIsUpperCase = (letter.toUpperCase() == letter);
      // Save the case of the letter so that it isn't lost after
      // checking the substitutionPairs array
      var letterCapitalized = letter.toUpperCase();
      // Prepare the letter to be checked in the substitution object
      result += letterIsUpperCase ? substitutionPairs[letterCapitalized] :
      substitutionPairs[letterCapitalized].toLowerCase();
      // Ternary operator ensures that the correct
      // capitalization of the letter is added to the result
    } else {
      result += letter;
      // Add the character as-is if it is an invalid letter or is not a letter that can be substituted
    }
    
  }
  
  return result;
  
}
