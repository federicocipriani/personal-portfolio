import React, { Fragment } from 'react';
import portfolioPreviewStyles from './portfolio-preview.module.scss';

const PortfolioPreview = () => {
    return (
        <section id='portfolio-preview-section'>
            <h1>These are some of the projects I am most proud of so far</h1>
            <div className={portfolioPreviewStyles.grid}></div>
        </section>
    );
};

export default PortfolioPreview;
