/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import mediumZoom from 'medium-zoom'
import React from 'react'

interface ImageZoomProps {
  src: string
  alt?: string
}

function ImageZoom({ src, alt = '' }: ImageZoomProps) {
  const { theme } = useThemeUI()

  const zoomRef = React.useRef(
    mediumZoom({
      background: theme.colors?.background
    })
  )

  function attachZoom(image: any) {
    zoomRef.current.attach(image)
  }

  return (
    <img style={{ maxWidth: '100%' }} src={src} alt={alt} ref={attachZoom} />
  )
}

export default ImageZoom
