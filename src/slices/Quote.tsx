/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Html from '../components/Html'
import Container from '../components/Container'
import { PrismicLink } from '../types'
import Link from '../components/Link'

export type QuoteSliceProps = {
  slice: {
    primary: {
      quote: {
        html: string
      }
      source_name?: string
      source_link?: PrismicLink
    }
  }
}

type SourceProps = {
  source_name?: string
  source_link?: PrismicLink
}

function Source({ source_name, source_link }: SourceProps) {
  if (!source_name) {
    return null
  }
  const source = `-- ${source_name}`
  return (
    <Styled.p sx={{ textAlign: 'right' }}>
      {source_link ? (
        <Link to={source_link.url} target={source_link.target || ''}>
          {source}
        </Link>
      ) : (
        source
      )}
    </Styled.p>
  )
}

export default function Quote({ slice }: QuoteSliceProps) {
  const { quote, ...source } = slice.primary
  return (
    <Container sx={{ maxWidth: ['full', 'blog'], width: ['full', '100%'] }}>
      <div
        sx={{
          bg: 'blue',
          my: 5,
          py: 3,
          mx: [0, 0, 0, -4],
          px: 4
        }}
      >
        <Html html={quote.html} />
        <Source {...source} />
      </div>
    </Container>
  )
}
