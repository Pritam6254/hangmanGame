import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";


function TextInputFormContainer(){

   const [inputType,setInputType] = useState("password");
   const [value, setValue] = useState("");

   const navigate = useNavigate();

    function handelFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted", value);
        if(value) {
            // if we have something in value then we want to go to the paly page 
            
            navigate(`/play`,{state: {wordSelected: value}})
            
        }
        
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
        console.log(inputType)
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