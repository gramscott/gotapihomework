import React from "react";


const QuoteSelector = ({quotes, handleQuoteSelected}) => {

    const handleChange = (event) => {
        console.log(event.target.value)
        handleQuoteSelected(event.target.value)
    }

    return (
        <>
        <select onChange={handleChange}>
            <option>Choose Wisely</option>
            {quotes.map((quote) => {
                return (
                    <option key1={quote.sentence} key2={quote.character} value={quote.sentence}>{quote.character.name}</option>
                )
            })
            }
        </select>
        </>
    )
}

export default QuoteSelector