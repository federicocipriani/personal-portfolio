import React from 'react';
import aboutPreviewStyles from './about-preview.module.scss';
import profilePic from '../../images/profile.png';

const AboutPreview = () => {
    return (
        <section id='about-me'>
            <h2 className={aboutPreviewStyles.title}>About me</h2>
            <div className={aboutPreviewStyles.grid}>
                <img
                    src={profilePic}
                    alt='Profile picture'
                    className={aboutPreviewStyles.profile}
                />
                <div className={aboutPreviewStyles.paragraph}>
                    <p>
                        I am Federico, an aerospace engineer with a deep passion
                        for data, coding and design. I love seeing and creating
                        beautifully designed and pixel-perfect things. But I am
                        also an engineer deep inside and hence, I love building
                        things and see the results immediately (if things do not
                        break). That is why I love to code as it gives me the
                        power to quickly (if things do not break) create things
                        from scratch and solve issues or necessities of
                        different nature.
                    </p>
                    <br />
                    <p>
                        I am probably not seeking perfection, but I try hard
                        everyday to become 1% better than yesterday.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
