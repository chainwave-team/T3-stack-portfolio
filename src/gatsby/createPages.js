const path = require('path')

const query = require('./data.query')
const utils = require('./utils')

const { getPostTags } = utils

const templates = {
  post: path.resolve('src/templates/post.tsx'),
  postTag: path.resolve('src/templates/postTag.tsx')
}

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const data = {
    posts: [],
    tags: [],
    postTags: []
  }

  // Have a graphQL error if has a empty field
  // To fix it, we have a dummy post with all fields
  // Here we dont' create page for this.
  const hiddenPostSlugs = [
    'bonjour-cher-visiteur-bienvenue-sur-mon-article-demo'
  ]
  const postsTmp = await graphql(query.posts)
  data.posts = postsTmp.data.posts.edges
    .map(el => el)
    .filter(({ node }) => !hiddenPostSlugs.includes(node.uid))

  // Get tech tags
  const postTagsTmp = await graphql(query.postTags)
  data.tags = postTagsTmp.data.tags.edges.map(el => el)

  // Get tags linked to posts
  data.postTags = getPostTags(data.posts)

  // Create Blog posts
  data.posts.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templates.post,
      context: {
        currentPost: edge.node,
        postTags: data.postTags,
        allPosts: data.posts
      }
    })
  })

  // Create Blog post tags
  data.postTags.forEach(edge => {
    createPage({
      path: `/blog/tags/${edge.node.uid}`,
      component: templates.postTag,
      context: {
        currentTag: edge.node,
        posts: data.posts.filter(({ node }) =>
          edge.node.posts.includes(node.uid)
        )
      }
    })
  })
}
