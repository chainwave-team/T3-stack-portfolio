/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import AppleButtons from './AppleButtons'
import Link from '../Link'
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
        p: '11px 10px',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.15)',
        width: screenWidth
      }}
    >
      <AppleButtons />

      {url && url !== '' && (
        <Link
          to={url}
          target="_blank"
          sx={{
            fontFamily: 'apple',
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
}
