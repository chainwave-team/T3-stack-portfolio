import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Flex, Button, Container, Text, Heading, Box } from '../../utils/rebass'
import { colors, space, mediaQueries } from '../../utils/theme'
import BaseLink from '../ui/link'
import Fade from '../ui/fade'

const Link = styled(BaseLink)`
  margin-left: ${space[3]}px;
`
const Row = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin-top: ${space[3]}px;
    margin-bottom: ${space[3]}px;
  }

  ${mediaQueries.onlySmall} {
    & > * {
      width: 100%;
    }
  }

  ${mediaQueries.medium} {
    & > * {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`

export default function Footer() {
  const { prismicOptions } = useStaticQuery(
    graphql`
      query Footer {
        prismicOptions(lang: { eq: "fr-fr" }) {
          data {
            email
            job
            site_name
            footer_text
            malt_url {
              link_type
              url
              target
            }
            linkedin_url {
              link_type
              url
              target
            }
            github_url {
              link_type
              url
              target
            }
          }
        }
      }
    `
  )
  const {
    job,
    site_name,
    github_url,
    malt_url,
    linkedin_url,
    footer_text
  } = prismicOptions.data

  return (
    <footer style={{ backgroundColor: `rgba(0, 0, 0, 1)` }}>
      <Container py={[4, 5]}>
        <Fade>
          <Row py={[5]}>
            <Box mb={[3]}>
              <Heading fontSize={5}>{footer_text}</Heading>
            </Box>
            <Button px={5} py={3} fontSize={3}>
              Contact
            </Button>
          </Row>
        </Fade>
        <Fade>
          <hr />
        </Fade>
        <Fade>
          <Row pt={4}>
            <Text m={0} color={colors.grey[8]}>
              {`${new Date().getFullYear()} © Copyright ${site_name}, ${job}.`}
            </Text>
            <div>
              <Link
                to={linkedin_url.url}
                target={linkedin_url.target}
                style={{ marginLeft: 0 }}
              >
                Linkedin
              </Link>
              <Link to={malt_url.url} target={malt_url.target}>
                Malt
              </Link>
              <Link to={github_url.url} target={github_url.target}>
                Github
              </Link>
            </div>
          </Row>
        </Fade>
      </Container>
    </footer>
  )
}
