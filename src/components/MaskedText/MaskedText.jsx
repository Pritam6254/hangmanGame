import { getmaskedString } from "./MaskingUtility";

function Maskedtext({ text, guessedLetters }) {

    const maskedString = getmaskedString(text, guessedLetters);

    return (
        <>
            {maskedString.map((letter, index) =>{
                return(
                    <span key={index} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default Maskedtext;