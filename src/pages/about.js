import React, { useState } from 'react';
import Layout from '../components/layout';
import aboutStyle from './about.module.scss';
import Question from '../components/about/question';
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
                    <div className={aboutStyle.page__content__questions}>
                        {pageContent.map((question) => (
                            <Question
                                id={question.id}
                                title={question.title}
                                content={question.content}
                            />
                        ))}
                    </div>
                    <div className={aboutStyle.page__content__contacts}>
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
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;

const pageContent = [
    {
        id: 'whoami',
        title: 'Who am I?',
        content: [
            `I am Federico Cipriani, born aerospace engineer
            with a profound passion for coding. Now you can
            find me at the intersection between front-end
            development, data science and design.`,
        ],
    },
    {
        id: 'background',
        title: 'Which is my background?',
        content: [
            `I have an aerospace background, but I have
                always had an interest in web technologies and
                designing cool things. My first approach to the
                IT world can be dated back to 2004 when I
                discovered an italian "ethical hacking" website
                and I enjoyed learning HTML to solve riddles
                created by the owner. As far as design is
                concerned, every time I had to create
                presentations, videos, articles or anything
                else, apart from ensuring that their content was
                excellent, I wanted them to look pixel-perfect
                and visually clear.`,
            `Aerospace engineering has defined my academic
                career and initial professional career, but I
                have always kept a focus in developing my IT
                skills while working in this sector.`,
        ],
    },
    {
        id: 'want',
        title: 'What do I want?',
        content: [
            `I want to bring my professional career on a new
            path which better aligns with my interests, my
            passion and my focus. I want to become a
            software developer and gain trust on my
            capabilities and my potential. I want to show I
            have the skills (and that I can build new ones),
            the drive and the creativity to become a great
            developer.`,
        ],
    },
    {
        id: 'vision',
        title: 'My Vision',
        content: [
            `I believe in minimalistic, beautiful and
            essential applications. I believe they should
            interact with the users and provide them with
            all the necessary information and insights they
            need. I believe applications do not need to be
            difficult to use, but they should be an
            extension of the user's mind.`,
        ],
    },
    {
        id: 'now',
        title: 'What am I doing now?',
        content: [
            `I keep working on my front-end development
            skills, through different online courses and
            practical projects. I believe there is always so
            much to learn, but I try hard every day to push
            the bar a little bit higher. I am starting to
            develop some web applications ideas that I
            planned and I am looking forward to release them
            on the web in the future.`,
            `On the side, I am also attending a completely
            online Master in Business Administration held by
            Quantic School of Business and Technology. I
            believe this will help me in building strong
            foundations on business subjects, that I will
            use in my career as a developer to create new
            things and perhaps, as Peter Thiel says, "going
            from 0 to 1".`,
        ],
    },
    {
        id: 'generic',
        title: 'Generic information',
        content: [
            `I am Italian, specifically from Verona (Romeo &
                Juliet), but I am currently living in the UK.
                Besides coding, another passion of mine is
                fitness. I like reading and experimenting with
                nutrition, and, from a sport perspective, I love
                CrossFit and running.`,
            `I am also an avid reader. I particularly like
            non-fiction books about entrepreneurship,
            productivity and finance. I have to admit that I
            am a productivity nerd and this always drives my
            hunger for learning more.`,
        ],
    },
];

{
    /* <div className={aboutStyle.page__content}>
                    <div className={aboutStyle.page__content__card}>
                        <div
                            id='whoami'
                            className={aboutStyle.page__content__card__header}
                            onClick={handleClick}>
                            <div
                                className={cx(
                                    aboutStyle.page__content__card__title__toggle,
                                    {
                                        [aboutStyle.page__content__card__title__toggle_active]: toggle,
                                    }
                                )}>
                                <i class='ri-arrow-right-s-line ri-2x'></i>
                            </div>
                            <h2>Who am I?</h2>
                        </div>
                        <div
                            className={cx(
                                aboutStyle.page__content__card__text,
                                {
                                    [aboutStyle.page__content__card__text__visible]: visibility,
                                }
                            )}>
                            <p>
                                I am Federico Cipriani, born aerospace engineer
                                with a profound passion for coding. Now you can
                                find me at the intersection between front-end
                                development, data science and design.
                            </p>
                        </div>
                        <button
                            className={aboutStyle.page__content__card__title}
                            onClick={handleClick}>
                            <div
                                className={cx(
                                    aboutStyle.page__content__card__title__toggle,
                                    {
                                        [aboutStyle.page__content__card__title__toggle_active]: toggle,
                                    }
                                )}>
                                <i class='ri-arrow-right-s-line ri-2x'></i>
                            </div>
                            <h2>Which is my background?</h2>
                        </button>
                        <div
                            className={cx(
                                aboutStyle.page__content__card__text,
                                {
                                    [aboutStyle.page__content__card__text__visible]: visibility,
                                }
                            )}>
                            <p>
                                I have an aerospace background, but I have
                                always had an interest in web technologies and
                                designing cool things. My first approach to the
                                IT world can be dated back to 2004 when I
                                discovered an italian "ethical hacking" website
                                and I enjoyed learning HTML to solve riddles
                                created by the owner. As far as design is
                                concerned, every time I had to create
                                presentations, videos, articles or anything
                                else, apart from ensuring that their content was
                                excellent, I wanted them to look pixel-perfect
                                and visually clear.
                            </p>
                            <p>
                                Aerospace engineering has defined my academic
                                career and initial professional career, but I
                                have always kept a focus in developing my IT
                                skills while working in this sector.
                            </p>
                        </div>
                        <button
                            className={aboutStyle.page__content__card__title}
                            onClick={handleClick}>
                            <div
                                className={cx(
                                    aboutStyle.page__content__card__title__toggle,
                                    {
                                        [aboutStyle.page__content__card__title__toggle_active]: toggle,
                                    }
                                )}>
                                <i class='ri-arrow-right-s-line ri-2x'></i>
                            </div>
                            <h2>What do I want?</h2>
                        </button>
                        <div
                            className={cx(
                                aboutStyle.page__content__card__text,
                                {
                                    [aboutStyle.page__content__card__text__visible]: visibility,
                                }
                            )}>
                            <p>
                                I want to bring my professional career on a new
                                path which better aligns with my interests, my
                                passion and my focus. I want to become a
                                software developer and gain trust on my
                                capabilities and my potential. I want to show I
                                have the skills (and that I can build new ones),
                                the drive and the creativity to become a great
                                developer.
                            </p>
                        </div>
                        <button
                            className={aboutStyle.page__content__card__title}
                            onClick={handleClick}>
                            <div
                                className={cx(
                                    aboutStyle.page__content__card__title__toggle,
                                    {
                                        [aboutStyle.page__content__card__title__toggle_active]: toggle,
                                    }
                                )}>
                                <i class='ri-arrow-right-s-line ri-2x'></i>
                            </div>
                            <h2>My Vision</h2>
                        </button>
                        <div
                            className={cx(
                                aboutStyle.page__content__card__text,
                                {
                                    [aboutStyle.page__content__card__text__visible]: visibility,
                                }
                            )}>
                            <p>
                                I believe in minimalistic, beautiful and
                                essential applications. I believe they should
                                interact with the users and provide them with
                                all the necessary information and insights they
                                need. I believe applications do not need to be
                                difficult to use, but they should be an
                                extension of the user's mind.
                            </p>
                        </div>
                        <button
                            className={aboutStyle.page__content__card__title}
                            onClick={handleClick}>
                            <div
                                className={cx(
                                    aboutStyle.page__content__card__title__toggle,
                                    {
                                        [aboutStyle.page__content__card__title__toggle_active]: toggle,
                                    }
                                )}>
                                <i class='ri-arrow-right-s-line ri-2x'></i>
                            </div>
                            <h2>What am I doing now?</h2>
                        </button>
                        <div
                            className={cx(
                                aboutStyle.page__content__card__text,
                                {
                                    [aboutStyle.page__content__card__text__visible]: visibility,
                                }
                            )}>
                            <p>
                                I keep working on my front-end development
                                skills, through different online courses and
                                practical projects. I believe there is always so
                                much to learn, but I try hard every day to push
                                the bar a little bit higher. I am starting to
                                develop some web applications ideas that I
                                planned and I am looking forward to release them
                                on the web in the future.
                            </p>
                            <p>
                                On the side, I am also attending a completely
                                online Master in Business Administration held by
                                Quantic School of Business and Technology. I
                                believe this will help me in building strong
                                foundations on business subjects, that I will
                                use in my career as a developer to create new
                                things and perhaps, as Peter Thiel says, "going
                                from 0 to 1".
                            </p>
                        </div>
                        <button
                            className={aboutStyle.page__content__card__title}
                            onClick={handleClick}>
                            <div
                                className={cx(
                                    aboutStyle.page__content__card__title__toggle,
                                    {
                                        [aboutStyle.page__content__card__title__toggle_active]: toggle,
                                    }
                                )}>
                                <i class='ri-arrow-right-s-line ri-2x'></i>
                            </div>
                            <h2>Generic information</h2>
                        </button>
                        <div
                            className={cx(
                                aboutStyle.page__content__card__text,
                                {
                                    [aboutStyle.page__content__card__text__visible]: visibility,
                                }
                            )}>
                            <p>
                                I am Italian, specifically from Verona (Romeo &
                                Juliet), but I am currently living in the UK.
                                Besides coding, another passion of mine is
                                fitness. I like reading and experimenting with
                                nutrition, and, from a sport perspective, I love
                                CrossFit and running.
                            </p>
                            <p>
                                I am also an avid reader. I particularly like
                                non-fiction books about entrepreneurship,
                                productivity and finance. I have to admit that I
                                am a productivity nerd and this always drives my
                                hunger for learning more.
                            </p>
                        </div>
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
                </div> */
}
