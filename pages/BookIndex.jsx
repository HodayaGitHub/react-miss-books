// • <BookIndex> – the app we will be building: a CRUDL for books 
{/* <BookIndex> - renders the filter and the list */ }

import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"
import { BookFilter } from "../cmp/BookFilter.jsx"
import { BookList } from "../cmp/BookList.jsx"
const { useState, useEffect } = React

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())


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
        carService.remove(bookId)
            .then(() => {
                setCars(prevBook => {
                    return prevBook.filter(book => book.id !== bookId)
                })
            })
            .catch(err => console.log('err:', err))

    }



    function OnSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    if (books) {
        return (
            <section className="book-index">
                {!selectedBookId &&
                    <React.Fragment>
                        <h1>Welcome to book index!</h1>
                        <BookFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                        <BookList books={books} onSelectBookId={OnSelectBookId} onRemoveBook={onRemoveBook}/>
                    </React.Fragment>
                }
                {selectedBookId && <BookDetails onBack={() => setSelectedBookId(null)} bookId={selectedBookId} />}
            </section>
        )

    } else {
        return (<p>Loading books...</p>)
    }
}