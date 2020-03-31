/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby'

/**
 * Fragments are globals
 * Just name and export import PropTypes from 'prop-types'
 * So, make sure the names are uniques
 *
 * @link https://medium.com/flatiron-labs/using-graphql-fragments-across-multiple-templates-in-gatsbyjs-7731a2d28bbd
 */

export const siteMetaData = graphql`
  fragment siteMetaData on Site {
    siteMetadata {
      title
      description
      author
      siteUrl
      image
    }
  }
`
