import React, { useState, ReactNode, ReactElement } from 'react'
import { ToggleAttr } from './AccordionItem'

interface Child extends Partial<ReactElement> {
  props: {
    height?: number
    open?: boolean
    toggle?: (h: number) => void
    index?: number
  }
}

interface Props {
  children: Partial<Child>[] | any
}

export default function Accordion({ children }: Props) {
  const initialsList: Child[] = []
  children
    .filter((el: any) => el)
    .forEach((el: any, i: number) => {
      initialsList.push({
        ...el,
        props: {
          ...el.props,
          height: 0,
          open: false,
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          toggle: toggleClick
        }
      })
    })

  const [sections, toggle] = useState(initialsList)

  function toggleClick({ index, height: h }: ToggleAttr) {
    const match = (i: number) => i === index
    toggle((state: Child[]) =>
      state.map(el => ({
        ...el,
        props: {
          ...el.props,
          height: match(el?.props?.index || -1) ? h : 0,
          open: match(el?.props?.index || -1) && !el.props.open
        }
      }))
    )
  }

  return sections
}
