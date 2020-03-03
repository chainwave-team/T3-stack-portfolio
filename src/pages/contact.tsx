// import { graphql } from 'gatsby'
import React from 'react'
import { Styled } from 'theme-ui'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import Container from '../components/tmp/Container'

type Props = {
  path: string
}

function ContactPage({ path }: Props) {
  return (
    <Layout path={path}>
      <SEO title="Portfolio" />
      <Container section>
        <Styled.h1>Contact</Styled.h1>
      </Container>
    </Layout>
  )
}

export default ContactPage

// export const pageQuery = graphql`
//   query {}
// `
