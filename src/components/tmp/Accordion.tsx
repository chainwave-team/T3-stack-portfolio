import { useState, ReactElement } from 'react'
import { ToggleAttr } from './AccordionItem'

interface Child extends Partial<ReactElement> {
  props: {
    height?: number
    open?: boolean
    toggle?: (arg0: ToggleAttr) => void
    index?: number
  }
}

interface Props {
  children: Partial<Child>[]
}

export default function Accordion({ children }: Props) {
  const initialsList: Child[] = []
  children
    .filter((el: Child | any) => el)
    .forEach((el: Partial<Child>) => {
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

  const [sections, updateSections] = useState(initialsList)

  function toggleClick({ index, height: h }: ToggleAttr) {
    const match = (i: number) => i === index
    updateSections((state: Child[]) =>
      state.map(el => ({
        ...el,
        props: {
          ...el.props,
          height: match(el?.props?.index || 0) ? h : 0,
          open: match(el?.props?.index || 0) && !el.props.open
        }
      }))
    )
  }

  return sections
}
