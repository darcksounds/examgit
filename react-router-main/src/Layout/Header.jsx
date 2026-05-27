import { NavLink } from 'react-router'
import '../Layout/Header.css'
import { useEffect, useState } from 'react'
import { API_URL } from '../config.js'
import Logo from '../Layout/components/Logo/Logo.jsx'
import Search from '../Layout/components/Search/Search.jsx'
import HeadSection from '../Layout/components/HeadSection/HeadSection.jsx'

function Header({ searchQuery, setSearchQuery }) {
    const [menuData, setMenu] = useState([])
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`${API_URL}/menu`)
            const data = await res.json()
            setMenu(data)
        }
        getData()
    }, [])

    return (
        <>
            <header>
                <div className="center_conteiner">
                    <Logo />
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
            <HeadSection />
        </>
    )
}
export default Header