import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="ContentWrapper">
            {children}
        </div>
    );
};

export default Layout;
