import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import notfoundStyles from './notfound.module.scss';
import image from '../images/notfound.svg';

const NotFound = () => {
    return (
        <Layout>
            <Head title='404' />
            <section className={notfoundStyles.page}>
                <div className={notfoundStyles.page__content}>
                    <h1 style={{ fontWeight: '400' }}>Hello.</h1>
                    <h2 style={{ fontWeight: '400' }}>
                        I am a{' '}
                        <span
                            style={{
                                color: 'var(--color2)',
                                fontWeight: '400',
                            }}>
                            404 page not found
                        </span>{' '}
                        page.
                    </h2>
                    <br />
                    <br />
                    <br />
                    <h3 style={{ color: 'var(--color3)', fontWeight: '400' }}>
                        I don't think you were looking for me.
                    </h3>
                    <br />
                    <br />
                    <br />
                    <Link to='/' className={notfoundStyles.backHome}>
                        {' '}
                        <i class='ri-home-2-line'></i> Let's go back Home
                    </Link>
                </div>
                <div className={notfoundStyles.image_container}>
                    <img
                        src={image}
                        alt=''
                        className={notfoundStyles.image_container__image}
                    />
                </div>
            </section>
        </Layout>
    );
};

export default NotFound;
