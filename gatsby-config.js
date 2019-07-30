const WP_URL = 'wp-headless.fr'
const PROTOCOL = 'https'

module.exports = {
  siteMetadata: {
    title: `Julien CARON`,
    description: `Julien CARON, Développeur Web`,
    author: `@unscuzzy`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `${WP_URL}`,
        protocol: `${PROTOCOL}`,
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        cookies: {},
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: `${PROTOCOL}://${WP_URL}(?!(/wp-content))`,
          replacementUrl: ''
        },
        includedRoutes: [
          '**/media',
          '**/project_type',
          '**/tags',
          '**/wp/v2/projets',
          '**/options',
          '**/acf/v3/options'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    `gatsby-plugin-netlify-headers`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
