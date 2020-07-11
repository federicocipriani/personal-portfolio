import React, { Fragment } from 'react';
import portfolioPreviewStyles from './portfolio-preview.module.scss';
import { graphql } from 'gatsby';

const PortfolioPreview = (props) => {
    console.log(props);
    const images =
        props.data.allContentfulProject.edges.node.projectPreview.file.url;
    console.log(images);
    return (
        <section id='portfolio-preview-section'>
            <h1>These are some of the projects I am most proud of so far</h1>
            <div className={portfolioPreviewStyles.grid}>
                {props.data.allContentfulProject.edges.map((edge, index) => {
                    return (
                        <Fragment>
                            <h3>{edge.node.projectName}</h3>
                            <img alt='' url={images[index]} />
                        </Fragment>
                    );
                })}
            </div>
        </section>
    );
};

export const query = graphql`
    query {
        allContentfulProject {
            edges {
                node {
                    projectName
                    projectPreview {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`;

export default PortfolioPreview;
