/* eslint-disable import/prefer-default-export */
import path from 'path'

import query from './query'
import * as utils from './utils'
import { GatsbyCreatePages } from './types'
import {
  PrismicPost,
  GraphQueryOf,
  PrismicProject,
  PrismicTechTag,
  Homepage,
  ForTemplatePostTag
} from '../types'

const { getPostTags } = utils

interface Data {
  data: {
    posts: GraphQueryOf<PrismicPost>
    projects: GraphQueryOf<PrismicProject>
    tags: GraphQueryOf<PrismicTechTag>
    homepage: Homepage
  }
}

const templates = {
  post: path.resolve('src/templates/post.tsx'),
  postTag: path.resolve('src/templates/postTag.tsx'),
  blog: path.resolve('src/templates/blog.tsx'),
  home: path.resolve('src/templates/home.tsx')
}

export const createPages: GatsbyCreatePages = async ({
  boundActionCreators,
  graphql
}) => {
  const { createPage } = boundActionCreators

  const { data }: Data = await graphql(query)

  const { posts, tags, projects, homepage } = {
    posts: data.posts.edges.map(el => el),
    tags: data.tags.edges.map(el => el),
    projects: data.projects.edges.map(el => el),
    homepage: data.homepage
  }

  const postTags: Array<{
    node: ForTemplatePostTag
  }> = getPostTags(posts)

  // Create Blog posts
  posts.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: templates.post,
      context: {
        currentPost: edge.node,
        postTags,
        allPosts: posts // TODO : filter related posts here
      }
    })
  })

  // Create Blog post tags
  postTags.forEach(({ node }) => {
    createPage({
      path: `/blog/tags/${node.uid}`,
      component: templates.postTag,
      context: {
        currentTag: node,
        postTags,
        posts: posts.filter(post => node.posts.includes(post.node.uid))
      }
    })
  })

  // Create the blog page
  createPage({
    path: `/blog`,
    component: templates.blog,
    context: {
      postTags,
      posts
    }
  })

  // Create the home page
  createPage({
    path: `/`,
    component: templates.home,
    context: {
      lastPosts: posts.slice(0, 3),
      projects,
      homepage
    }
  })
}
