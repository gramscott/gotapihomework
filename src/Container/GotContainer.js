import React, { useEffect, useState } from "react";
import QuoteList from "../Components /QuoteList";
import Quotes from "../Components /Quotes";
import FavQuotes from "../Components /FavQuotes";
import QuoteSelector from "../Components /QuoteSelector";
import AddToFavButton from "../Components /AddToFavButton";

const GotContainer = () => {

    const[quotes, setQuotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [favQuotes, setFavQuotes] = useState("")
    const [selectedQuotes, setSelectedQuotes] = useState("")

    useEffect(() => {
        getQuotes();
    }, [])

    const handleQuoteSelected = (quoteCode, characterCode) => {
        setSelectedQuotes (quoteCode, characterCode);
    }

    const selectedQuoteObject = quotes.find(quote => quote.sentence + quote.character.name === selectedQuotes)

    const getQuotes = () => {
        fetch("https://api.gameofthronesquotes.xyz/v1/random/5")
        .then(res => res.json())
        .then(data => setQuotes(data))
        .then(data => setFavQuotes(data))
        .then(() => setIsLoading(false))
    }

    const handleFavClick = (quote) => {
        const copyFavQuotes = [...favQuotes]
        copyFavQuotes.push(quote)
        setFavQuotes(copyFavQuotes)
    }


    return (
        <div>
            <h1>Game of Thrones: Quotes</h1>
             <QuoteList quotes={quotes}/>
             <AddToFavButton/>
             {!isLoading ? <QuoteSelector quotes={quotes} handleQuoteSelected={handleQuoteSelected}/> : <h1>Loading</h1>} 
             <FavQuotes favQuotes={favQuotes}/>
             {!isLoading ? <Quotes selectedQuotes={selectedQuoteObject} handleFavClick={handleFavClick}/> : null}
        </div>
    )

}

export default GotContainer 