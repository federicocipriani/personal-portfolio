import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);
    return (
        <footer className={footerStyles.footer}>
            <p>
                Created by {data.site.siteMetadata.author} with{' '}
                <em>Gatsby and Contentful</em> © 2020
            </p>
            <div className={footerStyles.links_row}>
                <div className={footerStyles.social_contacts__links}>
                    <a
                        href='https://www.linkedin.com/in/federicocipriani/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={footerStyles.social_contacts__links__item}>
                        <i class='ri-linkedin-line'></i>
                    </a>
                    <a
                        href='https://twitter.com/cipriani_fc'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={footerStyles.social_contacts__links__item}>
                        <i class='ri-twitter-line'></i>
                    </a>
                    <a
                        href='https://github.com/federicocipriani'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={footerStyles.social_contacts__links__item}>
                        <i class='ri-github-line'></i>
                    </a>
                </div>
                <button
                    onClick={() => scrollTo('#header')}
                    className={footerStyles.backtotop_button}>
                    Scroll to top <i class='ri-arrow-up-line'></i>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
