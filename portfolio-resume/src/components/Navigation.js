
export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className='navButtons'>
            <button className="buttonC">
                <a
                    href="#AboutMe"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'nav-linkActive' : 'nav-link'}
                    >About Me
                </a>
            </button>
            <button className="buttonC">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-linkActive' : 'nav-link'}
                    >Portfolio
                </a>
            </button>
            <button className="buttonC">
                <a
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-linkActive' : 'nav-link'}
                    >Contact
                </a>
            </button>
            <button className="buttonC">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-linkActive' : 'nav-link'}
                    >Resume
                </a>
            </button>
        </div>
    )
}