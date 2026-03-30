import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div id="page-wrapper" className="elite-layout">
            <Header />
            <main id="main-content" className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
