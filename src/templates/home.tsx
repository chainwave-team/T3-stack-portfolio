/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import HomepageHero from '../sections/Home/HomeHero'
import HomePortfolio from '../sections/Home/HomePortfolio'
import { TemplateHome } from '../types'

const HomeServices = loadable(() => import('../sections/Home/HomeServices'))
const LastPosts = loadable(() => import('../components/LastPosts'))

const HomeTemplate: FC<TemplateHome> = ({ location, pageContext }) => {
  const { lastPosts, projects, homepage } = pageContext
  const {
    introduction,
    header_contact_button_label,
    services_introduction,
    services
  } = homepage.data

  return (
    <Layout path={location.pathname}>
      <SEO title="Portfolio" />
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
