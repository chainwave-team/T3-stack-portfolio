/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import BaseLink from '../ui/Link'
import Fade from '../ui/Fade'
import Row from '../ui/Row'
import Col from '../ui/Col'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { PrismicLink } from '../../utils/types'

type LinkProps = {
  link: PrismicLink
  label: string
}

const Link = ({ link, label }: LinkProps) => (
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
        <Row sx={{ py: 5 }} fade>
          <Col>
            <Styled.h3>{footer_text}</Styled.h3>
          </Col>
          <Col>
            <Button sx={{ px: 5, py: 3, fontSize: 3 }}>Contact</Button>
          </Col>
        </Row>
        <Fade>
          <hr />
        </Fade>
        <Row sx={{ pt: 4 }} fade>
          <Col>
            <Styled.p sx={{ m: 0 }}>
              {`${new Date().getFullYear()} © Copyright ${site_name}, ${job}.`}
            </Styled.p>
          </Col>
          <Col>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link link={linkedin_url} label="Linkedin" sx={{ ml: 0 }} />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link link={malt_url} label="Malt" />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link link={github_url} label="Github" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
