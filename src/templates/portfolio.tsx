/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { FC } from 'react'
import loadable from '@loadable/component'

import Layout from '../Layout/Layout'
import SEO from '../Layout/SEO'
import { TemplatePortfolio } from '../types/templates'
import BlogHero from '../sections/Blog/BlogHero'

const ProjectSlide = loadable(() => import('../components/ProjectSlide'))

const HomeTemplate: FC<TemplatePortfolio> = ({ location, pageContext }) => {
  const { projects } = pageContext
  const title = 'Portfolio'
  const subTitle = 'Découvrez mes derniers projets'

  return (
    <Layout path={location.pathname}>
      <SEO title={title} path={location.pathname} description={subTitle} />
      <BlogHero {...{ title, subTitle }} />

      <Container sx={{ py: 5 }}>
        {projects.map(({ node }, i: number) => (
          <Box
            key={node.uid}
            sx={{ my: i === 0 || i === projects.length - 1 ? 6 : 7 }}
          >
            <ProjectSlide inverse={i % 2 === 0} {...node} />
          </Box>
        ))}
      </Container>
    </Layout>
  )
}

export default HomeTemplate
