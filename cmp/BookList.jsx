export function BookList({books}) {


    return (
        <div>
            {books.map((book) => (
                <div key={book.id} className="book-item">
                    <h2>{book.title}</h2>
                    <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p>price: {book.listPrice.amount}</p>
                    <img src={book.thumbnail} alt={`Thumbnail for ${book.title}`} />
                </div>
            ))}

        </div>
    )
}