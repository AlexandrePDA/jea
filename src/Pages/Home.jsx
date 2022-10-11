import React from 'react';
import Header from '../Components/Header';
import Accueil from '../Components/Accueil';
import Discord from '../Components/Discord';


const Home = () => {
    return (
        <div className='bg-dark-p overflow-hidden'>
            <Header />
            <Accueil />
            <Discord />
        </div>
    );
};

export default Home;