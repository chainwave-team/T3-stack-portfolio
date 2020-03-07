/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import HomepageHero from '../sections/HomepageHero'
import LastPosts from '../components/LastPosts'
import { TemplateHome } from '../types'
import HomepagePortfolio from '../sections/HomepagePortfolio'

const HomepageServices = loadable(() => import('../sections/HomepageServices'))

const HomeTemplate: FC<TemplateHome> = ({ location, pageContext }) => {
  const { posts, projects, homepage } = pageContext
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
      <HomepageServices
        title={services_introduction.text || ''}
        items={services}
      />
      <HomepagePortfolio projects={projects} />
      <LastPosts posts={posts.slice(0, 3)} />
    </Layout>
  )
}

export default HomeTemplate
