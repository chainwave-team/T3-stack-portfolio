/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { FC } from 'react'

export interface BlogHeroProps {
  title?: string
  subTitle?: string
}

const BlogHero: FC<BlogHeroProps> = ({
  title = 'Blog',
  subTitle = 'Découvrez les derniers articles'
}) => {
  return (
    <Container variant="blog" sx={{ pt: 6, pb: 4, mt: `80px` }}>
      <Styled.h1 sx={{ my: 3 }}>{title}</Styled.h1>
      {!!subTitle && (
        <Styled.h3 sx={{ color: 'muted', my: 3 }}>{subTitle}</Styled.h3>
      )}
    </Container>
  )
}

export default BlogHero
