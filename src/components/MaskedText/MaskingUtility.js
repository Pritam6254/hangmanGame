/**
 * @param { The woed which is given as input and is expected to be guessed } originalWord
 * @param { Letters which are guessed by the user already } guessedLetters
 * Ex: origionalWord: HUMBLE
 * guessedLetters:['H', 'M', 'E']
 * 
 * return -> "H_M__E"
 */


export function getmaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const guessedLetterSte = new Set(guessedLetters); 

    const result =  originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSte.has(char)){
            return char;
        } else {
            return "_";
        }
    });

    return result;
}