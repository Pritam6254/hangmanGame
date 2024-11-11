import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";

function PlayGame(){

    // const [SearchParams] = useSearchParams()
    // console.log(SearchParams.get("text"))
    // const [searchParams] = useSearchParams();
    // console.log(searchParams)

    // const { text ,id}=useParams();

    const { state } = useLocation();

    

    return(
    <>
        <h1>Play Games {state.wordSelected}</h1>

        <Maskedtext text={state.wordSelected} guessedLetters={[" "]}/>
        <Link to="/start" className="text-blue-300">Start Game Link</Link>
    </>
    )
}

export default PlayGame;