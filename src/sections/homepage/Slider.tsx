/** @jsx jsx */
import { jsx } from 'theme-ui'
import uuid from 'uuid'

import { PrismicProject } from '../../utils/types'
import Container from '../../components/Container'
import Carousel from '../../components/Carousel/Carousel'
import ProjectCard from '../../components/ProjectCard'
import Row from '../../components/Row'
import Fade from '../../components/Fade'
import Col from '../../components/Col'
import Mockup from '../../components/Mockup/Mockup'
import { getTagsFromRelation } from '../../utils/utils'

type Props = {
  nodes: Array<{
    data: PrismicProject
    uid: string
  }>
}

export default function SectionSlider({ nodes }: Props) {
  return (
    <Container id="portfolio" section>
      <Fade>
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
                <div sx={{ padding: 2 }}>
                  <Row>
                    <Col sx={{ width: ['full', 'full', '2/3'] }}>
                      <Mockup
                        title={title}
                        fluid={
                          (full_screen &&
                            full_screen.localFile &&
                            full_screen.localFile.childImageSharp.fluid) ||
                          null
                        }
                        siteUrl={demo_link ? demo_link.url : ''}
                        srcUrl={source_link ? source_link.url : ''}
                        index={index}
                      />
                    </Col>
                    <Col sx={{ width: ['full', 'full', '1/3'] }}>
                      <ProjectCard
                        title={title}
                        html={html}
                        index={index}
                        tags={getTagsFromRelation(relations)}
                        projectType={
                          project_type
                            ? project_type.document[0].data.title
                            : undefined
                        }
                      />
                    </Col>
                  </Row>
                </div>
              </article>
            )
          )}
        </Carousel>
      </Fade>
    </Container>
  )
}
