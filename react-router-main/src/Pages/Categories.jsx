import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import './Categories.css'

function Categories() {
    const [counts, setCounts] = useState({ bags: 0, tshirts: 0 })
    const [images, setImages] = useState({ bags: '', tshirts: '' })

    useEffect(() => {
        const getCounts = async () => {
            const { data } = await supabase.from('products').select('category, image')
            if (data) {
                const bags = data.filter(p => p.category === 'bags')
                const tshirts = data.filter(p => p.category === 'tshirts')
                setCounts({ bags: bags.length, tshirts: tshirts.length })
                setImages({
                    bags: bags[0]?.image || '',
                    tshirts: tshirts[0]?.image || ''
                })
            }
        }
        getCounts()
    }, [])

    return (
        <div className='categories_page'>
            <div className='categories_topic'>
                <h2>კატეგორიები</h2>
                <p>აირჩიეთ თქვენთვის სასურველი კატეგორია</p>
            </div>
            <div className='categories_grid'>
                <Link to='/products?category=bags' className='category_card'>
                    <div
                        className='category_card_image'
                        style={{backgroundImage: `url(${images.bags})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    >
                        <div className='category_card_overlay'>
                            <h3>ჩანთები</h3>
                            <span>{counts.bags} პროდუქტი</span>
                        </div>
                    </div>
                </Link>
                <Link to='/products?category=tshirts' className='category_card'>
                    <div
                        className='category_card_image'
                        style={{backgroundImage: `url(${images.tshirts})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    >
                        <div className='category_card_overlay'>
                            <h3>მაისურები</h3>
                            <span>{counts.tshirts} პროდუქტი</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Categories