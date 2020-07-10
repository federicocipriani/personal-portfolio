import React from 'react';
import heroStyles from './hero.module.scss';

const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <h1>Hello.</h1>
            <h2>I am Federico, a front-end developer living in the UK.</h2>
        </div>
    );
};

export default Hero;
