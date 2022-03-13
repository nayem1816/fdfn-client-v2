import React from 'react';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Home from './pages/Home/Home';

const Layout = () => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Home />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
