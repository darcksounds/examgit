import './App.css'
import Header from './Layout/Header.jsx'
import Main from './Layout/Main.jsx'
import Footer from './Layout/Footer.jsx'
import FloatingButtons from './Layout/components/FloatingButtons/FloatingButtons.jsx'
import { useState } from 'react'

function App() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Main searchQuery={searchQuery} />
            <Footer />
            <FloatingButtons />
        </>
    )
}
export default App