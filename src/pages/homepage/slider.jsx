import React from 'react'
import Slider from 'react-slick'
// import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import uuid from 'uuid'
import { Flex, Box, Heading, Text, Container, Card } from '@theme-ui/components'

import { BackArrow, NextArrow } from '../../utils/slick-helper'
// import { imageProps } from '../../utils/prop-types'
import Mockup from '../../components/ui/mockup'
import Html from '../../components/ui/Html'
import Fade from '../../components/ui/fade'

import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const SectionHeader = ({ projects }) => {
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
    <Container as="section" id="portfolio">
      <Fade>
        <Slider {...settings}>
          {projects.map(
            (
              {
                slug,
                demo_link,
                source_link,
                title,
                full_screen,
                project_type,
                relations,
                html
              },
              i
            ) => (
              <Article key={uuid(slug)}>
                <Flex justifyContent="center" flexWrap="wrap">
                  <Box width={[1, 1, 1 / 2, 2 / 3]}>
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
                    flexDirection="column"
                    justifyContent="center"
                    width={[1, 1, 1 / 3]}
                    p={3}
                    mx={-3}
                  >
                    <Box px={3}>
                      {project_type && project_type.document && (
                        <Text color="cyan">
                          {project_type.document[0].data.title
                            ? project_type.document[0].data.title.text
                            : ''}
                        </Text>
                      )}
                      <Heading>{title && title.text}</Heading>
                    </Box>
                    <Card boxShadow={3} bg="blue" p={3} my={2}>
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
                              style={{
                                paddingRight: 8,
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

SectionHeader.propTypes = {}

SectionHeader.defaultProps = {}

export default SectionHeader
