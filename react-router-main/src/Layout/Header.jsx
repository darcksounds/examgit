import { NavLink, Link, useLocation } from 'react-router'
import '../Layout/Header.css'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase.js'
import Logo from '../Layout/components/Logo/Logo.jsx'
import Search from '../Layout/components/Search/Search.jsx'
import HeadSection from '../Layout/components/HeadSection/HeadSection.jsx'

function Header({ searchQuery, setSearchQuery }) {
    const [menuData, setMenu] = useState([])
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const isHomePage = location.pathname === '/' || location.pathname === '/home'

    useEffect(() => {
        const getData = async () => {
            const { data, error } = await supabase
                .from('menu')
                .select('*')
            if (error) console.error(error)
            setMenu(data || [])
        }
        getData()
    }, [])

    return (
        <>
            <header>
                <div className="center_conteiner">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <nav className={menuOpen ? 'open' : ''}>
                        {menuData.map(item => (
                            <NavLink
                                key={item.id}
                                to={item.patch}
                                className="navbar"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
            {isHomePage && <HeadSection />}
        </>
    )
}
export default Header