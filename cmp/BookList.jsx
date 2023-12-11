import { BookPreview } from "./BookPreview.jsx"

const { Link } = ReactRouterDOM

export function BookList({ books, onRemoveBook }) {


    return (
        <div className="books-container">
            {books.map((book) => (
                <div key={book.id} className="book-item">
                    <BookPreview book={book} />
                    <section>
                        <button><Link to={`/books/${book.id}`}>Details</Link></button>
                        <button><Link to={`/books/edit/${book.id}`}>Edit</Link></button>
                        <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                    </section>
                </div>
            ))
            }
        </div>
    )
}

