import './Footer.css'
import { Link } from 'react-router'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_content'>
                <div className='footer_brand'>
                    <div className='footer_logo'>LN</div>
                    <h3>LN Fashion Bags</h3>
                    <p>აღმოაჩინეთ თქვენთვის უნიკალური სტილი და საუკეთესო ხარისხის ჩანთები</p>
                </div>

                <div className='footer_links'>
                    <h4>სწრაფი ბმულები</h4>
                    <Link to='/home'>მთავარი გვერდი</Link>
                    <Link to='/products'>გალერეა</Link>
                    <Link to='/categories'>კატეგორიები</Link>
                    <Link to='/contact'>კონტაქტი</Link>
                </div>

                <div className='footer_socials'>
                    <h4>დაგვიკავშირდით</h4>
                    <div className='footer_social_icons'>
                        <a href='https://facebook.com/lnfashionbags' target='_blank'>f</a>
                        <a href='https://instagram.com/lnfashionbags' target='_blank'>📷</a>
                        <a href='https://tiktok.com/@lnfashionbags' target='_blank'>TT</a>
                    </div>
                </div>
            </div>

            <div className='footer_bottom'>
                <p>© 2026 LN Fashion Bags. All rights reserved.</p>
                <p>Made with ❤️ by LN Fashion Team</p>
            </div>
        </footer>
    )
}
export default Footer