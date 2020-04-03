/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { FC } from 'react'

import Link from '../components/Link'
import Fade from '../components/Fade'
import Row from '../components/Row'
import Col from '../components/Col'
import { PrismicLink } from '../types/prismicField'
import ContactButton from '../components/ContactButton'

const style = {
  footer: { bg: `rgba(0, 0, 0, 1)`, color: 'white' },
  container: { py: [4, 5] },
  row1: { py: 5 },
  row2: { pt: 4 },
  heading: { fontFamily: 'mono', fontSize: 3, m: 0 },
  copyright: { m: 0, fontFamily: 'mono', color: 'muted' },
  link: { color: 'muted', fontFamily: 'mono', ml: 3 }
}

interface ExternalLinkProps {
  link: PrismicLink
  label: string
  first?: boolean
}

const ExternalLink: FC<ExternalLinkProps> = ({
  link,
  label,
  first = false
}) => (
  <Link
    to={link.url}
    target={link.target || ''}
    sx={{ ...style.link, ml: first ? 0 : 3 }}
  >
    {label}
  </Link>
)

const Footer: FC<{}> = () => {
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
    linkedin_url
  } = prismicOptions.data

  return (
    <footer id="footer" sx={style.footer}>
      <Container sx={style.container}>
        <Fade>
          <Row sx={style.row1}>
            <Col>
              <Styled.p
                sx={{
                  fontWeight: 'heading',
                  ...style.heading,
                  color: 'white'
                }}
              >
                Vous avez un projet ?
              </Styled.p>
              <Styled.p sx={style.heading}>Dites m'en plus !</Styled.p>
            </Col>
            <Col>
              <ContactButton />
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
              <Styled.a href="/rss.xml" sx={style.link}>
                RSS
              </Styled.a>
            </Col>
          </Row>
        </Fade>
      </Container>
    </footer>
  )
}

export default Footer
