import React from 'react';

function Nav() {
    return (
        <>
            <nav
                className="w-full h-16 z-10 fixed top-0 flex"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <div
                    className="uppercase text-2xl text-white
                ">
                    logo
                </div>
            </nav>
        </>
    );
}

export default Nav;
