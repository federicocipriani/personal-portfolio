import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import digitalGardenStyles from './digital-garden.module.scss';
import Head from '../components/head';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM D, YYYY")
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <Head title='Digital Garden' />
            <section className='page'>
                <h1 className='page__title'>Digital Garden</h1>
                <div className={digitalGardenStyles.garden}>
                    {data.allContentfulBlogPost.edges.map((edge) => (
                        <Link
                            to={`/digital-garden/${edge.node.slug}`}
                            className={digitalGardenStyles.plant}>
                            <h3 className={digitalGardenStyles.plant__name}>
                                {edge.node.title}
                            </h3>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;
