import { useState, useEffect, useRef } from 'react'

export default function useHover() {
  const [value, setValue] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement | HTMLAnchorElement>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(
    // eslint-disable-next-line consistent-return
    () => {
      const node = ref?.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current] // Recall only if ref changes
  )

  return [ref, value]
}
