import React from 'react';
import heroStyles from './hero.module.scss';
import image from '../../images/virtualreality.svg';

const Hero = () => {
    return (
        <section className={heroStyles.hero}>
            <div className={heroStyles.page__content}>
                <h1 style={{ fontWeight: '400' }}>Hello.</h1>
                <h2 style={{ fontWeight: '400' }}>
                    I am{' '}
                    <span style={{ color: '#02478c', fontWeight: '400' }}>
                        Federico
                    </span>
                    . I love data, coding and design.
                </h2>

                <br />
                <br />
                {/* <h3>I love data, coding and design.</h3>
            <br /> */}
                <br />
                <h3>Welcome to my playground.</h3>
            </div>
            <img src={image} alt='' className={heroStyles.image} />
        </section>
    );
};

export default Hero;
