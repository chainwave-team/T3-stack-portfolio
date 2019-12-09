/** @jsx jsx */
import { jsx } from 'theme-ui'
import uuid from 'uuid'

import Container from '../../components/ui/Container'
import Carousel from '../../components/Carousel/Carousel'

import { PrismicProject } from '../../utils/types'
import ProjectCard from '../../components/ui/ProjectCard'
import Row from '../../components/ui/Row'
import Col from '../../components/ui/Col'
import Mockup from '../../components/Mockup/Mockup'

type Props = {
  nodes: Array<{
    data: PrismicProject
    uid: string
  }>
}

export default function SectionSlider({ nodes }: Props) {
  return (
    <Container id="portfolio" section>
      <Carousel>
        {nodes.map(
          (
            {
              data: {
                demo_link,
                source_link,
                title,
                full_screen,
                project_type,
                relations,
                html
              }
            },
            index
          ) => (
            <article key={uuid()} sx={{ ':focus': { outline: 'none' } }}>
              <Row fade>
                <Col sx={{ width: ['full', 'full', '2/3'] }}>
                  <Mockup
                    fluid={full_screen.localFile.childImageSharp.fluid || null}
                    siteUrl={demo_link ? demo_link.url : ''}
                    srcUrl={source_link ? source_link.url : ''}
                    index={index}
                    title={title.text}
                  />
                </Col>
                <Col sx={{ width: ['full', 'full', '1/3'] }}>
                  <ProjectCard
                    title={title}
                    html={html}
                    index={index}
                    tags={relations.map(
                      data => data.tech_tags.document[0].data
                    )}
                    projectType={project_type.document[0].data.title}
                  />
                </Col>
              </Row>
            </article>
          )
        )}
      </Carousel>
    </Container>
  )
}
