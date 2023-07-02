import React from 'react';
import coverPhoto from '../assets/1.png';
import Nav from '../components/Nav';

function Landing() {
    return (
        <>
            <Nav />
            <div
                style={{
                    backgroundImage: `url(${coverPhoto})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                    height: '100vh',
                    width: '100%',
                    position: 'relative'
                }}></div>
        </>
    );
}

export default Landing;
