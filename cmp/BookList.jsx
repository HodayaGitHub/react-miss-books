import { BookPreview } from "./BookPreview.jsx";

export function BookList({ books, onSelectBookId, onRemoveBook }) {


    return (
        <div>
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



{/* <h2>{book.title}</h2>
<p><strong>Authors:</strong> {book.authors.join(', ')}</p>
<p>price: {book.listPrice.amount}</p>
<img src={book.thumbnail} alt={`Thumbnail for ${book.title}`} /> */}