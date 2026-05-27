import '../Layout/Main.css'
import Filter from '../Layout/components/Filter/Filter.jsx'
import PostsSection from '../Layout/components/Posts/Posts.jsx'
import ContactSection from '../Layout/components/ContactSection/ContactSection.jsx'
import { useState } from 'react'

function Main({ searchQuery }) {
    const [activeCategory, setActiveCategory] = useState('all')
    const [sortPrice, setSortPrice] = useState('default')

    return (
        <>
            <div className='topic'>
                <h2>ჩვენი კოლექცია</h2>
                <h3>შეარჩიეთ თქვენთვის სასურველი მოდელი და ისარგებლეთ უსწრაფესი მიტანით მთელი ქვეყნის მაშტაბით</h3>
            </div>
            <Filter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                sortPrice={sortPrice}
                setSortPrice={setSortPrice}
            />
            <PostsSection
                activeCategory={activeCategory}
                sortPrice={sortPrice}
                searchQuery={searchQuery}
            />
            <ContactSection />
        </>
    )
}
export default Main