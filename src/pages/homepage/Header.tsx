/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import { Heading, Flex, Button, Box } from '@theme-ui/components'
import { useBreakpointIndex } from '@theme-ui/match-media'

import Html from '../../components/ui/Html'
import Container from '../../components/ui/Container'
import Fade from '../../components/ui/fade'
import CoderSVG from '../../images/coder.svg'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({
  textarea = '',
  buttonLabel = ''
}: Props) {
  const mediaIndex = useBreakpointIndex()
  const { prismicOptions } = useStaticQuery(
    graphql`
      query HomepageHeader {
        prismicOptions(lang: { eq: "fr-fr" }) {
          data {
            job
            site_name
          }
        }
      }
    `
  )
  const { job, site_name } = prismicOptions.data

  return (
    <Flex
      as="section"
      id="top"
      sx={{
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container py={6}>
        <Flex
          sx={{
            pt: 4,
            mx: -3,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box width={[1, 1, 1, 7 / 12]} px={3} alignItems="center">
            <Fade>
              <Heading
                as="h2"
                sx={{
                  pb: 3,
                  fontSize: [5, 5, 6]
                }}
              >
                {site_name}
              </Heading>
            </Fade>
            <Fade>
              <Heading
                as="h1"
                sx={{
                  pb: 4,
                  fontSize: [5, 6, 7]
                }}
              >
                {job}
              </Heading>
            </Fade>
            <Fade>
              <div style={{ maxWidth: '650px' }}>
                <Html html={textarea} />
              </div>
            </Fade>
            <Fade>
              <Box py={3}>
                <Button as={ScrollLink} to="contact" smooth isDynamic>
                  {buttonLabel}
                </Button>
              </Box>
            </Fade>
          </Box>
          {mediaIndex > 2 ? (
            <Flex
              sx={{
                width: '5/12',
                px: 3,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box sx={{ width: 'full' }}>
                <Fade>
                  <CoderSVG width="100%" height="100%" />
                </Fade>
              </Box>
            </Flex>
          ) : null}
        </Flex>
      </Container>
    </Flex>
  )
}
