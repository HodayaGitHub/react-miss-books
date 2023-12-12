
const { useState, useEffect, useRef } = React
import { getGoogleBooksMockData } from '../google.books.api.js'
import { bookService } from '../services/book.service.js'
import { utilService } from '../services/util.service.js'

export function AddBook({ onSubmitBook, handlePriceChange, setBookToAdd, onBack, bookToAdd, handleChange }) {

    const [searchResults, setSearchResults] = useState([])
    const [queryParam, setQuery] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)

    function debounce(func, wait) {
        const timeoutRef = useRef(null);

        return function (...args) {
            const later = () => {
                clearTimeout(timeoutRef.current)
                func(...args)
            }
            clearTimeout(timeoutRef.current)
            timeoutRef.current = setTimeout(later, wait)
        }
    }


    const debouncedSearch = debounce(() => {
        //bookService.getGoogleBooks(queryParam)
        getGoogleBooksMockData()
            .then((data) => {
                const firstFiveResults = data.items.slice(0, 5).map(item => item)
                setSearchResults(firstFiveResults)
            })
    }, 400)

    useEffect(() => {
        console.log(queryParam)
        if (!queryParam) return

        debouncedSearch()
    }, [queryParam])

    function handleSearch(e) {
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


    // function handleBookTitleSearch({ target }) {
    //     const field = target.name
    //     let value = target.value

    //     // getGoogleBooksData()
    //     //     .then((data) => {
    //     //         const firstFiveTitles = data.items.slice(0, 5).map(item => item.volumeInfo.title)
    //     //         console.log(firstFiveTitles)
    //     //     })

    //     setBookToAdd(prevBookToAdd => ({ ...prevBookToAdd, [field]: value }))
    // }


    // console.log(bookToAdd)

    return (

        <section className='add-book'>
            <h2>Add A Book</h2>
            <form onSubmit={onSubmitBook}>
                <label htmlFor='title'>Title: </label>
                <input
                    value={queryParam}
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