import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PortfolioPreview from '../components/portfolio-preview';
import AboutPreview from '../components/about-preview';
import Head from '../components/head';

const HomePage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <Fragment className='content'>
                <Hero />
                <PortfolioPreview />
                <AboutPreview />
            </Fragment>
        </Layout>
    );
};

export default HomePage;
