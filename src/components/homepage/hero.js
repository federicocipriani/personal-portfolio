import React from 'react';
import heroStyles from './hero.module.scss';
import image from '../../images/virtualreality.svg';

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <h1>Hello.</h1>
            <h2>
                I am{' '}
                <span style={{ color: '#02478c', fontWeight: '900' }}>
                    Federico
                </span>
                , a front-end developer living in the UK.
            </h2>
            <br />
            <br />
            <h3>I love data, coding and design.</h3>
            <img src={image} alt='' className={heroStyles.image} />
        </section>
    );
};

export default Hero;
