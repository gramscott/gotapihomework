import React from "react"

const FavQuotes = ({favQuotes}) => {

    if(!favQuotes) {
        return null
    }

    const list = favQuotes.map((quote) => {
        return (<li>{quote.sentence}</li>)
    })

    return (
        <>
        <h3>Fav Quotes</h3>
        <ul>
            {list}
        </ul>
        </>
    )
}

export default FavQuotes



