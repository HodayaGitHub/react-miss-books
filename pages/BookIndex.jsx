// • <BookIndex> – the app we will be building: a CRUDL for books 
{/* <BookIndex> - renders the filter and the list */ }
// const { Link,  useNavigate} = ReactRouterDOM
const { useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { BookFilter } from "../cmp/BookFilter.jsx"
import { BookList } from "../cmp/BookList.jsx"
const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const navigate = useNavigate()


    useEffect(() => {
        loadBooks()
        return () => {
            console.log('Unmounted')
        }
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy)
            .then((books) => setBooks(books))
            .catch((err) => console.log('err:', err))
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks(prevBook => {
                    return prevBook.filter(book => book.id !== bookId)
                })
                showSuccessMsg(`Book successfully removed! ${bookId}`)
            })
            .catch(err => console.log('err:', err))
    }

    const onAddBook = () => {
        navigate(`/books/edit`)
    }


    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    if (books) {
        return (
            <section className="book-index">
                <React.Fragment>
                    <h1>Welcome to book index!</h1>
                    <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                    <button onClick={onAddBook}>
                        Add Book
                    </button>
                    <BookList books={books} onRemoveBook={onRemoveBook} />
                </React.Fragment>
            </section>
        )

    } else {
        return (<p>Loading books...</p>)
    }
}