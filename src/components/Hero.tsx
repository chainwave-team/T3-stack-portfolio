/** @jsx jsx */
import { jsx, Styled, Box, Flex } from 'theme-ui'
import { FC } from 'react'

import Container from './Container'
import Avatar from './Avatar'

export interface HeroProps {
  title: string
  date: string
}

const Hero: FC<HeroProps> = ({ title, date }) => {
  return (
    <Container
      size="blog"
      sx={{
        pt: [6, 6, 7],
        pb: [4, 5],
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box>
        <Styled.h1 as="h1" sx={{ mb: 3 }}>
          {title}
        </Styled.h1>

        <Flex sx={{ alignItems: 'center' }}>
          <Avatar />
          <Styled.p sx={{ pl: 3, color: 'grey.light' }}>
            <b>Julien Caron</b>
            {`, publié le ${date}`}
          </Styled.p>
        </Flex>
      </Box>
    </Container>
  )
}

export default Hero
