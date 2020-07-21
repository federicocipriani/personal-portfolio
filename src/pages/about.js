import React from 'react';
import Layout from '../components/layout';
import aboutStyle from './about.module.scss';
import Head from '../components/head';
import image from '../images/about_me.png';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <Layout>
            <Head title='About' />
            <section className='page'>
                <h1 className='page__title'>About</h1>
                <div className={aboutStyle.page__content}>
                    <div className={aboutStyle.page__content__card}>
                        <h2 className={aboutStyle.page__content__card__title}>
                            Who am I?
                        </h2>
                        <p className={aboutStyle.page__content__card__text}>
                            I am Federico Cipriani, born aerospace engineer with
                            a profound passion for coding. Now you can find me
                            at the intersection between front-end development,
                            data science and design.
                        </p>
                        <h2 className={aboutStyle.page__content__card__title}>
                            What is my background?
                        </h2>
                        <p className={aboutStyle.page__content__card__text}>
                            I have an aerospace background, but I have always
                            had an interest in web technologies and designing
                            cool things. My first approach to the IT world can
                            be dated back to 2004 when I discovered an italian
                            "ethical hacking" website and I enjoyed learning
                            HTML to solve riddles created by the owner. As far
                            as design is concerned, every time I had to create
                            presentations, videos, articles or anything else,
                            apart from ensuring that their content was
                            excellent, I wanted them to look pixel-perfect and
                            visually clear.
                        </p>
                        <p className={aboutStyle.page__content__card__text}>
                            Aerospace engineering has defined my academic career
                            and initial professional career, but I have always
                            kept a focus in developing my IT skills while
                            working in this sector.
                        </p>
                        <h2 className={aboutStyle.page__content__card__title}>
                            What do I want?
                        </h2>
                        <p className={aboutStyle.page__content__card__text}>
                            I want to bring my professional career on a new path
                            which better aligns with my interests, my passion
                            and my focus. I want to become a software developer
                            and gain trust on my capabilities and my potential.
                            I want to show I have the skills (and that I can
                            build new ones), the drive and the creativity to
                            become a great developer.
                        </p>
                        <h2 className={aboutStyle.page__content__card__title}>
                            My Vision
                        </h2>
                        <p className={aboutStyle.page__content__card__text}>
                            I believe in minimalistic, beautiful and essential
                            applications. I believe they should interact with
                            the users and provide them with all the necessary
                            information and insights they need. I believe
                            applications do not need to be difficult to use, but
                            they should be an extension of the user's mind.
                        </p>
                        <h2 className={aboutStyle.page__content__card__title}>
                            What am I doing now?
                        </h2>
                        <p className={aboutStyle.page__content__card__text}>
                            I keep working on my front-end development skills,
                            through different online courses and practical
                            projects. I believe there is always so much to
                            learn, but I try hard every day to push the bar a
                            little bit higher. I am starting to develop some web
                            applications ideas that I planned and I am looking
                            forward to release them on the web in the future.
                        </p>
                        <p className={aboutStyle.page__content__card__text}>
                            On the side, I am also attending a completely online
                            Master in Business Administration held by Quantic
                            School of Business and Technology. I believe this
                            will help me in building strong foundations on
                            business subjects, that I will use in my career as a
                            developer to create new things and perhaps, as Peter
                            Thiel says, "going from 0 to 1".
                        </p>
                        <h2 className={aboutStyle.page__content__card__title}>
                            Generic information
                        </h2>
                        <p className={aboutStyle.page__content__card__text}>
                            I am Italian, specifically from Verona (Romeo &
                            Juliet), but I am currently living in the UK.
                            Besides coding, another passion of mine is fitness.
                            I like reading and experimenting with nutrition,
                            and, from a sport perspective, I love CrossFit and
                            running.
                        </p>
                        <p className={aboutStyle.page__content__card__text}>
                            I am also an avid reader. I particularly like
                            non-fiction books about entrepreneurship,
                            productivity and finance. I have to admit that I am
                            a productivity nerd and this always drives my hunger
                            for learning more.
                        </p>
                    </div>
                    <div className={aboutStyle.page__content__image}>
                        <img
                            src={image}
                            alt='aboutme'
                            className={aboutStyle.image}
                        />
                    </div>
                </div>
                <div className={aboutStyle.contacts}>
                    <h3>Do you want to drop me a message?</h3>
                    <div className={aboutStyle.contacts__link}>
                        <i class='ri-arrow-right-s-line'></i>{' '}
                        <Link
                            to='/contact'
                            className={aboutStyle.contacts__link__click}>
                            Click me
                        </Link>
                        <i class='ri-arrow-left-s-line'></i>
                        and I will bring you to the right place
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
