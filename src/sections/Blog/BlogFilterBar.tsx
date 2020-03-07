/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { FC } from 'react'
import Container from '../../components/Container'
import { GridIcon, ListIcon } from '../../components/Icons'
import { hoverStyle } from '../../styles/theme'

const iconButtonStyle = {
  ...hoverStyle,
  px: 3,
  '& svg': {
    fill: 'text',
    transition: 'color 200ms ease'
  },

  '&:hover svg': {
    fill: 'secondary'
  }
}

export interface BlogFilterBarProps {
  onChangeMode: (mode: boolean) => void
}

const BlogFilterBar: FC<BlogFilterBarProps> = ({ onChangeMode }) => (
  <Container size="blog">
    <Flex sx={{ justifyContent: 'flex-end' }}>
      <Box sx={iconButtonStyle} onClick={() => onChangeMode(false)}>
        <GridIcon size={32} />
      </Box>
      <Box sx={iconButtonStyle} onClick={() => onChangeMode(true)}>
        <ListIcon size={32} />
      </Box>
    </Flex>
  </Container>
)

export default BlogFilterBar
