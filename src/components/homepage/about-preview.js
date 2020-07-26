import React from 'react';
import aboutPreviewStyles from './about-preview.module.scss';
import profilePic from '../../images/profile.png';
import { Link } from 'gatsby';

const AboutPreview = () => {
    return (
        <section id='about-me'>
            <div className={aboutPreviewStyles.section__content__header}>
                <h2
                    className={
                        aboutPreviewStyles.section__content__header_title
                    }>
                    About me
                </h2>
            </div>
            <div className={aboutPreviewStyles.grid}>
                <div className={aboutPreviewStyles.grid__picture}>
                    <img
                        src={profilePic}
                        alt='Profile picture'
                        className={aboutPreviewStyles.profile_pic}
                    />
                </div>
                <div className={aboutPreviewStyles.paragraph}>
                    <p>
                        I am Federico, an aerospace engineer with a deep passion
                        for data, coding and design. I consider myself a
                        creative developer who loves analysing data.{' '}
                        <span style={{ fontWeight: '400' }}>
                            A hybrid between a front-end developer and a data
                            scientist.
                        </span>{' '}
                        I love seeing and creating beautifully designed and
                        pixel-perfect things. Though, I am also an engineer deep
                        inside. Hence, I love solving problems, building things
                        and see the results immediately (if things do not break,
                        clearly).{' '}
                        <span style={{ fontWeight: '400' }}>
                            That is why I love coding.
                        </span>{' '}
                        It feels like having superpowers as I can quickly (if
                        things do not break) create things from scratch, solve
                        issues or satisfy necessities of different nature.
                    </p>
                    <br />
                    <p>
                        I am probably not seeking perfection, but I try hard
                        everyday to become 1% better than the day before. As
                        (perhaps) Albert Einstein once said "compound is the
                        eight wonder of the modern world". And as Peter Thiel
                        suggests, we live in a "power law" world. I am here to
                        see where I can get.
                    </p>
                    <br />
                    <p>
                        This is just a brief introduction. If you are interested
                        in reading a little bit more,{' '}
                        <Link
                            to={`/about`}
                            className={aboutPreviewStyles.link_about}>
                            <span
                                style={{
                                    fontWeight: '400',
                                    textDecoration: 'underline',
                                }}>
                                {' '}
                                click here
                            </span>
                            . <i class='ri-cursor-fill'></i>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
