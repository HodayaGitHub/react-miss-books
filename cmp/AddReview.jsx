import { useState } from 'react'
import { bookService } from '../services/book.service.js'

export function AddReview({ bookId, onAddReview }) {
    const [review, setReview] = useState({
        fullname: '',
        rating: 1,
        readAt: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        bookService.addReview(bookId, review)
            .then((newReview) => {
                onAddReview(newReview)
                // Clear the form
                setReview({
                    fullname: '',
                    rating: 1,
                    readAt: '',
                })
            })
            .catch((err) => console.error('Error adding review:', err))
    }

    return (
        <div className="add-review">
            <h3>Add a Review</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Fullname:
                    <input type="text" name="fullname" value={review.fullname} onChange={handleInputChange} required />
                </label>
                <label>
                    Rating:
                    <select name="rating" value={review.rating} onChange={handleInputChange} required>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Read At:
                    <input type="date" name="readAt" value={review.readAt} onChange={handleInputChange} required />
                </label>
                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}
