/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import uuid from 'uuid'
import { FC } from 'react'

const colors = ['#fc605c', '#fdbc40', '#34c749']

const AppleButtons: FC = () => (
  <Flex sx={{ mr: 3 }}>
    {colors.map((color, index) => (
      <div
        key={uuid()}
        sx={{
          bg: color,
          height: '8px',
          width: '8px',
          mx: index === 1 ? `5px` : `0`,
          borderRadius: '6px'
        }}
      />
    ))}
  </Flex>
)

export default AppleButtons
