/**
 * NOTE: Actually, this file is not used,
 * but is "blank" executed in the gatsby-config.js file.
 *
 * It is a helper template if needed
 *
 * Prismic HTML Serializer
 * @link: https://prismic.io/docs/reactjs/beyond-the-api/html-serializer
 */

const htmlSerializer = (type /* , element, content, children, key */) => {
  switch (type) {
    // case Elements.preformatted: {
    //   const props = { render: children }

    //   return React.createElement(HTML, props)
    // }

    // Example
    // case Elements.heading2: {
    //   return `<h2 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
    //     element.text
    //     } permalink" class="anchor">#</a>${element.text}</h2>`
    // }

    default: {
      return null
    }
  }
}

module.exports = htmlSerializer
