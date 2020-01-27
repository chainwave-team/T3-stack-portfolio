/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Row from '../../components/Row'
import Col from '../../components/Col'
import Html from '../../components/Html'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Fade from '../../components/Fade'
import SocialIcons from '../../components/SocialIcons'

type Props = {
  textarea?: string
  buttonLabel?: string
}

export default function SectionHeader({ textarea, buttonLabel = '' }: Props) {
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
  const { job } = prismicOptions.data

  return (
    <Flex
      as="section"
      id="top"
      sx={{
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container size="blog">
        <Fade>
          <Row sx={{ pt: 4 }}>
            <Col sx={{ width: ['full', 'full', 'full', 'full'] }}>
              <Styled.h1 sx={{ my: 4 }}>{job}</Styled.h1>

              <div style={{ maxWidth: '650px' }}>
                <Html html={textarea} style={{ fontSize: [2, 3] }} />
              </div>

              <Flex sx={{ py: 3 }}>
                <Link to="/contact">
                  <Button>{buttonLabel}</Button>
                </Link>
                <div sx={{ px: 3 }}>
                  <SocialIcons />
                </div>
              </Flex>
            </Col>
          </Row>
        </Fade>
      </Container>
    </Flex>
  )
}
