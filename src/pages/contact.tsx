// import { graphql } from 'gatsby'
import React from 'react'
import { Styled, Container } from 'theme-ui'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'

type Props = {
  path: string
}

function ContactPage({ path }: Props) {
  return (
    <Layout path={path}>
      <SEO title="Portfolio" />
      <Container sx={{ my: 6 }}>
        <Styled.h1>Contact</Styled.h1>
      </Container>
    </Layout>
  )
}

export default ContactPage
