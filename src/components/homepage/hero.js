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
                    <span style={{ color: 'var(--color2)', fontWeight: '400' }}>
                        Federico
                    </span>
                    . I love{' '}
                    <span
                        style={{
                            color: 'var(--color2)',
                            textDecoration: 'underline dashed',
                        }}>
                        AI
                    </span>
                    ,{' '}
                    <span
                        style={{
                            color: 'var(--color2)',
                            textDecoration: 'underline dashed',
                        }}>
                        coding
                    </span>{' '}
                    and{' '}
                    <span
                        style={{
                            color: 'var(--color2)',
                            textDecoration: 'underline dashed',
                        }}>
                        design
                    </span>
                    .
                </h2>
                <br />
                <br />
                <br />
                <h3 style={{ color: 'var(--color3)', fontWeight: '400' }}>
                    Welcome to my playground.
                </h3>
            </div>
            <div className={heroStyles.image_container}>
                <img
                    src={image}
                    alt=''
                    className={heroStyles.image_container__image}
                />
            </div>
            <div>
                <button
                    className={heroStyles.arrow_down}
                    onClick={() => scrollTo('#portfolio-preview')}>
                    <i class='ri-arrow-down-s-line ri-2x'></i>
                </button>
            </div>
        </section>
    );
};

export default Hero;
