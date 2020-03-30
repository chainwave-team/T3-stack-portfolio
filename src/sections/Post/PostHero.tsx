/** @jsx jsx */
import { jsx, Styled, Flex, Container } from 'theme-ui'
import { FC } from 'react'

import SocialShareLinks from '../../components/SocialShareLinks'
import AuthorAvatar from '../../components/AuthorAvatar'

export interface PostHeroProps {
  title: string
  date: string
  readTime?: number
}

const PostHero: FC<PostHeroProps> = ({ title, date, readTime }) => (
  <Container variant="blog" sx={{ mt: 80, py: 5 }}>
    <Styled.h1 as="h1" sx={{ my: 4 }}>
      {title}
    </Styled.h1>

    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}
    >
      <AuthorAvatar
        primary="Julien Caron"
        secondary={`Publié le ${date}${
          readTime ? ` - ${readTime} minutes de lecture` : ''
        }`}
      />

      <SocialShareLinks />
    </Flex>
  </Container>
)

export default PostHero
