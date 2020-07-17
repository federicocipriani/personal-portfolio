import React from 'react';
import Layout from '../components/layout';
import aboutStyle from './about.module.scss';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About' />
            <section className='page'>
                <h1 className='page__title'>About</h1>
                <div className={aboutStyle.page__content__card}>
                    <h2 className={aboutStyle.page__content__card__title}>
                        My Present and The Future
                    </h2>
                    <div className={aboutStyle.page__content__card__container}>
                        <div
                            className={
                                aboutStyle.page__content__card__experience
                            }>
                            <h3
                                className={
                                    aboutStyle.page__content__card__container__title
                                }>
                                Kaizen{' '}
                                <span style={{ fontSize: '1rem' }}>
                                    (aka Continuous Improvement)
                                </span>
                            </h3>
                            <p></p>
                        </div>
                        <div
                            className={
                                aboutStyle.page__content__card__education
                            }>
                            <h3
                                className={
                                    aboutStyle.page__content__card__container__title
                                }>
                                Learning
                            </h3>
                            <ul>
                                <li>FreeCodeCamp</li>
                                <li>Udemy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;

{
    /* <div className={aboutStyle.page__content}>
                    <div className={aboutStyle.about__description}>
                        <h2 className={aboutStyle.about__title}>Who am I?</h2>
                        <p>
                            I am Federico, an aerospace engineer with a deep
                            passion for data, coding and design. I love seeing
                            and creating beautifully designed and pixel-perfect
                            things. But I am also an engineer deep inside and
                            hence, I love building things and see the results
                            immediately (if things do not break). That is why I
                            love to code as it gives me the power to quickly (if
                            things do not break) create things from scratch and
                            solve issues or necessities of different nature.
                        </p>
                    </div>
                    <div className={aboutStyle.about__curriculum}>
                        <div className={aboutStyle.about__curriculum__section}>
                            <h2 className={aboutStyle.about__title}>
                                Kaizen{' '}
                                <span style={{ fontSize: '1rem' }}>
                                    (aka Continuous Improvement)
                                </span>
                            </h2>
                            <div
                                className={
                                    aboutStyle.about__curriculum__section__heading
                                }>
                                <div
                                    className={
                                        aboutStyle.about__curriculum__section__heading__main
                                    }>
                                    <h3>Web Development</h3>
                                    <p>From 2019</p>
                                </div>
                                <div
                                    className={
                                        aboutStyle.about__curriculum__section__heading__sub
                                    }>
                                    Text
                                </div>
                            </div>
                            <ul
                                className={
                                    aboutStyle.about__curriculum__section__list
                                }>
                                <li>Studied on FreeCodeCamp</li>
                                <li></li>
                            </ul>
                        </div>
                        <div className={aboutStyle.about__curriculum__section}>
                            <h2 className={aboutStyle.about__title}>
                                Education
                            </h2>
                            <div
                                className={
                                    aboutStyle.about__curriculum__section__card
                                }>
                                <div
                                    className={
                                        aboutStyle.about__curriculum__section__heading
                                    }>
                                    <div
                                        className={
                                            aboutStyle.about__curriculum__section__heading__main
                                        }>
                                        <h3>
                                            Master in Business Administration
                                        </h3>
                                        <p>July 2020 - July 2021</p>
                                    </div>
                                    <div
                                        className={
                                            aboutStyle.about__curriculum__section__heading__sub
                                        }>
                                        Quantic School of Business and
                                        Technology
                                    </div>
                                </div>
                                <ul
                                    className={
                                        aboutStyle.about__curriculum__section__list
                                    }>
                                    <li>Studied on FreeCodeCamp</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div
                                className={
                                    aboutStyle.about__curriculum__section__card
                                }>
                                <div
                                    className={
                                        aboutStyle.about__curriculum__section__heading
                                    }>
                                    <div
                                        className={
                                            aboutStyle.about__curriculum__section__heading__main
                                        }>
                                        <h3>MSc in Thermal Power</h3>
                                        <p>Oct 2016 - Sept 2017</p>
                                    </div>
                                    <div
                                        className={
                                            aboutStyle.about__curriculum__section__heading__sub
                                        }>
                                        Quantic School of Business and
                                        Technology
                                    </div>
                                </div>
                                <ul
                                    className={
                                        aboutStyle.about__curriculum__section__list
                                    }>
                                    <li>Studied on FreeCodeCamp</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */
}
