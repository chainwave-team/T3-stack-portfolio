/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

import BaseLink from '../components/Link'
import Fade from '../components/Fade'
import Row from '../components/Row'
import Col from '../components/Col'
import Container from '../components/Container'
import Button from '../components/Button'
import { PrismicLink } from '../utils/types'

type LinkProps = {
  link: PrismicLink
  label: string
}

const ExternalLink = ({ link, label }: LinkProps) => (
  <BaseLink to={link.url} target={link.target} sx={{ ml: 3, color: 'white' }}>
    {label}
  </BaseLink>
)

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
      <Container sx={{ py: [4, 5] }}>
        <Fade>
          <Row sx={{ py: 5 }}>
            <Col>
              <Styled.h3>{footer_text}</Styled.h3>
            </Col>
            <Col>
              <Link to="/contact">
                <Button size="large">Contact</Button>
              </Link>
            </Col>
          </Row>
        </Fade>
        <Fade>
          <hr />
        </Fade>
        <Fade>
          <Row sx={{ pt: 4 }}>
            <Col>
              <Styled.p sx={{ m: 0 }}>
                {`${new Date().getFullYear()} © Copyright ${site_name}, ${job}.`}
              </Styled.p>
            </Col>
            <Col>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <ExternalLink
                link={linkedin_url}
                label="Linkedin"
                sx={{ ml: 0 }}
              />
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <ExternalLink link={malt_url} label="Malt" />
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <ExternalLink link={github_url} label="Github" />
            </Col>
          </Row>
        </Fade>
      </Container>
    </footer>
  )
}
