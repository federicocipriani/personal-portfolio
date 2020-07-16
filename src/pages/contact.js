import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contact' />
            <section className='page'>
                <h1 className='page__title'>Contact</h1>
                <div>Page content</div>
            </section>
        </Layout>
    );
};

export default ContactPage;
