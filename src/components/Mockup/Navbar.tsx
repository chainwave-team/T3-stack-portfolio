/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Text } from 'rebass'

import AppleButtons from './AppleButtons'
import styled from '../../utils/styled'
import Link from '../ui/Link'
import { colors } from './config'

type Props = {
  theme: 'light' | 'dark'
  url?: string
  screenWidth: string
}

const trimUrl = (url: string) => (url !== '' ? url.split('//')[1] : '')

export default function Navbar({ theme, url = '', screenWidth }: Props) {
  return (
    <Flex
      sx={{
        backgroundImage: colors[theme].nav,
        height: '30px',
        padding: '11px 10px',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.15)',
        width: screenWidth
      }}
    >
      <Flex mr={3}>
        <AppleButtons />
      </Flex>
      {url && url !== '' && (
        <Links to={url} target="_blank">
          <LinkSpan as="span" color={colors[theme].light}>
            https://
          </LinkSpan>
          <LinkSpan as="span" color={colors[theme].font}>
            {trimUrl(url)}
          </LinkSpan>
        </Links>
      )}
    </Flex>
  )
}

const Links = styled(Link)`
  display: flex;
  &:hover {
    opacity: 0.8;
  }
`
const LinkSpan = styled(Text)`
  margin: 0;
  font-family: ${props => props.theme.fonts.apple};
  line-height: 1;
  font-size: 10px;
  font-weight: 400;
`
