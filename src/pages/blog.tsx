// import { graphql } from 'gatsby'
import React from 'react'
import { Styled } from 'theme-ui'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import Container from '../components/Container'

type Props = {
  path: string
}

function BlogPage({ path }: Props) {
  return (
    <Layout path={path}>
      <SEO title="Portfolio" />
      <Container section>
        <Styled.h1>Blog</Styled.h1>
      </Container>
    </Layout>
  )
}

export default BlogPage

// export const pageQuery = graphql`
//   query {}
// `
