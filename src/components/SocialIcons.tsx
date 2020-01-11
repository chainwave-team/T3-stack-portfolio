/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import Link from './Link'

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
  const { github_url, linkedin_url } = prismicOptions.data
  const style = { p: 2 }
  const iconSize = 24

  return (
    <div
      sx={{
        color: 'white',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {linkedin_url && (
        <Link to={linkedin_url.url} target={linkedin_url.target} sx={style}>
          <FaLinkedin size={iconSize} />
        </Link>
      )}

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {github_url && (
        <Link to={github_url.url} target={github_url.target} sx={style}>
          <FaGithub size={iconSize} />
        </Link>
      )}
    </div>
  )
}
