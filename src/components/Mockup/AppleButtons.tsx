/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import uuid from 'uuid'

const colors = ['#fc605c', '#fdbc40', '#34c749']

export default function AppleButtons() {
  return (
    <Flex sx={{ mr: 3 }}>
      {colors.map((color, index: number) => (
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
}
