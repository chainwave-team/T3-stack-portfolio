/* eslint-disable import/no-unresolved */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import Link from './Link'

const iconSize = 24

const style = {
  hook: {
    color: 'white',
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  },
  link: {
    height: `${iconSize}px`,
    px: 2
  },
  iconWrap: {
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
          <div sx={style.iconWrap}>
            <svg
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </div>
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
          <div sx={style.iconWrap}>
            <svg
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </div>
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
          <div sx={style.iconWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 93 92"
            >
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
