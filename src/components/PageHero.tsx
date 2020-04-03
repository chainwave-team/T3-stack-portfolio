/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { FC } from 'react'

export interface PageHeroProps {
  title?: string
  subTitle?: string
}

const PageHero: FC<PageHeroProps> = ({ title = '', subTitle = '' }) => {
  return (
    <Container variant="blog" sx={{ pt: 6, pb: 4, mt: `80px` }}>
      {!!title && <Styled.h1 sx={{ my: 3 }}>{title}</Styled.h1>}
      {!!subTitle && (
        <Styled.h3 sx={{ color: 'muted', my: 3 }}>{subTitle}</Styled.h3>
      )}
    </Container>
  )
}

export default PageHero
