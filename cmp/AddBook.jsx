



export function AddBook({ onSubmitBook, handlePriceChange,setBookToAdd, onBack, bookToAdd, handleChange }) {


    function handleBookTitleSearch({ target }) {
        const field = target.name
        let value = target.value
        setBookToAdd(prevBookToAdd => ({ ...prevBookToAdd, [field]: value }))
      }
    


    console.log(bookToAdd)
    return (

        <section className='add-book'>
            <h2>Add A Book</h2>
            <form onSubmit={onSubmitBook}>
                <label htmlFor='title'>Title: </label>
                <input
                    value={bookToAdd.title || ''} 
                    onChange={handleBookTitleSearch}
                    type='text'
                    placeholder='Title'
                    id='title'
                    name='title'
                    required
                />
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