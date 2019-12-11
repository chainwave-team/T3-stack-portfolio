/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
import uuid from 'uuid'
import { useBreakpointIndex } from '@theme-ui/match-media'

import Fade from '../../components/ui/Fade'
import Accordion from '../../components/ui/Accordion'
import Container from '../../components/ui/Container'

type Section = {
  key: number
  height: number
  open: boolean
}

type Service = {
  service_title: string
  service_textarea: {
    text: string
    html: string
  }
}

type Props = {
  title: string
  items: Array<Service>
}

export default function ServicesSection({ title, items }: Props) {
  const initialsState: Array<Section> = []
  items.forEach((_: any, i: number) => {
    initialsState.push({ key: i + 1, height: 0, open: false })
  })

  const [sections, toggle] = useState(initialsState)

  function toggleClick(index: number, h: number) {
    const isIt = (i: number) => i === index + 1
    toggle(state =>
      state.map(el => ({
        ...el,
        height: isIt(el.key) ? h : 0,
        open: isIt(el.key) && !el.open
      }))
    )
  }

  // media queries
  const index: number = useBreakpointIndex()
  const matches: boolean = index > 1

  return (
    <Container
      as="section"
      id="skills"
      style={!matches ? { width: `100%` } : {}}
    >
      <Fade>
        <div
          sx={{
            bg: 'blue',
            py: [5, 6],
            px: [4, 5],
            width: ['full', 'full', '3/4', '3/5'],
            m: 'auto',
            boxShadow: 1
          }}
        >
          <Styled.h2 sx={{ lineHeight: 1, pb: 4 }}>{title}</Styled.h2>
          {items.map(({ service_title, service_textarea }, i: number) => (
            <Accordion
              key={uuid(i)}
              title={service_title}
              content={service_textarea}
              open={sections[i].open}
              toggle={h => toggleClick(i, h)}
              height={sections[i].height}
            />
          ))}
        </div>
      </Fade>
    </Container>
  )
}

ServicesSection.defaultProps = {
  title: '',
  items: [
    {
      service_title: '',
      service_textarea: {
        text: '',
        html: ''
      }
    }
  ]
}
