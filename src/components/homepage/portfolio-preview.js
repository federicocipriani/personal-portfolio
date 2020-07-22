import React, { Fragment } from 'react';
import portfolioPreviewStyles from './portfolio-preview.module.scss';
import { graphql, StaticQuery, Link } from 'gatsby';

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
            <section
                id='portfolio-preview'
                className={portfolioPreviewStyles.container}>
                <h2 className={portfolioPreviewStyles.title}>
                    Portfolio preview
                </h2>
                <h3 className={portfolioPreviewStyles.section_text}>
                    A quick look to some of the projects I am most proud of so
                    far
                </h3>
                <div className={portfolioPreviewStyles.display}>
                    {data.allContentfulProject.edges.map((edge) => (
                        <div
                            key={edge.node.id}
                            className={portfolioPreviewStyles.card}>
                            <img
                                src={edge.node.projectPreview.fluid.src}
                                alt='preview'
                                className={portfolioPreviewStyles.previewImage}
                            />
                            <h3
                                className={portfolioPreviewStyles.projectName}
                                style={{ fontWeight: '400' }}>
                                {edge.node.projectName}
                            </h3>
                            <p
                                className={
                                    portfolioPreviewStyles.projectDescription
                                }>
                                {edge.node.shortDescription}
                            </p>
                            <div
                                className={
                                    portfolioPreviewStyles.languagesLabels
                                }>
                                {edge.node.languages.map((language) => (
                                    <p
                                        className={
                                            portfolioPreviewStyles.languagesLabels__label
                                        }>
                                        {language.language}
                                    </p>
                                ))}
                            </div>
                            <Link
                                to={`/portfolio/#${edge.node.slug}`}
                                className='btn btn-center'>
                                View more
                            </Link>
                        </div>
                    ))}
                </div>
                <Link
                    to='/portfolio'
                    className={'btn' + ' ' + portfolioPreviewStyles.btnHome}>
                    Do you want to see more?
                </Link>
            </section>
        )}
    />
);

export default PortfolioPreview;
