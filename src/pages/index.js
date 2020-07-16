import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/homepage/hero';
import PortfolioPreview from '../components/homepage/portfolio-preview';
import AboutPreview from '../components/homepage/about-preview';
import Head from '../components/head';

const HomePage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <Hero />
            <PortfolioPreview />
            <AboutPreview />
        </Layout>
    );
};

export default HomePage;
