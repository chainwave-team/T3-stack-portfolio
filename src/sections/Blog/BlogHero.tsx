/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { FC } from 'react'

import Container from '../../components/Container'

export interface BlogHeroProps {
  title?: string
  subTitle?: string
}

const BlogHero: FC<BlogHeroProps> = ({
  title = 'Blog',
  subTitle = 'Découvrez mes derniers articles'
}) => {
  return (
    <Container size="blog" sx={{ pt: 6, pb: 4, mt: `80px` }}>
      <Styled.h1 sx={{ my: 3 }}>{title}</Styled.h1>
      {!!subTitle && (
        <Styled.h3 sx={{ color: 'muted', my: 3 }}>{subTitle}</Styled.h3>
      )}
    </Container>
  )
}

export default BlogHero
