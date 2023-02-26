import React from "react";


const Quotes = ({sentence, character}) => {

    return (

        <li>
            {character} : {sentence} 
        </li>
    )
}


export default Quotes 
