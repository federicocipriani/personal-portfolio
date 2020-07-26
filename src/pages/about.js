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
                    <div className={aboutStyle.page__content_column_right}>
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
                            <div
                                className={
                                    aboutStyle.page__content__contacts__link
                                }>
                                <Link
                                    to='/contact'
                                    className={
                                        aboutStyle.page__content__contacts__link__click
                                    }>
                                    Click me
                                </Link>
                                <i class='ri-cursor-fill'></i>
                                and I will bring you to the right place
                            </div>
                        </div>
                    </div>
                    <div className={aboutStyle.page__content_column_left}>
                        <div className={aboutStyle.page__content__image}>
                            <img
                                src={image}
                                alt='aboutme'
                                className={aboutStyle.image}
                            />
                        </div>
                        <div className={aboutStyle.page__content__skills}>
                            <h3>Skills</h3>
                            <div
                                className={
                                    aboutStyle.page__content__skills_list
                                }>
                                <div>
                                    <i class='ri-html5-line ri-2x'></i>
                                    <p>HTML5</p>
                                </div>
                                <div>
                                    <i class='ri-css3-line ri-2x'></i>
                                    <p>CSS3</p>
                                </div>
                                <div>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='2rem'
                                        height='2rem'
                                        viewBox='0 0 512 512'>
                                        <title>ionicons-v5_logos</title>
                                        <path d='M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z' />
                                    </svg>
                                    <p>JS</p>
                                </div>
                                <div>
                                    <i class='ri-reactjs-line ri-2x'></i>
                                    <p>React</p>
                                </div>
                                <div>
                                    <i class='ri-gatsby-line ri-2x'></i>
                                    <p>Gatsby</p>
                                </div>
                                <div>
                                    <i class='ri-git-branch-line ri-2x'></i>
                                    <p>Git</p>
                                </div>
                            </div>
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
            find me at the intersection between  
            **web development**, **data science** and **design**.  
            I am enhancing my skills in front-end development and experimenting with the back-end, while working on becoming a better designer through some UI/UX courses and practical projects. I have work experience in the data science field, but I also cultivate interests in the application of other AI technologies applied to web applications (i.e. NLP).`,
        ],
    },
    {
        id: 'background',
        title: 'Which is my background?',
        content: [
            `I have an **aerospace background**, but I have
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
                career and initial professional career, but **I
                have always kept a focus in developing my IT
                skills** while working in this sector.`,
        ],
    },
    {
        id: 'want',
        title: 'What do I want?',
        content: [
            `I want to bring my professional career on a **new
            path** which better aligns with my interests, my
            passion and my focus. **I want to become a
            software developer** and gain trust on my
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
            `**I believe in minimalistic, beautiful and
            essential applications**. I believe they should
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
            `**I keep working on my front-end development
            skills**, through different online resources and projects. There is always so
            much to learn, but **I try hard every day to push
            the bar a little bit higher**. I am **starting to
            develop some web applications ideas** that I
            planned and I am looking forward to release them
            on the web in the future.`,
            `On the side, **I am also attending a completely
            online Master in Business Administration** held by
            Quantic School of Business and Technology. I
            believe this will help me in building strong
            foundations on business subjects, that I will
            use in my career as a developer to create new
            things and perhaps, as Peter Thiel says, **"going
            from 0 to 1"**.`,
        ],
    },
    {
        id: 'generic',
        title: 'Generic information',
        content: [
            `I am **Italian**, specifically **from Verona** (Romeo &
                Juliet), but I am **currently living in the UK**.
                Besides coding, another passion of mine is
                fitness. I like reading and experimenting with
                **nutrition**, and, from a sport perspective, I love
                **CrossFit** and **running**.`,
            `**I am also an avid reader**. I particularly like
            non-fiction books about **entrepreneurship,
            productivity and finance**. I have to admit that I
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
