import '../Layout/Main.css'
import Filter from '../Layout/components/Filter/Filter.jsx'
import PostsSection from '../Layout/components/Posts/Posts.jsx'
import ContactSection from '../Layout/components/ContactSection/ContactSection.jsx'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router'

function Main({ searchQuery, showContact = true }) {
    const [activeCategory, setActiveCategory] = useState('all')
    const [sortPrice, setSortPrice] = useState('default')
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const category = searchParams.get('category')
        if (category) setActiveCategory(category)
    }, [searchParams])

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
            {showContact && (
                <div className='contact_wrapper'>
                    <ContactSection />
                </div>
            )}
        </>
    )
}
export default Main