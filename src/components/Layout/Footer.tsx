/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import BaseLink from '../tmp/Link'
import Fade from '../tmp/Fade'
import Row from '../tmp/Row'
import Col from '../tmp/Col'
import Container from '../tmp/Container'
import { PrismicLink } from '../../utils/types'

const style = {
  footer: { bg: `rgba(0, 0, 0, 1)`, color: 'white' },
  container: { py: [4, 5] },
  row1: { py: 5 },
  row2: { pt: 4 },
  title: { fontSize: [3, 3, 3, 4] },
  copyright: { m: 0, fontFamily: 'mono' }
}

type LinkProps = {
  link: PrismicLink
  label: string
  first?: boolean
}

const ExternalLink = ({ link, label, first = false }: LinkProps) => (
  <BaseLink
    to={link.url}
    target={link.target}
    sx={{ ml: first ? 0 : 3, color: 'white', fontFamily: 'mono' }}
  >
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
    footer_text,
    email: mail
  } = prismicOptions.data

  return (
    <footer id="footer" sx={style.footer}>
      <Container sx={style.container}>
        <Fade>
          <Row sx={style.row1}>
            <Col>
              <Styled.h4 sx={style.title}>{footer_text}</Styled.h4>
            </Col>
            <Col>
              {/* <Link to="/contact">
                <Button size="large">Contact</Button>
              </Link> */}
              <Styled.h4 sx={{ ...style.title, color: 'primary' }}>
                {mail}
              </Styled.h4>
            </Col>
          </Row>
        </Fade>
        <Fade>
          <hr />
        </Fade>
        <Fade>
          <Row sx={style.row2}>
            <Col>
              <Styled.p sx={style.copyright}>
                {`${new Date().getFullYear()} © Copyright ${site_name}, ${job}.`}
              </Styled.p>
            </Col>
            <Col>
              <ExternalLink first link={linkedin_url} label="Linkedin" />
              <ExternalLink link={malt_url} label="Malt" />
              <ExternalLink link={github_url} label="Github" />
            </Col>
          </Row>
        </Fade>
      </Container>
    </footer>
  )
}
