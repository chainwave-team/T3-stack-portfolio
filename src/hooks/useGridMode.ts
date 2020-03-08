import { useState, useEffect } from 'react'

/*
 * Grid Mode:
 * True => Grid (default)
 * False => List
 */

export default function useGridMode(defaultIsGrid = true) {
  let initialMode = defaultIsGrid

  const isClient = typeof localStorage !== 'undefined'
  if (isClient) {
    const initialValue = localStorage.getItem('gridMode')
    if (initialValue) {
      initialMode = initialValue === 'grid'
    }
  }

  const [gridMode, setMode] = useState<boolean>(initialMode)

  const toggleMode = () => {
    setMode(!gridMode)
  }

  const setGridMode = () => {
    setMode(true)
  }

  const setLisMode = () => {
    setMode(false)
  }

  // Persist: save onChange
  useEffect(() => {
    const mode = gridMode ? 'grid' : 'list'
    if (isClient && localStorage.getItem('gridMode') !== mode) {
      localStorage.setItem('gridMode', mode)
    }
  }, [gridMode, isClient])

  return { gridMode, toggleMode, setGridMode, setLisMode, setMode }
}
