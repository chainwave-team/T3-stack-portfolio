/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Container from './Container'

type Props = {
  title: string
  meta?: string
}

const Hero = ({ title, meta }: Props) => (
  <Container section>
    <Styled.h2 as="h1">{title}</Styled.h2>
    {meta ? <Styled.p sx={{ textAlign: 'right' }}>{meta}</Styled.p> : null}
  </Container>
)

export default Hero
