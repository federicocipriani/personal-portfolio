import React from 'react';
import aboutPreviewStyles from './about-preview.module.scss';
import profilePic from '../images/profile.png';

const AboutPreview = () => {
    return (
        <section id='about-me'>
            <h1>About me</h1>
            <div className={aboutPreviewStyles.grid}>
                <img
                    src={profilePic}
                    alt='profile'
                    className={aboutPreviewStyles.profile}
                />
                <div>
                    <p>
                        I am Federico, an aerospace engineer with a deep passion
                        for coding, data and design.
                    </p>
                    <p>
                        My background is in a technical subject like aerospace
                        engineering, but during the years I developed other
                        skills, like coding and data science.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
