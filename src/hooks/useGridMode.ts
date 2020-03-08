import { useState, useEffect } from 'react'

/*
 * Grid Mode:
 * True => Grid (default)
 * False => List
 */

export default function useGridMode(defaultIsGrid = true) {
  const initialValue = localStorage.getItem('gridMode')
  const initialMode =
    typeof initialValue !== 'undefined'
      ? initialValue === 'grid'
      : defaultIsGrid

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
    if (localStorage.getItem('gridMode') !== mode) {
      localStorage.setItem('gridMode', mode)
    }
  }, [gridMode])

  return { gridMode, toggleMode, setGridMode, setLisMode, setMode }
}
