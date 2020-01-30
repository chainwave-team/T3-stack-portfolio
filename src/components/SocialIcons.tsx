/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import Link from './Link'
import { Linkedin, Github, Malt } from './Icons'

const iconSize = 24

const style = {
  root: {
    color: 'white',
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  },
  link: {
    px: 2,
    width: `${iconSize}px`,
    height: `${iconSize}px`,
    '& > svg': { width: '100%' },
    '& path': {
      fill: 'primary',
      transition: 'fill 200ms'
    },
    '&:hover path': { fill: 'secondary' }
  }
}

export default function SocialIcons() {
  const { prismicOptions } = useStaticQuery(
    graphql`
      query SocialIcons {
        prismicOptions(lang: { eq: "fr-fr" }) {
          data {
            email
            malt_url {
              link_type
              url
              target
            }
            linkedin_url {
              link_type
              url
              target
            }
            github_url {
              link_type
              url
              target
            }
          }
        }
      }
    `
  )
  const { github_url, linkedin_url, malt_url } = prismicOptions.data

  return (
    <div sx={style.root}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {linkedin_url && (
        <Link
          to={linkedin_url.url}
          target={linkedin_url.target}
          title="Linkedin"
          sx={style.link}
        >
          <Linkedin size={iconSize} />
        </Link>
      )}

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {github_url && (
        <Link
          to={github_url.url}
          target={github_url.target}
          title="Github"
          sx={style.link}
        >
          <Github size={iconSize} />
        </Link>
      )}

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {malt_url && (
        <Link
          to={malt_url.url}
          target={malt_url.target}
          title="Malt"
          sx={style.link}
        >
          <Malt size={iconSize} />
        </Link>
      )}
    </div>
  )
}
