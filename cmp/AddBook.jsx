
const { useState, useEffect } = React
import { getGoogleBooksData } from "../google.books.api.js"
import { bookService } from '../services/book.service.js'

export function AddBook({ onSubmitBook, handlePriceChange, setBookToAdd, onBack, bookToAdd, handleChange }) {

    const [searchResults, setSearchResults] = useState([])
    const [query, setQuery] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    // const [bookToAdd, setBookToAdd] = useState(bookService.getEmptyBook())


    useEffect(() => {
        console.log(query)
        getGoogleBooksData(query)
            .then((data) => {
                // const firstFiveTitles = data.items.slice(0, 5).map(item => item.volumeInfo.title)
                const firstFiveResults = data.items.slice(0, 5).map(item => item)
                // console.log(firstFiveResults)
                setSearchResults(firstFiveResults)
            })
    }, [query])


    function handleSearch(e) {
        const field = e.target.name
        let inputValue = e.target.value

        setQuery(inputValue)
        setShowDropdown(inputValue.trim() !== '')

    }


    function handleSelectTitle(apiBook, title) {
        setShowDropdown(false)
        console.log('chosen', apiBook)
        // setBookToAdd(prevBookToAdd => ({ ...prevBookToAdd, ...bookapi }))

        bookService.addGoogleBook(apiBook)
            .then(() => {
                showSuccessMsg(`Book saved successfully`)
                //   navigate('/book')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg("Couldn't save book")
            })
    }


    function handleBookTitleSearch({ target }) {
        const field = target.name
        let value = target.value

        // getGoogleBooksData()
        //     .then((data) => {
        //         const firstFiveTitles = data.items.slice(0, 5).map(item => item.volumeInfo.title)
        //         console.log(firstFiveTitles)
        //     })

        setBookToAdd(prevBookToAdd => ({ ...prevBookToAdd, [field]: value }))
    }


    // console.log(bookToAdd)
    return (

        <section className='add-book'>
            <h2>Add A Book</h2>
            <form onSubmit={onSubmitBook}>
                <label htmlFor='title'>Title: </label>
                <input
                    value={query}
                    onChange={handleSearch}
                    type='text'
                    placeholder='Title'
                    id='title'
                    name='title'
                    required
                />

                {showDropdown && (
                    <ul className="clean-list drop-down-list">
                        {searchResults.map((item, index) => (
                            <li className="search-list-item" key={index}>
                                <span>
                                    {item.volumeInfo.title}
                                </span>

                                <span>
                                    <button onClick={() => handleSelectTitle(item, item.volumeInfo.title)}>+</button>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
                {/* 
                <label htmlFor='price'>Price: </label>
                <input
                    value={bookToAdd.listPrice.amount}
                    onChange={handlePriceChange}
                    type='number'
                    placeholder='price'
                    id='price'
                    name='price'
                    required
                /> */}

                <button>Save</button>
            </form>
            <button onClick={onBack}>Back</button>
        </section>

    )

}