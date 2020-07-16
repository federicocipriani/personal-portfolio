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
                <div>
                    <ol className={digitalGardenStyles.posts}>
                        {data.allContentfulBlogPost.edges.map((edge) => {
                            return (
                                <li className={digitalGardenStyles.post}>
                                    <h3>
                                        <Link
                                            to={`/digital-garden/${edge.node.slug}`}>
                                            {edge.node.title}
                                        </Link>
                                    </h3>
                                    <p>{edge.node.publishedDate}</p>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;
