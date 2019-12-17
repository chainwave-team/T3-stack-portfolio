const { RichText } = require('prismic-dom')

// We don't want to import every PrismJS component - so that's why they're required individually
const Prism = require('prismjs')

require('prismjs/components/prism-markup-templating') // Must be first
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-yaml')
require('prismjs/components/prism-json')
require('prismjs/components/prism-css')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-graphql')
require('prismjs/components/prism-sql')
require('prismjs/components/prism-php')

const { Elements } = RichText
const codeBlock = [
  'javascript',
  'jsx',
  'typescript',
  'tsx',
  'bash',
  'yaml',
  'json',
  'css',
  'scss',
  'markdown',
  'graphql',
  'sql',
  'php'
]
// console.log({ Elements })

const htmlSerializer = (type, element, content, ...rest) => {
  switch (type) {
    case Elements.preformatted: {
      const language = codeBlock.includes(element.label)
        ? element.label
        : 'markup'
      const plugins = 'line-numbers copy-to-clipboard'
      const classes = `language-${language} ${plugins}`

      return `<pre class="${classes}"><code class="${classes}">${Prism.highlight(
        element.text,
        Prism.languages[language]
      )}</code></pre>`
    }
    // case Elements.em: {
    //   console.log({ type, element, content, rest })
    //   return `<code class="inline-code">${content}</code>`
    // }

    // case Elements.heading2: {
    //   return `<h2 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
    //     element.text
    //     } permalink" class="anchor">#</a>${element.text}</h2>`
    // }
    // case Elements.heading3: {
    //   return `<h3 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
    //     element.text
    //     } permalink" class="anchor">#</a>${element.text}</h3>`
    // }
    // case Elements.heading4: {
    //   return `<h4 id="${_.kebabCase(element.text)}"><a href="#${_.kebabCase(element.text)}" aria-label="${
    //     element.text
    //     } permalink" class="anchor">#</a>${element.text}</h4>`
    // }
    default: {
      return null
    }
  }
}

module.exports = htmlSerializer
