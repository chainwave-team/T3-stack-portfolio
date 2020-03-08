import { css } from '@emotion/core'

import { dracula } from '../gatsby-plugin-theme-ui/colors'

export default css`
  /**
   * Dracula Theme originally by Zeno Rocha [@zenorocha]
   * https://draculatheme.com/
   *
   * Ported for PrismJS by Albert Vallverdu [@byverdu]
   * Adapted for theme-ui/prismic.js by Julien Caron [@junscuzzy]
   */

  pre.line-numbers,
  code.line-numbers {
    .line-numbers-rows {
      border-color: ${dracula.comment} !important;
      & > span:before {
        color: ${dracula.comment} !important;
      }
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: ${dracula.foreground};
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    text-align: left;
    line-height: 1.5;
    hyphens: none;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${dracula.comment};
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${dracula.pink};
  }

  .token.boolean,
  .token.number {
    color: ${dracula.purple};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${dracula.green};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable,
  .token.punctuation {
    color: ${dracula.foreground};
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: ${dracula.yellow};
  }

  .token.keyword {
    color: ${dracula.cyan};
  }

  .token.regex,
  .token.important {
    color: ${dracula.orange};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`
