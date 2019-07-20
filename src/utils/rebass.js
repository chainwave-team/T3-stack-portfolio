/**
 * Primives components based on Rebass
 */
import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  // lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  opacity,
  variant
} from 'styled-system'

import theme from './theme'

export const themed = key => props => props.theme[key]

export const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  position,
  themed('Box')
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
  ...position.propTypes
}

export const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
)

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

export const Container = styled(Box)(themed('Container'))

Container.defaultProps = {
  mx: 'auto',
  width: ['90%'],
  py: [5, 5, 6],
  // eslint-disable-next-line import/no-named-as-default-member
  maxWidth: theme.maxWidths.large
}

export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  // lineHeight,
  letterSpacing,
  themed('Text')
)

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...fontStyle.propTypes,
  ...textAlign.propTypes,
  // ...lineHeight.propTypes,
  ...letterSpacing.propTypes
}

Text.defaultProps = {
  as: 'p',
  fontFamily: 'text',
  fontSize: [2],
  fontWeight: 4,
  letterSpacing: '1px'
  // lineHeight: 1
}

export const Heading = styled(Text)(themed('Heading'))

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: [4, 5],
  // eslint-disable-next-line import/no-named-as-default-member
  fontFamily: theme.fonts.heading,
  fontWeight: 7,
  // eslint-disable-next-line import/no-named-as-default-member
  color: theme.colors.white
}

export const Link = styled(Text)(themed('Link'))

Link.defaultProps = { as: 'a' }

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    // lineHeight: 'inherit',
    textDecoration: 'none'
  },
  fontWeight,
  borders,
  borderColor,
  // borderRadius,
  buttonStyle,
  themed('Button')
)

Button.propTypes = {
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  // ...borderRadius.propTypes,
  ...buttonStyle.propTypes
}

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  border: '2px solid',
  variant: 'primary',
  bg: `transparent`
}

export const Image = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto'
  },
  height,
  borderRadius,
  themed('Image')
)

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes
}

Image.defaultProps = {
  as: 'img',
  m: 0
}

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards,
  themed('Card')
)

Card.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...cards.propTypes
}

Card.defaultProps = {
  width: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}
