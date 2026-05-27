import LogoMain from '../../../assets/logo.png'
import './Logo.css'

function Logo() {
    return (
        <>
            {/* დესკტოპზე PNG */}
            <div className="logo_box desktop_logo">
                <img className="logo" src={LogoMain} alt="logo" />
            </div>

            {/* მობილურზე SVG */}
            <div className="logo_box mobile_logo">
                <svg width="50" height="50" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fffafb"/>
                            <stop offset="100%" stopColor="#ffe8f1"/>
                        </linearGradient>
                        <linearGradient id="txt" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(255,77,141)"/>
                            <stop offset="100%" stopColor="#d4af37"/>
                        </linearGradient>
                        <filter id="softGlow">
                            <feGaussianBlur stdDeviation="1.5" result="blur"/>
                            <feMerge>
                                <feMergeNode in="blur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <circle cx="60" cy="60" r="56" fill="url(#bg)"/>
                    <circle cx="60" cy="60" r="52" fill="none" stroke="url(#txt)" strokeWidth="1.8" opacity="0.7"/>
                    <circle cx="60" cy="60" r="48" fill="none" stroke="url(#txt)" strokeWidth="0.8" opacity="0.35"/>
                    <text
                        x="50%"
                        y="53%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="30"
                        fontFamily="'Cormorant Garamond', 'Times New Roman', serif"
                        fontStyle="italic"
                        fontWeight="700"
                        letterSpacing="1"
                        fill="url(#txt)"
                        filter="url(#softGlow)"
                    >
                        L&N
                    </text>
                </svg>
            </div>
        </>
    )
}
export default Logo