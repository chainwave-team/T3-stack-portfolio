/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import HomepageHero from '../sections/Home/HomeHero'
import { TemplateHome } from '../types/templates'

const HomeServices = loadable(() => import('../sections/Home/HomeServices'))
const HomePortfolio = loadable(() => import('../sections/Home/HomePortfolio'))
const LastPosts = loadable(() => import('../components/LastPosts'))

const HomeTemplate: FC<TemplateHome> = ({ location, pageContext }) => {
  const { lastPosts, homepage } = pageContext
  const {
    introduction,
    header_contact_button_label,
    services_introduction,
    services,
    featured_projects
  } = homepage.data

  // Normalize collection
  const projects = featured_projects.map(({ project }) => ({
    node: { ...project.document[0] }
  }))

  return (
    <Layout path={location.pathname}>
      <SEO title="Portfolio" path={location.pathname} />
      <HomepageHero
        textarea={introduction.text}
        buttonLabel={header_contact_button_label}
      />
      <HomeServices title={services_introduction.text || ''} items={services} />
      <HomePortfolio projects={projects} />
      <LastPosts posts={lastPosts} displayButton />
    </Layout>
  )
}

export default HomeTemplate
