import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SectionHeader from './homepage/header'
import SectionSkills from './homepage/skills'
import SectionSlider from './homepage/slider'
import SectionFooter from './homepage/footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHeader />
    <SectionSkills />
    <SectionSlider />
    <SectionFooter />
  </Layout>
)

export default IndexPage
