import { css } from '@emotion/core'

export const toolbar = {
  mt: [2, 4],
  position: 'absolute',
  fontSize: 1,
  top: 0,
  right: 50,
  display: 'flex',
  justifyContent: 'flex-end',
  '& > *': {
    py: 1,
    px: 2,
    ml: [2, 3],
    fontSize: 1,
    userSelect: 'none',
    borderRadius: 2
  }
}

export const wrapper = {
  position: 'relative',
  boxShadow: 1,
  bg: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '0.5rem',
  my: 5,
  mx: [0, 0, 0, -4]
}

export const pre = {
  py: 5,
  px: [3, 3, 4],
  overflowX: 'auto',
  maxWidth: '100%'
}

export const dracula = css`
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
      border-color: #6272a4 !important; /* dracula comment */
      & > span:before {
        color: #6272a4 !important; /* dracula comment */
      }
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Fira Code', Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    color: #f8f8f2;
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

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6272a4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #50fa7b;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #f1fa8c;
  }

  .token.keyword {
    color: #8be9fd;
  }

  .token.regex,
  .token.important {
    color: #ffb86c;
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
