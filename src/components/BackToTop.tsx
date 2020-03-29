/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC, useState } from 'react'
import { Link } from 'react-scroll'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { transitions } from 'polished'

import { ArrowTop } from './Icons'

const style = {
  button: {
    position: 'fixed',
    bottom: 32,
    right: 32,
    borderRadius: '50%',
    backgroundColor: 'primary',
    ...transitions(['background-color', 'opacity'], '200ms ease'),
    boxShadow: 2,
    p: 1,
    display: 'flex',

    '&:hover': {
      backgroundColor: 'secondary'
    },

    '& svg': {
      m: 'auto',
      fill: 'black'
    }
  }
}

const BackToTop: FC<{}> = () => {
  const [isVisible, setVisible] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      const shouldBeVisible = currPos.y > 500
      if (isVisible !== shouldBeVisible) {
        setVisible(shouldBeVisible)
      }
    },
    undefined,
    undefined,
    true,
    200
  )

  return (
    <Link
      to="___gatsby"
      smooth
      sx={style.button}
      style={{ opacity: Number(isVisible) }}
    >
      <ArrowTop size={32} />
    </Link>
  )
}

export default BackToTop
