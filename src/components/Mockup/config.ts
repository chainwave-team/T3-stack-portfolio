/* eslint-disable import/prefer-default-export */
export type colorType = {
  bg: string
  nav: string
  font: string
  light: string
}

export type colorsType = {
  dark: colorType
  light: colorType
}

export const colors: colorsType = {
  dark: {
    bg: '#252525',
    nav: 'linear-gradient(180deg, #1a1a1a 0%, #151515 100%)',
    font: '#ffffff',
    light: '#afafaf'
  },
  light: {
    bg: '#f4f6f9',
    nav: 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
    font: '#363636',
    light: '#858585'
  }
}

export const screen = {
  width: '720px'
}
