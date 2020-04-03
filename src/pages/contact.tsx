/** @jsx jsx */
import { FC } from 'react'
import { jsx, Container, Grid } from 'theme-ui'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { Template } from '../types/templates'
import ContactForm from '../components/Forms/ContactForm'
import PageHero from '../components/PageHero'

const ContactPage: FC<Template> = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Contact" path={location.pathname} />
      <PageHero title="Contact" subTitle="Comment puis-je vous aider ? :)" />
      <Container variant="blog" sx={{ mt: 3, mb: 6 }}>
        <Grid columns={[1]}>
          <ContactForm />
        </Grid>
      </Container>
    </Layout>
  )
}

export default ContactPage
