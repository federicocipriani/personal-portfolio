const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Resolve adds the rest of the path from the hard disk root to the specified path
    const seedTemplate = path.resolve('./src/templates/seed.js');

    // graphql is different from what is imported in header.js
    // this function return a Promise
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: seedTemplate,
            path: `/digital-garden/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
