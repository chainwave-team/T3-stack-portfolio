/*
By default, props.theme has an any type annotation and works without any errors. 
However, you can define a theme type by creating another styled instance.
*/

import styled, { CreateStyled } from '@emotion/styled'

import { themeType } from '../styles/themeType'

export default styled as CreateStyled<themeType>
