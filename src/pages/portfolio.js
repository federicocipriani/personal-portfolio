import React from 'react';
import Layout from '../components/layout';
import portfolioStyle from './portfolio.module.scss';
import Head from '../components/head';
import { StaticQuery, Link } from 'gatsby';
import cx from 'classnames';

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
                                className={
                                    portfolioStyle.page__content__card_container
                                }>
                                <div
                                    id={`${edge.node.slug}`}
                                    className={
                                        portfolioStyle.page__content__card_container_header
                                    }></div>
                                <div
                                    id={`${edge.node.slug}`}
                                    key={edge.node.id}
                                    className={
                                        portfolioStyle.page__content__card
                                    }>
                                    <div
                                        className={
                                            portfolioStyle.page__content__card_preview
                                        }>
                                        <img
                                            src={
                                                edge.node.projectPreview.fluid
                                                    .src
                                            }
                                            alt=''
                                            loading='lazy'
                                            className={
                                                portfolioStyle.page__content__card_preview_image
                                            }
                                        />
                                    </div>
                                    <div
                                        className={
                                            portfolioStyle.page__content__card_content
                                        }>
                                        <h2
                                            className={
                                                portfolioStyle.page__content__card_content_title
                                            }>
                                            {edge.node.projectName}
                                        </h2>

                                        <p
                                            className={
                                                portfolioStyle.page__content__card_content_releaseDate
                                            }>
                                            {edge.node.releaseDate}
                                        </p>
                                        <div
                                            className={
                                                portfolioStyle.page__content__card_content_languages
                                            }>
                                            {edge.node.languages.map(
                                                (language) => (
                                                    <p
                                                        className={
                                                            portfolioStyle.page__content__card_content_languages_label
                                                        }>
                                                        {language.language}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                        <p
                                            className={
                                                portfolioStyle.page__content__card_description
                                            }>
                                            {edge.node.fullDescription}
                                        </p>

                                        <div
                                            className={
                                                portfolioStyle.page__content__card_links
                                            }>
                                            <a
                                                href={edge.node.projectUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={
                                                    portfolioStyle.btn_link
                                                }>
                                                <span
                                                    className={
                                                        portfolioStyle.icon
                                                    }>
                                                    <i class='ri-external-link-line'></i>{' '}
                                                </span>
                                                Website
                                            </a>
                                            <a
                                                href={edge.node.githubUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className={
                                                    portfolioStyle.btn_link
                                                }>
                                                <span
                                                    className={
                                                        portfolioStyle.icon
                                                    }>
                                                    <i class='ri-github-line'></i>
                                                </span>
                                                GitHub
                                            </a>
                                        </div>
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
