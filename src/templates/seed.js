import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import Head from '../components/head';
import seedStyles from './seed.module.scss';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM D, YYYY")
            body {
                json
            }
        }
    }
`;

const Seed = (props) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => (
                <span className={seedStyles.bold_text}>{text}</span>
            ),
        },
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-US'];
                const urlImg = node.data.target.fields.file['en-US'].url;
                return (
                    <img src={url} alt={alt} className={seedStyles.image} />
                    // <div
                    //     style={{ backgroundImage: 'url(urlImg)' }}
                    //     className={seedStyles.image_container}>
                    //     <div
                    //         className={seedStyles.image}
                    //         style={{ backgroundImage: 'url(urlImg)' }}></div>
                    //     <img src={url} alt={alt} className={seedStyles.image} />
                    // </div>
                );
            },
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className={seedStyles.paragraph}>{children}</p>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className={seedStyles.list}>{children}</ul>
            ),
            [INLINES.HYPERLINK]: (node, children) => {
                const url = node.data.uri;
                return (
                    <a
                        href={url}
                        className={seedStyles.link}
                        target='_blank'
                        rel='noreferrer'>
                        {children}
                    </a>
                );
            },
        },
    };
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <section className='page'>
                <h1 className='page__title'>Digital Garden</h1>
                <div className={seedStyles.page__content_container}>
                    <div className={seedStyles.page__content}>
                        <h2 className={seedStyles.title}>
                            {props.data.contentfulBlogPost.title}
                        </h2>
                        <p className={seedStyles.date}>
                            {props.data.contentfulBlogPost.publishedDate}
                        </p>
                        {documentToReactComponents(
                            props.data.contentfulBlogPost.body.json,
                            options
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Seed;
