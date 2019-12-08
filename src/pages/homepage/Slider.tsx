/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import Slider from 'react-slick'
import styled from '@emotion/styled'
import uuid from 'uuid'
import { Heading, Text, Card } from '@theme-ui/components'

import { BackArrow, NextArrow } from '../../utils/slick-helper'
import Mockup from '../../components/ui/mockup'
import Html from '../../components/ui/Html'
import Fade from '../../components/ui/fade'
import Container from '../../components/ui/Container'

import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import { PrismicProject } from '../../utils/types'

type Props = {
  nodes: Array<{
    data: PrismicProject
    uid: string
  }>
}

export default function SectionHeader({ nodes }: Props) {
  const settings = {
    dots: false,
    // autoplay: true,
    arrows: true,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <BackArrow />
  }
  return (
    <Container as="section" id="portfolio" section>
      <Fade>
        <Slider {...settings}>
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
                },
                uid: slug
              },
              i
            ) => (
              <Article key={uuid(slug)}>
                <Flex
                  sx={{
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  <Box sx={{ width: ['full', 'full', '1/2', '2/3'] }}>
                    <Mockup
                      fluid={
                        full_screen.localFile.childImageSharp.fluid || null
                      }
                      siteUrl={demo_link ? demo_link.url : ''}
                      srcUrl={source_link ? source_link.url : ''}
                      index={i}
                      title={title.text}
                    />
                  </Box>
                  <Flex
                    sx={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      width: ['full', 'full', '1/3'],
                      p: 3,
                      mx: -3
                    }}
                  >
                    <Box px={3}>
                      {project_type && project_type.document && (
                        <Text sx={{ color: 'cyan' }}>
                          {project_type.document[0].data.title
                            ? project_type.document[0].data.title.text
                            : ''}
                        </Text>
                      )}
                      <Heading>{title && title.text}</Heading>
                    </Box>
                    <Card
                      sx={{
                        boxShadow: 3,
                        bg: 'blue',
                        p: 3,
                        my: 2
                      }}
                    >
                      <Html html={html.html} />
                    </Card>
                    <Box px={3}>
                      {relations && (
                        <Text>
                          {relations.map((tag, idx) => (
                            <span
                              title={
                                tag.tech_tags.document[0].data.description &&
                                tag.tech_tags.document[0].data.description.text
                              }
                              key={uuid(idx)}
                              sx={{
                                paddingRight: 3,
                                display: 'inline-block'
                              }}
                            >
                              {tag.tech_tags.document[0].data.title.text}
                            </span>
                          ))}
                        </Text>
                      )}
                    </Box>
                  </Flex>
                </Flex>
              </Article>
            )
          )}
        </Slider>
      </Fade>
    </Container>
  )
}

const Article = styled.article`
  :focus {
    outline: none;
  }
`
