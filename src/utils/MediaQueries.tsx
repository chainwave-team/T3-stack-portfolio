import React, { ReactNode, FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import { breakpoints } from '../styles/theme'

// Remove the "px"
const [xs, sm, md /* , lg */]: number[] = breakpoints.map((bp: string) =>
  parseInt(bp, 10)
)

export interface MediaQueryProps {
  children: ReactNode
}

export const Desktop: FC<MediaQueryProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: md })
  return isDesktop ? <>{children}</> : null
}

export const Tablet: FC<MediaQueryProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: sm, maxWidth: md - 1 })
  return isTablet ? <>{children}</> : null
}

export const Phablet: FC<MediaQueryProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: xs, maxWidth: sm - 1 })
  return isTablet ? <>{children}</> : null
}

export const Mobile: FC<MediaQueryProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: xs - 1 })
  return isMobile ? <>{children}</> : null
}

export const NotMobile: FC<MediaQueryProps> = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: xs })
  return isNotMobile ? <>{children}</> : null
}
