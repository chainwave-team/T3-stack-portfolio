require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const moment = require('moment')
const { postsQuery, dateFormat } = require('./src/gatsby/query')

const siteUrl = `https://juliencaron.eu`
const author = 'Julien CARON'

// type getDateFn = (node: { first_publication_date: string }) => string
const getDate = node => {
  return moment(node.first_publication_date, dateFormat).toString()
}

const getMediaType = type => {
  switch (type) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg'
    case 'gif':
      return 'image/gif'
    case 'png':
      return 'image/png'
    default:
      return 'image/*'
  }
}

module.exports = {
  siteMetadata: {
    title: author,
    description: `${author}, Développeur Web`,
    siteUrl,
    author: `@unscuzzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    // 'gatsby-plugin-webpack-bundle-analyzer',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 85
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: `{${postsQuery}}`,
            output: '/rss.xml',
            title: `RSS Feed - ${author}`,
            description: `${siteUrl}`,
            serialize: ({ query: { posts } }) =>
              posts.edges.map(({ node }) => ({
                title: `${node.data.title.text}`,
                description: node.data.meta_description || '',
                author,
                date: getDate(node),
                url: `${siteUrl}/${node.uid}`,
                guid: `${siteUrl}/${node.uid}`,
                enclosure: {
                  url: `${node.data.thumbnail.localFile.url || ''}`,
                  type: getMediaType(node.data.thumbnail.localFile.extension),
                  size: node.data.thumbnail.localFile.size
                }
              }))
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `junscuzzy-portfolio`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
        // htmlSerializer: () => prismicHtmlSerializer,
        lang: 'fr-fr'
      }
    },

    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio - Julien CARON`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `rgb(11,19,43)`,
        theme_color: `rgb(91, 192, 190)`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-132477935-2',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade'
            // 'cache-control: public,max-age=31536000,immutable'
          ]
          // '*.html': ['cache-control: public, max-age=0, must-revalidate'],
          // '*.json': ['cache-control: public, max-age=0, must-revalidate'],
          // '*.md': ['cache-control: public, max-age=0, must-revalidate']
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        // allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
