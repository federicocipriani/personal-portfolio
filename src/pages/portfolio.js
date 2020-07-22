import React from 'react';
import Layout from '../components/layout';
import portfolioStyle from './portfolio.module.scss';
import Head from '../components/head';
import { StaticQuery, Link } from 'gatsby';

const PortfolioPage = () => (
    <StaticQuery
        query={graphql`
            query PortfolioQuery {
                allContentfulProject(
                    sort: { fields: releaseDate, order: DESC }
                ) {
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
                            githubUrl
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
                                className={portfolioStyle.project_card}>
                                <div
                                    className={
                                        portfolioStyle.project_card__preview
                                    }>
                                    <img
                                        src={edge.node.projectPreview.fluid.src}
                                        alt=''
                                        loading='lazy'
                                        className={
                                            portfolioStyle.project_card__preview__image
                                        }
                                    />
                                </div>
                                <div
                                    className={
                                        portfolioStyle.project_card__content
                                    }>
                                    <h2
                                        id={`#${edge.node.slug}`}
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
                                    <div
                                        className={
                                            portfolioStyle.project_card__languages
                                        }>
                                        {edge.node.languages.map((language) => (
                                            <p
                                                className={
                                                    portfolioStyle.project_card__languages__label
                                                }>
                                                {language.language}
                                            </p>
                                        ))}
                                    </div>
                                    <p
                                        className={
                                            portfolioStyle.project_card__description
                                        }>
                                        {edge.node.fullDescription}
                                    </p>

                                    <div
                                        className={
                                            portfolioStyle.project_card__links
                                        }>
                                        <a
                                            href={edge.node.projectUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn'
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                            <i class='ri-external-link-line'></i>{' '}
                                            Website
                                        </a>
                                        <a
                                            href={edge.node.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='btn'
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                            <i class='ri-github-line'></i>
                                            GitHub
                                        </a>
                                    </div>
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
