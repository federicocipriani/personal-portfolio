import React from 'react';
import heroStyles from './hero.module.scss';
import image from '../../images/virtualreality.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

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
                    . I love AI, coding and design.
                </h2>

                <br />
                <br />
                {/* <h3>I love data, coding and design.</h3>
            <br /> */}
                <br />
                <h3>Welcome to my playground.</h3>
            </div>
            <div className={heroStyles.image_container}>
                <img
                    src={image}
                    alt=''
                    className={heroStyles.image_container__image}
                />
            </div>
            <button
                className={heroStyles.arrow_down}
                onClick={() => scrollTo('#portfolio-preview')}>
                <i class='ri-arrow-down-s-line ri-2x'></i>
            </button>
        </section>
    );
};

export default Hero;
