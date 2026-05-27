import './Search.css'

function Search({ searchQuery, setSearchQuery }) {
    return (
        <form className="Search_box" onSubmit={(e) => e.preventDefault()}>
            <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="მოძებნე..."
            />
            <svg className="Search_svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </form>
    )
}
export default Search