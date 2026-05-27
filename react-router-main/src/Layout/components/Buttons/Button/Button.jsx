import { Link } from 'react-router'
import './Button.css'

function Button({ text, to, className = "", onClick }) {
    return (
        <Link
            to={to}
            className={`button ${className}`}
            onClick={onClick}
        >
            {text}
        </Link>
    )
}

export default Button