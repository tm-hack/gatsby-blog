/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
      query {      
        allMarkdownRemark {
          edges {
            node {
              id
              html
            }
          }
        }
      }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post) => {
    createPage({
      path: post.node.id,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: post.node.id
      },
    });
  });
};
