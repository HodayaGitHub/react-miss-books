import { bookService } from "../services/book.service.js"
import { AddReview } from '../cmp/AddReview.jsx'
import { ReviewList } from '../cmp/ReviewList.jsx'
import { LongTxt } from "../cmp/LongTxt.jsx"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails({ onBack }) {

    const [book, setBook] = useState(null)
    const currYear = new Date().getFullYear()
    const params = useParams()
    const navigate = useNavigate()
    const [isReview, setIsReview] = useState(false)
    const { bookId } = useParams()




    useEffect(() => {
        loadBook()
    }, [params.bookId])


    function loadBook() {
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('err:', err)
                navigate('/book')
            })
    }

    function onBack() {
        navigate('/book')
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

    function onAddReview(reviewToAdd) {
        console.log('review to add', reviewToAdd);
        bookService.addReview(bookId, reviewToAdd)
            .then(updatedBook => {
                setBook(updatedBook)
                setIsReview(false)
                showSuccessMsg('Review saved successfully')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Error saving review')
            })
    }

    function onRemoveReview(reviewId) {
        bookService
            .removeReview(bookId, reviewId)
            .then(savedBook => {
                setBook(savedBook)
                showSuccessMsg('Review deleted successfully')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Error deleting review')
                navigate('/book')
            })
    }



    const onNextBook = () => {
        bookService.getNextBookId(params.bookId)
            .then((nextBookId) => {
                navigate(`/book/${nextBookId}`)
            })
            .catch((err) => {
                console.error("Error getting next book ID:", err)
                navigate('/book')
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

            <LongTxt txt={book.description} />

            {/* <p><strong>Description:</strong> {book.description}</p> */}
            <img src={`../assets/img/books/${book.thumbnail}`} alt={`Thumbnail for ${book.title}`} />

            <button onClick={() => setIsReview(!isReview)}>Add Review</button>
            {isReview && <AddReview onAddReview={onAddReview} />}
            <section className='reviews'>
                <h4>Reviews:</h4>
                {(book.reviews && book.reviews.length && (
                    <ReviewList reviews={book.reviews} onRemoveReview={onRemoveReview} />
                )) ||
                    'No Reviews'}
            </section>

            <button onClick={onBack}>Back</button>

            <button onClick={onNextBook}>
                Next Book
            </button>

        </section >
    )
}