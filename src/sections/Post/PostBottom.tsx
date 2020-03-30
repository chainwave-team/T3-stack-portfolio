/** @jsx jsx */
import { jsx, Styled, Flex, Container } from 'theme-ui'
import { FC } from 'react'

import SocialShareLinks from '../../components/SocialShareLinks'
import AuthorAvatar from '../../components/AuthorAvatar'

export interface PostBottomProps {
  authorName: string
  authorDesc: string
}

const PostBottom: FC<PostBottomProps> = ({ authorName, authorDesc }) => (
  <Container variant="blog" sx={{ my: 5 }}>
    <hr />
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        my: 3
      }}
    >
      <Styled.h6 sx={{ m: 'auto 0' }}>Écrit par :</Styled.h6>
      <SocialShareLinks />
    </Flex>

    <AuthorAvatar avatarSize={80} primary={authorName} secondary={authorDesc} />
  </Container>
)

export default PostBottom
