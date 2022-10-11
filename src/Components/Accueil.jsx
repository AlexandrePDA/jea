import React from 'react';
import ordi from '../assets/login.png'

const Accueil = () => {
    return (
        <section className="w-screen flex flex-col items-center justify-center lg:flex-row">
            <h1 className="text-light-p"><span>Junior</span>, et alors ?</h1>
           <img src={ordi} alt="ordinateur" className="max-width-sm"/>
        </section>
    );
};

export default Accueil;