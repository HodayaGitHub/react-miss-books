// import { HomePage } from './pages/HomePage.jsx'
import { BookIndex } from './pages/BookIndex.jsx'


export function App() {
    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <h1>Miss Books</h1>
            </header>
            <main className="container">
                {/* <HomePage /> */}
                <BookIndex />
            </main>
        </section>
    )
}