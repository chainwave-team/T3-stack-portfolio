import React, { Component } from 'react'
import Slider from 'react-slick'
import uniqid from 'uniqid'

import SlickHelper from '../../utils/slick-helper'
import { Flex, Box, Heading, Text, Container, Card } from '../../utils/rebass'
import Mockup from '../../components/mockup'
import TagList from '../../components/tagList'
import Html from '../../components/html'
import { getPosts } from '../../api'

class SectionHeader extends Component {
  state = {
    loading: true,
    projects: []
  }

  componentDidMount() {
    getPosts().then(projects =>
      this.setState({
        loading: false,
        projects
      })
    )
  }

  render() {
    const { loading, projects } = this.state
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
        {!loading ? (
          <>
            <SlickHelper />
            <Slider {...settings}>
              {projects.map((item, i) => {
                const { title, excerpt, acf, _embedded } = item
                // eslint-disable-next-line
                const { lien_demo: demoLink } = acf
                const tags = _embedded['wp:term'][0]
                const cats = _embedded['wp:term'][1]
                const imageSizes =
                  _embedded['wp:featuredmedia'][0].media_details.sizes
                const imageUrl =
                  typeof imageSizes['portfolio-slide'] !== 'undefined'
                    ? imageSizes['portfolio-slide'].source_url
                    : imageSizes.full.source_url

                return (
                  <div key={uniqid(i)}>
                    <Flex justifyContent="center" flexWrap="wrap">
                      <Box width={[1, 1, 1 / 2]} p={4}>
                        <Mockup imageUrl={imageUrl || ``} siteUrl={demoLink} />
                      </Box>
                      <Flex
                        flexDirection="column"
                        justifyContent="center"
                        width={[1, 1, 1 / 3]}
                        p={3}
                        mx={-3}
                      >
                        <Box px={3}>
                          {cats.length !== 0 && (
                            <Text color="cyan">{cats[0].name}</Text>
                          )}
                          <Heading>{title.rendered}</Heading>
                        </Box>
                        <Card boxShadow={3} bg="blue" p={3} my={2}>
                          <Html __html={excerpt.rendered} />
                        </Card>
                        <Box px={3}>
                          <TagList technologies={tags} />
                        </Box>
                      </Flex>
                    </Flex>
                  </div>
                )
              })}
            </Slider>
          </>
        ) : (
          <Text textAlign="center" py={5}>
            Chargement...
          </Text>
        )}
      </Container>
    )
  }
}

export default SectionHeader
