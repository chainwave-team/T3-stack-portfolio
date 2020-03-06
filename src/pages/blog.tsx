/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'
import { graphql } from 'gatsby'
import { FC } from 'react'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { PrismicPost } from '../types.d'
import Link from '../components/Link'
import { hoverStyle } from '../styles/theme'
import BlogHero from '../sections/Blog/BlogHero'
import BlogList from '../sections/Blog/BlogList'

export interface BlogPageProps {
  path: string
  data: {
    blog: {
      edges: Array<{
        node: PrismicPost
      }>
    }
  }
}

export const PostCard: FC<PrismicPost> = ({
  uid,
  first_publication_date,
  data: { title, published_date }
}) => (
  <Box sx={{ pb: 2 }}>
    <Link to={uid}>
      <Styled.h3 sx={hoverStyle}>{title?.text || ''}</Styled.h3>
      <Styled.p>{published_date || first_publication_date}</Styled.p>
    </Link>
  </Box>
)

const BlogPage: FC<BlogPageProps> = ({ path, data }) => (
  <Layout path={path}>
    <SEO title="Portfolio" />
    <BlogHero />
    <BlogList posts={data.blog.edges} />
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query {
    blog: allPrismicPost(
      sort: { fields: first_publication_date, order: DESC }
      filter: {
        uid: { ne: "bonjour-cher-visiteur-bienvenue-sur-mon-article-demo" }
      }
    ) {
      edges {
        node {
          ...PrismicPost
        }
      }
    }
  }
`
