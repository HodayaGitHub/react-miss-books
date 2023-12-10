import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId)
            .then(book => setBook(book))
    }, [])


    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Book Title: {book.title}</h1>
            <h1>Book Price: ${book.listPrice.amount}</h1>
            <p><strong>Description:</strong> {book.description}</p>
            <img src={book.thumbnail} alt={`Thumbnail for ${book.title}`} /> 
            <button onClick={onBack}>Back</button>
        </section>
    )
}