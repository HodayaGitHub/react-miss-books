
const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from './cmp/AppHeader.jsx'
import { AboutTeam } from './cmp/AboutTeam.jsx'
import { AboutGoal } from './cmp/AboutGoal.jsx'

import { BookIndex } from './pages/BookIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookDetails } from './pages/BookDetails.jsx'


export function App() {
    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main className="">

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BookIndex />} />
                        <Route path="/books/:bookId" element={<BookDetails />} />
                        <Route path="/about" element={<AboutUs />}>
                            <Route path="team" element={<AboutTeam />} />
                            <Route path="goal" element={<AboutGoal />} />
                        </Route>
                    </Routes>



                    {/* <BookIndex /> */}
                </main>
            </section>
        </Router>
    )
}