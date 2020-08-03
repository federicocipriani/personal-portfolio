import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import logo from '../images/logofc.png';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    // const isPartiallyActive = ({ isPartiallyCurrent }) =>
    //     isPartiallyCurrent
    //         ? { className: headerStyles.active_nav__item }
    //         : null;
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.header__container}>
                <div className={headerStyles.logo}>
                    <Link to='/'>
                        <img src={logo} alt='Website logo' />
                    </Link>
                </div>
                <div className={headerStyles.header__navigation_container}>
                    <div
                        className={
                            headerStyles.header__navigation_container_container
                        }>
                        <nav>
                            <ul className={headerStyles.nav__list}>
                                <li>
                                    <Link
                                        className={headerStyles.nav__list__item}
                                        activeClassName={
                                            headerStyles.active_nav__item
                                        }
                                        to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.nav__list__item}
                                        activeClassName={
                                            headerStyles.active_nav__item
                                        }
                                        to='/about'
                                        partiallyActive={true}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.nav__list__item}
                                        activeClassName={
                                            headerStyles.active_nav__item
                                        }
                                        to='/portfolio'
                                        partiallyActive={true}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.nav__list__item}
                                        activeClassName={
                                            headerStyles.active_nav__item
                                        }
                                        to='/digital-garden'
                                        partiallyActive={true}>
                                        Digital Garden
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={headerStyles.nav__list__item}
                                        activeClassName={
                                            headerStyles.active_nav__item
                                        }
                                        to='/contact'
                                        partiallyActive={true}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
