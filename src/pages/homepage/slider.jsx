import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import SlickHelper from '../../utils/slick-helper'
import { Flex, Box, Heading, Text, Container, Card } from '../../utils/rebass'
import { imageProps } from '../../utils/prop-types'
import Mockup from '../../components/mockup'
import TagList from '../../components/tagList'
import Html from '../../components/html'

export default function SectionHeader({ items }) {
  const settings = {
    dots: false,
    autoplay: false,
    arrows: true,
    infinite: true,
    lazyLoad: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Container as="section" id="portfolio">
      <SlickHelper />
      <Slider {...settings}>
        {items.map(
          ({
            id,
            wordpress_id: wpId,
            tags,
            excerpt,
            title,
            acf,
            project_type: projectType,
            featured_media: image
          }) => {
            const { lien_demo: demoLink } = acf
            const category = projectType[0]
            const { fluid } = image.localFile.childImageSharp

            return (
              <article key={id} id={`projects${wpId}`}>
                <Flex justifyContent="center" flexWrap="wrap">
                  <Box width={[1, 1, 1 / 2, 2 / 3]}>
                    <Mockup fluid={fluid} siteUrl={demoLink} />
                  </Box>
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    width={[1, 1, 1 / 3]}
                    p={3}
                    mx={-3}
                  >
                    <Box px={3}>
                      {category && <Text color="cyan">{category.name}</Text>}
                      <Heading>{title}</Heading>
                    </Box>
                    <Card boxShadow={3} bg="blue" p={3} my={2}>
                      <Html __html={excerpt} />
                    </Card>
                    <Box px={3}>
                      <TagList technologies={tags} />
                    </Box>
                  </Flex>
                </Flex>
              </article>
            )
          }
        )}
      </Slider>
    </Container>
  )
}

SectionHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      wordpress_id: PropTypes.number.isRequired,
      tags: PropTypes.array,
      excerpt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      acf: PropTypes.shape({
        lien_demo: PropTypes.string
      }),
      project_type: PropTypes.array,
      featured_media: PropTypes.shape({
        localFile: imageProps
      })
    })
  )
}

SectionHeader.defaultProps = {
  items: []
}
