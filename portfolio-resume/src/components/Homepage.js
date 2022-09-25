import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';
import Project from './Project';

export default function Homepage() {
    return (
        <div>
            <div className='mainDiv'>
                <Header />
                <Navigation />
            </div>
                <Project />
            <div className='theFooter'>
                <Footer />
            </div>
        </div>
    );
}