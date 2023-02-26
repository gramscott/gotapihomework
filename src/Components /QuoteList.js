import React from "react";
import Quotes from "./Quotes";

const QuoteList = ({quotes}) => {

    const quoteItems = quotes.map((quote,index) => {
        return <Quotes sentence={quote["sentence"]} character={quote["character"]["name"]} key={index}/>
    })


    return (
        <h1>
            {quoteItems}
        </h1>
    )
} 

export default QuoteList