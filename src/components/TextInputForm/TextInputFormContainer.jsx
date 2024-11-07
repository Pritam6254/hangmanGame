import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

   const [inputType,setInputType] = useState("password");
   const [value, setValue] = useState("");

    function handelFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted", value);
    }

    function handlelTextInputChange(event) {
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/Hide button clicked")
        if(inputType == "password"){
            setInputType("text")
        }else {
            setInputType("password")
        }
        
    }

    return (
        <TextInputForm
                inputType={inputType}
                handelFormSubmit={handelFormSubmit}
                handlelTextInputChange={handlelTextInputChange}
                handleShowHideClick={handleShowHideClick}
        />
    )

}

export default TextInputFormContainer;