
const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from './cmp/AppHeader.jsx'
import { AboutTeam } from './cmp/AboutTeam.jsx'
import { AboutGoal } from './cmp/AboutGoal.jsx'
import { UserMsg } from './cmp/UserMsg.jsx'

import { BookIndex } from './pages/BookIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { AddBook } from './cmp/AddBook.jsx'


export function App() {
    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main className="">

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/about" element={<AboutUs />}>
                            <Route path="team" element={<AboutTeam />} />
                            <Route path="goal" element={<AboutGoal />} />
                        </Route>
                        <Route path='/book/edit/:bookId' element={<BookEdit />} />
                        <Route path='/book/edit' element={<BookEdit />} />
                        <Route path='/book/edit/addbook' element={<AddBook />} />

                        {/* <Route path='/book/edit' element={<AddBook />} /> */}

                    </Routes>

                </main>
                <UserMsg />
            </section>
        </Router>
    )
}