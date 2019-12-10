/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicPost(filter: { lang: { eq: "fr-fr" } }) {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve('src/templates/post.tsx')
  pages.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid
      }
    })
  })
}
