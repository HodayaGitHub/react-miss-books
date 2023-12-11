import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails({ onBack }) {

    const [book, setBook] = useState(null)
    const currYear = new Date().getFullYear()
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadBook()
    }, [params.bookId])


    function loadBook() {
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('err:', err)
                navigate('/books')
            })
    }

    function onBack() {
        navigate('/books')
    }

    function isExpensive() {
        let dynClass = ''
        if (book.listPrice.amount > 150) {
            dynClass = 'expensive'
        } else if (book.listPrice.amount < 20) {
            dynClass = 'cheap'
        }
        return dynClass
    }



    const onNextBook = () => {
        bookService.getNextBookId(params.bookId)
            .then((nextBookId) => {
                navigate(`/books/${nextBookId}`)
            })
            .catch((err) => {
                console.error("Error getting next book ID:", err)
                navigate('/books')
            })
    }



    if (!book) return <div>Loading...</div>

    let dynClass = isExpensive()
    const isVintage = (currYear - book.publishedDate) > 10 ? 'Vintage' : 'New'


    return (
        <section className="book-details">
            <h1>Book Title: {book.title}</h1>
            {book.listPrice.isOnSale && <span className="on-sale"> On Sale! </span>}

            <h2 className={dynClass}>Book Price: ${book.listPrice.amount}</h2>
            {book.pageCount > 500 && <h3>Serious Reading</h3>}
            {book.pageCount <= 500 && book.pageCount > 200 && <h3> Descent Reading</h3>}
            {book.pageCount < 100 && <h3>Light Reading</h3>}
            <h3>Page Amount: {book.pageCount}</h3>

            <h3>{isVintage}</h3>
            <p><strong>Description:</strong> {book.description}</p>
            <img src={`../assets/img/books/${book.thumbnail}`} alt={`Thumbnail for ${book.title}`} />
            <button onClick={onBack}>Back</button>

            <button onClick={onNextBook}>
                Next Book
            </button>

        </section >
    )
}