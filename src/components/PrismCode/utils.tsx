/** @jsx jsx */
import { FC } from 'react'
import { jsx, Button } from 'theme-ui'

/* eslint-disable import/prefer-default-export */
export type ProgrammingLang =
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

export const cssByLang = (lang: ProgrammingLang) => {
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

export const getPrettyName = (lang: ProgrammingLang) => {
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

interface ButtonCopyProps {
  isHover: boolean
  value?: string
  onClick: () => void
}

export const ButtonCopy: FC<ButtonCopyProps> = ({
  isHover,
  value,
  onClick
}) => (
  <Button
    onClick={onClick}
    sx={{
      border: 'none',
      opacity: isHover ? 1 : 0,
      transition: 'opacity 200ms',
      fontSize: 0,
      zIndex: 25,
      ':hover': {
        opacity: 1
      }
    }}
  >
    {value ? <span>Copié!</span> : <span>Copier</span>}
  </Button>
)
