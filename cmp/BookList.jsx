import { BookPreview } from "./BookPreview.jsx";

export function BookList({ books, onSelectBookId, onRemoveBook }) {


    return (
        <div className="books-container">
            {books.map((book) => (
                <div key={book.id} className="book-item">
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onSelectBookId(book.id)}>Details</button>
                    </section>
                </div>
            ))
            }
        </div>
    )
}

