import React, { Fragment } from 'react';
import portfolioPreviewStyles from './portfolio-preview.module.scss';
import { graphql, StaticQuery, Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const PortfolioPreview = () => (
    <StaticQuery
        query={graphql`
            query PortfolioPreviewQuery {
                allContentfulProject(
                    sort: { fields: releaseDate, order: DESC }
                    filter: { home: { eq: true } }
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
                            shortDescription
                            languages {
                                language
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <section className={portfolioPreviewStyles.section__container}>
                <div
                    id='portfolio-preview'
                    className={
                        portfolioPreviewStyles.section__whitespace
                    }></div>
                <div className={portfolioPreviewStyles.section__content}>
                    <div
                        className={
                            portfolioPreviewStyles.section__content__header
                        }>
                        <h2
                            className={
                                portfolioPreviewStyles.section__content__header_title
                            }>
                            Portfolio preview
                        </h2>
                        <h3
                            className={
                                portfolioPreviewStyles.section__content__header_text
                            }>
                            A quick look to some of the projects I am most proud
                            of so far
                        </h3>
                    </div>
                    <div
                        className={
                            portfolioPreviewStyles.section__content__showcase
                        }>
                        {data.allContentfulProject.edges.map((edge) => (
                            <div
                                key={edge.node.id}
                                className={
                                    portfolioPreviewStyles.section__content__showcase__card
                                }>
                                <img
                                    src={edge.node.projectPreview.fluid.src}
                                    alt='preview'
                                    className={
                                        portfolioPreviewStyles.section__content__showcase__card_image
                                    }
                                />
                                <div
                                    className={
                                        portfolioPreviewStyles.section__content__showcase__card_details
                                    }>
                                    <h3
                                        className={
                                            portfolioPreviewStyles.section__content__showcase__card_details_name
                                        }
                                        style={{ fontWeight: '400' }}>
                                        {edge.node.projectName}
                                    </h3>
                                    <p
                                        className={
                                            portfolioPreviewStyles.section__content__showcase__card_details_description
                                        }>
                                        {edge.node.shortDescription}
                                    </p>
                                </div>
                                <div
                                    className={
                                        portfolioPreviewStyles.section__content__showcase__card_details_labels
                                    }>
                                    {edge.node.languages.map((language) => (
                                        <p
                                            className={
                                                portfolioPreviewStyles.section__content__showcase__card_details_labels_language
                                            }>
                                            {language.language}
                                        </p>
                                    ))}
                                </div>
                                <AnchorLink
                                    to={`/portfolio#${edge.node.slug}`}
                                    className={
                                        portfolioPreviewStyles.btn_viewmore
                                    }>
                                    View more{' '}
                                    <i class='ri-arrow-right-s-line'></i>
                                </AnchorLink>
                            </div>
                        ))}
                    </div>
                    <Link
                        to='/portfolio'
                        className={portfolioPreviewStyles.btn_portfolio}>
                        Do you want to see more?{' '}
                        <i class='ri-arrow-right-s-line'></i>
                    </Link>
                </div>
            </section>
        )}
    />
);

export default PortfolioPreview;
