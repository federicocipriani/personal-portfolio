import React from 'react';
import Layout from '../components/layout';
import portfolioStyle from './portfolio.module.scss';
import Head from '../components/head';
import { StaticQuery, Link } from 'gatsby';

const PortfolioPage = () => (
    <StaticQuery
        query={graphql`
            query PortfolioQuery {
                allContentfulProject {
                    edges {
                        node {
                            id
                            projectName
                            slug
                            projectPreview {
                                fluid {
                                    src
                                    ...GatsbyContentfulFluid
                                }
                            }
                            releaseDate(formatString: "MMMM D, YYYY")
                            shortDescription
                            fullDescription
                            projectUrl
                            languages {
                                language
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <Layout>
                <Head title='Portfolio' />
                <section className='page'>
                    <h1 className='page__title'>Portfolio</h1>
                    <div className={portfolioStyle.page__content}>
                        {data.allContentfulProject.edges.map((edge) => (
                            <div
                                key={edge.node.id}
                                id={`#${edge.node.slug}`}
                                className={portfolioStyle.project_card}>
                                <img
                                    src={edge.node.projectPreview.fluid.src}
                                    alt=''
                                    loading='lazy'
                                    className={
                                        portfolioStyle.project_card__preview
                                    }
                                />
                                <div
                                    className={
                                        portfolioStyle.project_card__content
                                    }>
                                    <h2
                                        className={
                                            portfolioStyle.project_card__title
                                        }>
                                        {edge.node.projectName}
                                    </h2>
                                    <p
                                        className={
                                            portfolioStyle.project_card__releaseDate
                                        }>
                                        {edge.node.releaseDate}
                                    </p>
                                    <p
                                        className={
                                            portfolioStyle.project_card__description
                                        }>
                                        {edge.node.fullDescription}
                                    </p>
                                    <a
                                        href={edge.node.projectUrl}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='btn btn-left '
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        <i class='ri-external-link-line'></i>{' '}
                                        Website
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        )}
    />
);

export default PortfolioPage;
