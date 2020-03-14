/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import uuid from 'uuid'
import { FC } from 'react'

const colors = ['#fc605c', '#fdbc40', '#34c749']

export interface AppleButtonsProps {
  size?: number
}

const AppleButtons: FC<AppleButtonsProps> = ({ size = 8 }) => (
  <Flex sx={{ mr: 3 }}>
    {colors.map((color, index) => (
      <div
        key={uuid()}
        sx={{
          bg: color,
          height: `${size}px`,
          width: `${size}px`,
          mx: index === 1 ? `${0.7 * size}px` : `0`,
          borderRadius: `${size}px`
        }}
      />
    ))}
  </Flex>
)

export default AppleButtons
