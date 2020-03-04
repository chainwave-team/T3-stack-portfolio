/** @jsx jsx */
import { jsx, Styled, Box, Flex } from 'theme-ui'
import { FC } from 'react'

import Container from '../../components/Container'
import Avatar from '../../components/Avatar'
import SocialShareLinks from '../../components/SocialShareLinks'

export interface PostHeroProps {
  title: string
  date: string
  path: string
  readTime?: number
}

const PostHero: FC<PostHeroProps> = ({ title, date, path, readTime }) => (
  <Container
    size="blog"
    sx={{
      mt: 80, // +/- navbarHeight
      py: 5
    }}
  >
    <Box sx={{ maxWidth: 560, mx: 'auto' }}>
      <Styled.h2 as="h1" sx={{ my: 4 }}>
        {title}
      </Styled.h2>

      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}
      >
        <Flex sx={{ alignItems: 'center', mb: 2 }}>
          <Avatar />
          <Box sx={{ pl: 3 }}>
            <Styled.p sx={{ my: 0, fontWeight: 'bold' }}>Julien Caron</Styled.p>
            <Styled.p sx={{ my: 0, fontSize: 0, color: 'muted' }}>
              {`Publié le ${date}`}
              {!!readTime && ` - ${readTime} minutes de lecture`}
            </Styled.p>
          </Box>
        </Flex>

        <SocialShareLinks currentUrl={path} />
      </Flex>
    </Box>
  </Container>
)

export default PostHero
