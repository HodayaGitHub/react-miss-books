import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { booksJson } from '../books.json.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { txt: '', minSpeed: 0 }
// _createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getFilterBy,
    setFilterBy,
    getDefaultFilter,
    addReview,
    removeReview,
    getEmptyReview,
    getSiblingBookId,
    addGoogleBook,
    getGoogleBooks,
}

_createBooksFromJson()

function addGoogleBook(item) {
    console.log('item', item)
    // const bookInfo = item.volumeInfo
    const googleBookInfo = {
        // id: item.id,
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle || '',
        authors: item.volumeInfo.authors || [],
        publishedDate: item.volumeInfo.publishedDate || 'Unknown publish date',
        description: item.volumeInfo.description || '',
        pageCount: item.volumeInfo.pageCount || 0,
        categories: item.volumeInfo.categories || [],
        thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '../assets/imgs/error.jpg',
        language: item.volumeInfo.language || 'en',
        listPrice: {
            amount: item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 0,
            currencyCode: item.saleInfo && item.saleInfo.listPrice ? item.saleInfo.listPrice.currencyCode : 'EUR',
            isOnSale: item.saleInfo && item.saleInfo.saleability === 'FOR_SALE',
        },
    }

    return save(googleBookInfo)

    // console.log(googleBookInfo)
}


function getGoogleBooks(queryParam) {
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${queryParam}`


    return axios.get(url)
        .then(res => res.data)
        .then(books => {
            console.log('Axios!');
            // saveToStorage(STORAGE_KEY_CITIES, cities)
            // setTimeout(() => {
                // saveToStorage(STORAGE_KEY_CITIES, null)
            // }, 10000)
            return books
        })
}


function getEmptyBook() {
    return {
        title: '',
        subtitle: '',
        authors: [],
        publishedDate: 1900,
        description: '',
        pageCount: 0,
        categories: [],
        thumbnail: '../assets/imgs/20.jpg',
        language: 'en',
        listPrice: {
            amount: 0,
            currencyCode: 'EUR',
            isOnSale: false,
        },
    }
}


function _createBooksFromJson() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        utilService.saveToStorage(BOOK_KEY, booksJson)
        books = booksJson
    }
    console.log(books)
}



function getDefaultFilter() {
    return { txt: '', minPrice: '' }
}

// function getEmptyBook(title = '', price = '') {
//     return { title, price }
// }

function getEmptyReview() {
    return {
        fullname: '',
        rating: '',
        readAt: '',
    }
}

function query(filterBy) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.minPrice) {
                books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getFilterBy() {
    return { ...books }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}


function getSiblingBookId(bookId, direction) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            const currentBookIdx = books.findIndex(book => book.id === bookId)

            if (currentBookIdx === -1) {
                throw new Error('Book not found')
            }

            let SiblingBookIdx

            if (direction === 'next') {
                SiblingBookIdx = (currentBookIdx + 1) % books.length
            } else if (direction === 'previous') {
                SiblingBookIdx = (currentBookIdx - 1 + books.length) % books.length
            } else {
                throw new Error('Invalid direction')
            }

            return books[SiblingBookIdx].id
        })
}






function addReview(bookId, review) {

    review.id = utilService.makeId()
    return get(bookId)
        .then(book => {
            if (book.reviews) book.reviews.push(review)
            else book.reviews = [review]
            return book
        })
        .then(book => storageService.put(BOOK_KEY, book))
}

function removeReview(bookId, reviewId) {
    return get(bookId).then(book => {
        book.reviews = book.reviews.filter(review => review.id !== reviewId)
        return storageService.put(BOOK_KEY, book)
    })
}


// function _createBook(title, maxPrice = 250) {
//     const book = getEmptyBook(title, maxPrice)
//     book.id = utilService.makeId()
//     return book
// }


// function _createBooks() {
//     let books = utilService.loadFromStorage(BOOK_KEY)
//     if (!books || !books.length) {
//         books = []
//         books.push(_createBook('audu', 300))
//         books.push(_createBook('fiak', 120))
//         books.push(_createBook('subali', 100))
//         books.push(_createBook('mitsu', 150))
//         utilService.saveToStorage(BOOK_KEY, books)
//     }
// }