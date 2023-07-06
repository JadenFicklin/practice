import React from 'react';
import coverPhoto from '../assets/1.png';
import Nav from '../components/Nav';
import Notes from '../components/Notes';
import Form from '../components/Form';

function Landing() {
    return (
        <>
            {/* <Nav /> */}
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
            {/* <Notes /> */}
            <Form />
        </>
    );
}

export default Landing;
