import React, {useState} from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Project from './Project';

export default function Homepage() {


    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        return <Resume />;
      };

    const handlePageChange = (page) => setCurrentPage(page);




    return (
        <div>
            <div className='mainDiv'>
                <Header />
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
                {renderPage()}
            <div className='theFooter'>
                <Footer />
            </div>
        </div>
    );
}