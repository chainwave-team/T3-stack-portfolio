/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Container from './Container'

type Props = {
  title: string
  meta?: string
}

const Hero = ({ title, meta }: Props) => (
  <Container sx={{ maxWidth: 'blog', mt: 6, mb: 5, py: 4 }}>
    <Styled.h1 as="h1">{title}</Styled.h1>
    {meta ? (
      <Styled.p sx={{ textAlign: 'right', color: 'dracula.comment' }}>
        {meta}
      </Styled.p>
    ) : null}
  </Container>
)

export default Hero
