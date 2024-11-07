import getButtonStyling from "./getButtonStyling";
function Button({text, onClickHandler, styleType = "primary",type = "password"
    }){

    return(
        <button 
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
        >
            {text}
        </button>
    )
}

export default Button;
