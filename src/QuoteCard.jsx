const QuoteCard = (props) => {
    return (
        <div className='quote-card'>
            <p>{props.quoteText}</p>
            <h5>{props.quoteAuthor}</h5>
        </div>
    )
}

export default QuoteCard
