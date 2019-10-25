import React from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex, Box, Heading, Text, Container, Card } from '../../utils/rebass'
import { BackArrow, NextArrow } from '../../utils/slick-helper'
import { imageProps } from '../../utils/prop-types'
import Mockup from '../../components/mockup'
import TagList from '../../components/tagList'
import Html from '../../components/html'
import Fade from '../../components/fade'

import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const SectionHeader = ({ items }) => {
  const settings = {
    dots: false,
    // autoplay: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
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
          {items.map((node, i) => {
            const {
              id,
              wordpress_id: wpId,
              title,
              acf,
              categories,
              content,
              tags,
              featured_media: image
            } = node
            const { lien_demo: demoLink } = acf
            const category = categories[0]
            const { fluid } = image.localFile.childImageSharp

            return (
              <Article key={id} id={`projects-${wpId}`}>
                <Flex justifyContent="center" flexWrap="wrap">
                  <Box width={[1, 1, 1 / 2, 2 / 3]}>
                    <Mockup fluid={fluid} siteUrl={demoLink} index={i} />
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
                      <Html __html={content} />
                    </Card>
                    <Box px={3}>
                      <TagList technologies={tags} />
                    </Box>
                  </Flex>
                </Flex>
              </Article>
            )
          })}
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

SectionHeader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      wordpress_id: PropTypes.number.isRequired,
      tags: PropTypes.array,
      content: PropTypes.string.isRequired,
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

export default SectionHeader
