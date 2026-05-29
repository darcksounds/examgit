import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import './ProductDetail.css'

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getProduct = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .single()
            if (error) console.error(error)
            setProduct(data)
        }
        getProduct()
    }, [id])

    if (!product) return <p style={{textAlign: 'center', padding: '4rem'}}>იტვირთება...</p>

    return (
        <div className='product_detail'>
            <div className='product_detail_image'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='product_detail_info'>
                <span className='product_detail_collection'>{product.collection}</span>
                <h1>{product.title}</h1>
                <p className='product_detail_description'>{product.description}</p>
                {product.sizes && (
                    <div className='product_detail_sizes'>
                        <h4>ზომები:</h4>
                        <div className='sizes_list'>
                            {product.sizes.split(',').map(size => (
                                <span key={size} className='size_badge'>{size.trim()}</span>
                            ))}
                        </div>
                    </div>
                )}
                <div className='product_detail_price'>
                    <span>${product.price}</span>
                    <button className='product_detail_cart'>🛒 შეიძინე</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail