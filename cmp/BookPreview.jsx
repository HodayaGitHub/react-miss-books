

export function BookPreview({ book }) {

    return (
        <article className="book-preview">
            <div className="title">{book.title}</div>

            <div className="price">
                <h1>  Book price:{" "}
                    {book.listPrice
                        ? `${book.listPrice.amount} ${book.listPrice.currencyCode}`
                        : `${book.price} USD`}
                </h1>
            </div>

            <div className="book-img">
                <img
                    src={`../assets/img/books/${book.thumbnail}`}
                    alt={`Thumbnail for ${book.title}`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null // prevents looping
                        currentTarget.src = "../assets/img/books/errorImg.jpg"
                    }}
                />
            </div>
        </article>
    )
}