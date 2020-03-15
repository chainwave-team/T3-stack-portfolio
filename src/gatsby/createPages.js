const path = require('path')

const query = require('./data.query')
const utils = require('./utils')

const { getPostTags } = utils

const templates = {
  post: path.resolve('src/templates/post.tsx'),
  postTag: path.resolve('src/templates/postTag.tsx'),
  blog: path.resolve('src/templates/blog.tsx'),
  home: path.resolve('src/templates/home.tsx')
}

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const postsTmp = await graphql(query.posts)
  const postTagsTmp = await graphql(query.postTags)
  const projectsTmp = await graphql(query.projects)
  const homepageTmp = await graphql(query.homepage)

  const data = {
    posts: postsTmp.data.posts.edges.map(el => el),
    tags: postTagsTmp.data.tags.edges.map(el => el),
    postTags: [],
    projects: projectsTmp.data.projects.edges.map(el => el),
    homepage: homepageTmp.data.homepage
  }

  data.postTags = getPostTags(data.posts)

  // Create Blog posts
  data.posts.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templates.post,
      context: {
        currentPost: edge.node,
        postTags: data.postTags,
        allPosts: data.posts // TODO : filter related posts here
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
        postTags: data.postTags,
        posts: data.posts.filter(({ node }) =>
          edge.node.posts.includes(node.uid)
        )
      }
    })
  })

  // Create the blog page
  createPage({
    path: `/blog`,
    component: templates.blog,
    context: {
      postTags: data.postTags,
      posts: data.posts
    }
  })

  // Create the home page
  createPage({
    path: `/`,
    component: templates.home,
    context: {
      lastPosts: data.posts.slice(0, 3),
      projects: data.projects,
      homepage: data.homepage
    }
  })
}
