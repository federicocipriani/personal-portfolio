import React, { useState } from 'react';
import Layout from '../components/layout';
import Filter from '../components/portfolio/filter';
import portfolioStyle from './portfolio.module.scss';
import Head from '../components/head';
import { useStaticQuery, Link } from 'gatsby';
import { graphql } from 'gatsby';

const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
        query PortfolioQuery {
            allContentfulProject(sort: { fields: releaseDate, order: DESC }) {
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
                        fullDescription {
                            fullDescription
                        }
                        projectUrl
                        githubUrl
                        tags {
                            tag
                        }
                    }
                }
            }
        }
    `);

    // Extract projects from result of the query
    const projects = data.allContentfulProject.edges.map((edge) => edge.node);

    // Extract tags for each project
    var tags = [];
    projects.map((project) => {
        tags.push(
            project.tags.reduce((output, tag) => {
                return output.concat(tag.tag);
            }, [])
        );
    });

    // Initialise hooks for state management
    const [projects_filter, setProjectFiltered] = useState([...projects]);
    const [activeFilters, setActiveFilters] = useState([]);

    // Extract unique set of tags from available projects
    let filter = [];
    data.allContentfulProject.edges.map((project) =>
        project.node.tags.map((tag) => {
            !filter.includes(tag.tag) && filter.push(tag.tag);
        })
    );

    // Handle filtering once a tag is clicked in the browser
    const handleFiltering = (tag) => {
        let temp = [...activeFilters];

        if (!activeFilters.includes(tag)) {
            temp.push(tag);
            setActiveFilters((prevActive) => temp);
        } else {
            temp.splice(activeFilters.indexOf(tag), 1);
            setActiveFilters((prevActive) => temp);
        }

        let new_project_filter = projects.filter((project, index) => {
            return temp.reduce((output, tag) => {
                return output && tags[index].indexOf(tag) > -1;
            }, true);
        });
        setProjectFiltered((prevProjectList) => new_project_filter);
    };

    return (
        <Layout>
            <Head title='Portfolio' />
            <section className='page'>
                <h1 className='page__title'>Portfolio</h1>
                <div className={portfolioStyle.page__content}>
                    <Filter
                        tags={filter}
                        activeFilters={activeFilters}
                        handleFiltering={handleFiltering}
                    />
                    {projects_filter.map((project) => {
                        if (true) {
                            return (
                                <div
                                    key={project.id}
                                    className={
                                        portfolioStyle.page__content__card_container
                                    }>
                                    <div
                                        key={project.id + '_header'}
                                        id={`${project.slug}`}
                                        className={
                                            portfolioStyle.page__content__card_container_header
                                        }></div>
                                    <div
                                        key={project.id + '_slug'}
                                        id={`${project.slug}`}
                                        className={
                                            portfolioStyle.page__content__card
                                        }>
                                        <div
                                            key={project.id + '_img'}
                                            className={
                                                portfolioStyle.page__content__card_preview
                                            }>
                                            <img
                                                src={
                                                    project.projectPreview.fluid
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
                                            key={project.id + '_body'}
                                            className={
                                                portfolioStyle.page__content__card_content
                                            }>
                                            <h2
                                                className={
                                                    portfolioStyle.page__content__card_content_title
                                                }>
                                                {project.projectName}
                                            </h2>

                                            <p
                                                className={
                                                    portfolioStyle.page__content__card_content_releaseDate
                                                }>
                                                {project.releaseDate}
                                            </p>
                                            <div
                                                key={project.id + '_tags'}
                                                className={
                                                    portfolioStyle.page__content__card_content_tags
                                                }>
                                                {project.tags.map((tag) => (
                                                    <p
                                                        key={project.id + tag}
                                                        className={
                                                            portfolioStyle.page__content__card_content_tags_label
                                                        }>
                                                        {tag.tag}
                                                    </p>
                                                ))}
                                            </div>
                                            <p
                                                className={
                                                    portfolioStyle.page__content__card_description
                                                }>
                                                {
                                                    project.fullDescription
                                                        .fullDescription
                                                }
                                            </p>

                                            <div
                                                className={
                                                    portfolioStyle.page__content__card_links
                                                }>
                                                <a
                                                    href={project.projectUrl}
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
                                                    href={project.githubUrl}
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
                            );
                        }
                    })}
                </div>
            </section>
        </Layout>
    );
};

export default PortfolioPage;
