import React from 'react';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Main from './pages/Main';

const Layout = () => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
