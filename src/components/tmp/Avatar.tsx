/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import Img, { FixedObject, GatsbyImageProps } from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { PrismicImage } from '../../utils/types'

interface AvatarProps extends GatsbyImageProps {
  size?: number
}

export interface HeroQuery {
  prismicOptions: {
    data: {
      avatar?: PrismicImage
    }
  }
}

const Avatar: FC<GatsbyImageProps> = props => {
  const { prismicOptions }: HeroQuery = useStaticQuery(
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
      fixed={fixed as FixedObject}
      {...props}
      sx={{ borderRadius: '50%', boxShadow: 2 }}
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
            fixed(width: 25, height: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
