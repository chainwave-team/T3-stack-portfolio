type colorsType = {
  black: string
  white: string
  grey: {
    light: string
    medium: string
    dark: string
  }
  cyan: string
  blue: string
  darkBlue: string
  pink: string

  bg: string
  text: string
  heading: string
  primary: string
  secondary: string
}

export type themeType = {
  space: Array<number>
  fonts: {
    body: string
    heading: string
    apple: string
    code: string
  }
  fontSizes: Array<string>
  fontWeights: {
    thin: string
    normal: string
    bold: string
    body: string
    heading: string
  }
  lineHeights: {
    body: number
    heading: number
  }

  colors: colorsType & {
    modes: {
      light: Partial<colorsType>
    }
  }

  radii: Array<string | number>
  shadows: Array<string | null>
  transitions: Array<number>
  breakpoints: Array<number | string>
  sizes: object & {
    container: number
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
  buttons: any
}
