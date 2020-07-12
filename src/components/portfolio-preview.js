import React, { Fragment } from 'react';
import portfolioPreviewStyles from './portfolio-preview.module.scss';
import { graphql, StaticQuery, Link } from 'gatsby';

const PortfolioPreview = () => (
    <StaticQuery
        query={graphql`
            query PortfolioPreviewQuery {
                allContentfulProject(filter: { home: { eq: true } }) {
                    edges {
                        node {
                            id
                            projectName
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
            <section className={portfolioPreviewStyles.container}>
                <h1>
                    These are some of the projects I am most proud of so far
                </h1>
                <div className={portfolioPreviewStyles.grid}>
                    {data.allContentfulProject.edges.map((edge) => (
                        <div
                            key={edge.node.id}
                            className={portfolioPreviewStyles.card}>
                            <img
                                src={edge.node.projectPreview.fluid.src}
                                alt='preview'
                                className={portfolioPreviewStyles.previewImage}
                            />
                            <h2 className={portfolioPreviewStyles.projectName}>
                                {edge.node.projectName}
                            </h2>
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

// const PortfolioPreview = () => {
//     return (
//         <section id='portfolio-preview-section'>
//             <h1>These are some of the projects I am most proud of so far</h1>
//             <div className={portfolioPreviewStyles.grid}>
//                 {props.data.allContentfulProject.edges.map((edge, index) => {
//                     return (
//                         <Fragment>
//                             <h3>{edge.node.projectName}</h3>
//                             <img alt='' url={images[index]} />
//                         </Fragment>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

// export const query = graphql`
//     query {
//         allContentfulProject {
//             edges {
//                 node {
//                     projectName
//                     projectPreview {
//                         file {
//                             url
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

export default PortfolioPreview;
