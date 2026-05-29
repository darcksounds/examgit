import './App.css'
import Header from './Layout/Header.jsx'
import Main from './Layout/Main.jsx'
import Footer from './Layout/Footer.jsx'
import FloatingButtons from './Layout/components/FloatingButtons/FloatingButtons.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'
import Categories from './Pages/Categories.jsx'
import Contact from './Pages/Contact.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router'

function App() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Routes>
                <Route path="/" element={<Main searchQuery={searchQuery} showContact={true} />} />
                <Route path="/home" element={<Main searchQuery={searchQuery} showContact={true} />} />
                <Route path="/products" element={<Main searchQuery={searchQuery} showContact={false} />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <FloatingButtons />
        </>
    )
}
export default App