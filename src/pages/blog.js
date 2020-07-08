import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
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
    console.log(data);
    return (
        <Layout>
            <Head title='Blog' />
            <h1>Digital Garden</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <h3>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    {edge.node.title}
                                </Link>
                            </h3>
                            <p>{edge.node.publishedDate}</p>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
};

export default BlogPage;
