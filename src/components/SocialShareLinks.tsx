/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC, CSSProperties } from 'react'

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share'

export interface IconComponentProps {
  size?: number
  round?: boolean
  borderRadius?: number
  bgStyle?: CSSProperties
  iconFillColor?: CSSProperties['fill']
}

export interface SocialShareLinksProps {
  currentUrl: string
  iconProps?: IconComponentProps
  hasColors?: boolean
}

const SocialShareLinks: FC<SocialShareLinksProps> = ({
  currentUrl,
  iconProps: iconBaseProps,
  hasColors
}) => {
  const defaultIconProps: IconComponentProps = {
    size: 32
  }

  if (!hasColors) {
    defaultIconProps.bgStyle = { fill: 'transparent' }
  }

  const buttonProps = {
    url: currentUrl,
    sx: {
      display: 'inline-flex'
    }
  }

  const iconProps = { ...defaultIconProps, ...iconBaseProps }
  return (
    <div
      title="Partager"
      sx={{
        alignItems: 'center',
        height: `${iconProps.size}px`
      }}
    >
      <FacebookShareButton {...buttonProps}>
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
      <TwitterShareButton {...buttonProps}>
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <LinkedinShareButton {...buttonProps}>
        <LinkedinIcon {...iconProps} />
      </LinkedinShareButton>
      <EmailShareButton {...buttonProps}>
        <EmailIcon {...iconProps} />
      </EmailShareButton>
    </div>
  )
}

export default SocialShareLinks
