/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { FC } from 'react'

import AppleButtons from '../AppleButtons'
import Link from '../Link'
import { colors } from './MockupColors'

type TrimUrlFunc = (url: string) => string
const trimUrl: TrimUrlFunc = url => (url !== '' ? url.split('//')[1] : '')

export interface MockupNavbarProps {
  theme: 'light' | 'dark'
  url?: string
}

const MockupNavbar: FC<MockupNavbarProps> = ({ theme, url = '' }) => (
  <Flex
    sx={{
      backgroundImage: colors[theme].nav,
      height: '30px',
      p: '11px 10px',
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.15)',
      width: '100%'
    }}
  >
    <AppleButtons />

    {url && url !== '' && (
      <Link
        to={url}
        target="_blank"
        sx={{
          fontFamily: 'body',
          lineHeight: '1',
          fontSize: '10px',
          fontWeight: '400',
          '&:hover': {
            opacity: '0.8'
          }
        }}
      >
        <span sx={{ color: colors[theme].light }}>https://</span>
        <span sx={{ color: colors[theme].font }}>{trimUrl(url)}</span>
      </Link>
    )}
  </Flex>
)

export default MockupNavbar
