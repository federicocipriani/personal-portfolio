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
                <div>Page content</div>
            </section>
        </Layout>
    );
};

export default AboutPage;
