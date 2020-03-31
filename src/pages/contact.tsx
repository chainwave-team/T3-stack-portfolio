import React from 'react'
import { Styled, Container } from 'theme-ui'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { Template } from '../types/templates'

function ContactPage({ location }: Template) {
  return (
    <Layout path={location.pathname}>
      <SEO title="Contact" path={location.pathname} />
      <Container sx={{ my: 6 }}>
        <Styled.h1>Contact</Styled.h1>
      </Container>
    </Layout>
  )
}

export default ContactPage
