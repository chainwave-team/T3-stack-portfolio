/* eslint-disable import/prefer-default-export */
export type ProgrammingLangs =
  | 'javascript'
  | 'jsx'
  | 'typescript'
  | 'tsx'
  | 'bash'
  | 'yaml'
  | 'json'
  | 'css'
  | 'scss'
  | 'markdown'
  | 'graphql'
  | 'sql'
  | 'php'
  | 'markup'

export interface PrismCodeProps {
  code: {
    text: string
    html: string
    raw: Array<{
      label?: ProgrammingLangs
    }>
  }
}

export const cssByLang = (lang: ProgrammingLangs) => {
  const black = { color: 'black', textShadow: 'none' }
  const white = { color: 'white' }
  switch (lang) {
    case 'javascript':
      return { ...black, bg: '#f7df1e' }
    case 'jsx':
      return { ...black, bg: '#61DAFB' } // React blue
    case 'typescript':
    case 'tsx':
      return { ...white, bg: '#007ACC' } // TS Blue
    case 'css':
      return { ...black, bg: '#8be9fd' } // Dracula blue
    case 'scss':
    case 'graphql':
      return { ...black, bg: '#ff79c6' } // Dracula pink
    case 'json':
      return { ...black, bg: '#f1fa8c' } // Dracula yellow
    default:
      return { ...white, bg: '#6272a4' } // Dracula comment
  }
}

export const getPrettyName = (lang: ProgrammingLangs) => {
  switch (lang) {
    case 'typescript':
      return 'TS'
    case 'javascript':
      return 'JS'
    case 'graphql':
      return 'GraphQL'
    case 'jsx':
    case 'tsx':
    case 'php':
    case 'css':
    case 'sql':
      return lang.toUpperCase()
    default:
      return lang
  }
}
