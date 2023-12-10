// • <BookIndex> – the app we will be building: a CRUDL for books 
{/* <BookIndex> - renders the filter and the list */ }

import { bookService } from "../services/book.service.js"
const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    // const [selectedCarId, setSelectedCarId] = useState(null)
    // const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
        return () => {
            alert('Unmounted')
        }
    }, [])

    function loadBooks() {
        bookService.query('bookDB')
            .then(books => setBooks(books))
            .catch(err => console.log('err:', err))
    }

    if (books) {
        return (
            <div>
                {books.map((book) => (
                    <div key={book.id} className="book-container">
                        <h2>{book.title}</h2>
                        <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
                        <p><strong>Description:</strong> {book.description}</p>
                        <img src={book.thumbnail} alt={`Thumbnail for ${book.title}`} />
                    </div>
                ))}
            </div>
        )
    } else {
        return <p>Loading books...</p>
    }
}