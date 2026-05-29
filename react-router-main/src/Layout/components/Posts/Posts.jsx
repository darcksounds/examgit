import { Link } from 'react-router'
import '../Posts/Posts.css'
import { useEffect, useState } from 'react'
import { supabase } from '../../../supabase.js'

async function fetchProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('*')
    if (error) console.error(error)
    return data
}

function PostsSection({ activeCategory, sortPrice, searchQuery }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchProducts().then(data => setPosts(data || []))
    }, [])

    const filteredPosts = posts
        .filter(post => activeCategory === 'all' || post.category === activeCategory)
        .filter(post => {
            if (!searchQuery) return true
            const query = searchQuery.toLowerCase()
            return (
                post.title.toLowerCase().includes(query) ||
                post.collection.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query) ||
                post.price.toString().includes(query)
            )
        })
        .sort((a, b) => {
            if (sortPrice === 'low-high') return a.price - b.price
            if (sortPrice === 'high-low') return b.price - a.price
            return 0
        })

    return (
        <div className='postsArrea'>
            {filteredPosts.length === 0 && (
                <p style={{gridColumn: '1/-1', textAlign: 'center', fontSize: '1.8rem', color: 'gray'}}>
                    პროდუქტი ვერ მოიძებნა 😕
                </p>
            )}
            {filteredPosts.map((post) => (
                <Link key={post.id} to={`/products/${post.id}`} className='postCard'>
                    <div className='postCard_image'>
                        <span className='postCard_collection'>{post.collection}</span>
                        <img src={post.image} alt={post.title} />
                    </div>
                    <div className='postCard_info'>
                        <h3>{post.title}</h3>
                        {post.sizes && <p className='postCard_size'>Size: {post.sizes}</p>}
                        <div className='postCard_bottom'>
                            <span className='postCard_price'>${post.price}</span>
                            <button className='postCard_cart'>🛒</button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default PostsSection