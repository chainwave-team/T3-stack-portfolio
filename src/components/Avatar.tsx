/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { PrismicImage } from '../types/prismicField'

export interface AvatarQuery {
  prismicOptions: {
    data: {
      avatar?: PrismicImage
    }
  }
}

export interface AvatarProps extends GatsbyImageProps {
  size?: number
}

const Avatar: FC<AvatarProps> = ({ size = 48, ...props }) => {
  const { prismicOptions }: AvatarQuery = useStaticQuery(
    graphql`
      query {
        prismicOptions {
          ...PrismicOptionsAvatar
        }
      }
    `
  )
  const fixed = prismicOptions?.data?.avatar?.localFile?.childImageSharp?.fixed

  if (!fixed) {
    return null
  }

  return (
    <Img
      fixed={fixed}
      style={{ width: `${size}px`, height: `${size}px` }}
      sx={{ borderRadius: '100%', boxShadow: 2 }}
      {...props}
    />
  )
}

export default Avatar

export const PrismicOptionsAvatar = graphql`
  fragment PrismicOptionsAvatar on PrismicOptions {
    data {
      avatar {
        localFile {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
