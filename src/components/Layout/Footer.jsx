/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Button, Text, Heading } from 'rebass'

import styled from '../../utils/styled'
import BaseLink from '../ui/link'
import Fade from '../ui/fade'
import Row from '../ui/Row'
import Col from '../ui/Col'
import Container from '../ui/Container'

const Link = styled(BaseLink)`
  margin-left: ${props => props.theme.space[3]}px;
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
    <footer sx={{ bg: `rgba(0, 0, 0, 1)`, color: 'white' }}>
      <Container py={[4, 5]}>
        <Row py={[5]} fade>
          <Col>
            <Heading fontSize={5}>{footer_text}</Heading>
          </Col>
          <Col>
            <Button
              sx={{
                px: 5,
                py: 3,
                fontSize: 3
              }}
            >
              Contact
            </Button>
          </Col>
        </Row>
        <Fade>
          <hr />
        </Fade>
        <Row pt={4} fade>
          <Col>
            <Text
              sx={{
                m: 0,
                color: 'grey.8'
              }}
            >
              {`${new Date().getFullYear()} © Copyright ${site_name}, ${job}.`}
            </Text>
          </Col>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
