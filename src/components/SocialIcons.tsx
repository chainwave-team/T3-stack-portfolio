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
  const { github_url, linkedin_url, malt_url } = prismicOptions.data
  const iconSize = 24
  const linkStyle = {
    height: `${iconSize}px`,
    px: 2
  }

  return (
    <div
      sx={{
        color: 'white',
        display: 'flex',
        height: '100%',
        alignItems: 'center'
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {linkedin_url && (
        <Link
          to={linkedin_url.url}
          target={linkedin_url.target}
          title="Linkedin"
          sx={linkStyle}
        >
          <FaLinkedin size={iconSize} />
        </Link>
      )}

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {github_url && (
        <Link
          to={github_url.url}
          target={github_url.target}
          title="Github"
          sx={linkStyle}
        >
          <FaGithub size={iconSize} />
        </Link>
      )}

      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {malt_url && (
        <Link
          to={malt_url.url}
          target={malt_url.target}
          title="Malt"
          sx={linkStyle}
        >
          <div
            sx={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              '& > svg': { width: '100%' },
              '& path': {
                fill: 'primary',
                transition: 'fill 200ms'
              },
              '&:hover path': { fill: 'secondary' }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 92">
              <g>
                <path d="M34.561 78.975c0 7.844 5.104 12.282 11.45 12.306.016 0-.016 0 0 0 6.324.002 11.54-5.976 11.566-12.306L46.003 67.257 34.561 78.975z" />
                <path d="M30.494 12.753a11.432 11.432 0 0 0-8.062-3.546c-3.094-.058-5.99 1.068-8.21 3.192-4.584 4.39-4.742 11.688-.354 16.272l1.718 1.794 24.332.104 3.916-3.882-13.34-13.934zM78.353 62.739l-1.718-1.794-24.332-.104-3.916 3.882 13.34 13.934c4.388 4.58 11.69 4.74 16.272.354 4.582-4.39 4.742-11.688.354-16.272" />
                <path d="M79.246 34.335L55.92 57.255l24.742.106h.05c3.056 0 5.932-1.182 8.104-3.334A11.448 11.448 0 0 0 92.22 45.9c.026-6.344-4.974-11.728-12.974-11.566M11.558 34.05h-.054a11.425 11.425 0 0 0-8.098 3.334A11.439 11.439 0 0 0 0 45.508c-.014 3.074.578 11.556 13.16 11.556L36.3 34.156l-24.742-.106z" />
                <path d="M78.854 13.239c-4.468-4.506-11.768-4.54-16.274-.068L13.436 61.893c-4.506 4.47-4.538 11.77-.07 16.276 4.468 4.508 11.77 4.542 16.276.07l49.142-48.722c4.508-4.47 4.538-11.772.07-16.278" />
                <path d="M58.578 12.305c0-7.844-5.104-12.28-11.45-12.304-.016 0 .016 0 0 0C40.804 0 35.588 5.975 35.562 12.305l11.574 11.718 11.442-11.718z" />
              </g>
            </svg>
          </div>
        </Link>
      )}
    </div>
  )
}
