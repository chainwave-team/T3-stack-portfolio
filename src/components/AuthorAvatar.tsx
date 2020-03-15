/** @jsx jsx */
import { jsx, Styled, Box, Flex } from 'theme-ui'
import { FC } from 'react'

import Avatar from './Avatar'

const sx = {
  root: { alignItems: 'center', mb: 2 },
  primary: {
    my: 0,
    fontWeight: 'bold',
    textDecoration: 'underline'
  },
  secondary: { my: 0, fontSize: 0, color: 'muted' }
}

export interface AuthorAvatarProps {
  avatarSize?: number
  before?: string
  primary: string
  secondary?: string
}

const AuthorAvatar: FC<AuthorAvatarProps> = ({
  before,
  primary,
  secondary,
  avatarSize = 48
}) => (
  <Flex sx={sx.root}>
    <span>
      <Avatar size={avatarSize} />
    </span>

    <Box sx={{ pl: 3 }}>
      {!!before && <Styled.p sx={sx.secondary}>{before}</Styled.p>}

      <Styled.p sx={sx.primary}>{primary}</Styled.p>

      {!!secondary && <Styled.p sx={sx.secondary}>{secondary}</Styled.p>}
    </Box>
  </Flex>
)

export default AuthorAvatar
