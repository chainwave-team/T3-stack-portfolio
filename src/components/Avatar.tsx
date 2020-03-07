/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { PrismicImage } from '../types'

export interface AvatarQuery {
  prismicOptions: {
    data: {
      avatar?: PrismicImage
    }
  }
}

const Avatar: FC<GatsbyImageProps> = props => {
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
    <Img fixed={fixed} {...props} sx={{ borderRadius: '50%', boxShadow: 2 }} />
  )
}

export default Avatar

export const PrismicOptionsAvatar = graphql`
  fragment PrismicOptionsAvatar on PrismicOptions {
    data {
      avatar {
        localFile {
          childImageSharp {
            fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
