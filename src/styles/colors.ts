const dracula = {
  background: '#282a36',
  currentLine: '#44475a',
  selection: '#44475a',
  foreground: '#f8f8f2',
  comment: '#6272a4',
  cyan: '#8be9fd',
  green: '#50fa7b',
  orange: '#ffb86c',
  pink: '#ff79c6',
  purple: '#bd93f9',
  red: '#ff5555',
  yellow: '#f1fa8c'
}

const palette = {
  black: `#000000`,
  // white: `#ffffff`,
  // cyan: `rgb(91, 192, 190)`,
  blue: `rgb(28, 37, 65)`,
  darkBlue: `rgb(11, 19, 43)`,
  pink: `rgb(225, 69, 148)`
}

const colors = {
  black: palette.black,
  white: dracula.foreground,
  grey: {
    light: `rgba(255, 255, 255, 0.8)`,
    medium: `rgba(255, 255, 255, 0.5)`,
    dark: `rgba(255, 255, 255, 0.2)`
  },

  blue: palette.blue,

  text: `rgba(255, 255, 255, 0.9)`,
  heading: palette.white,
  bg: palette.darkBlue,
  primary: dracula.cyan,
  secondary: dracula.pink,

  dracula,

  modes: {
    light: {
      // Light theme must be here
    }
  }
}

export default colors
