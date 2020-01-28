/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
import uuid from 'uuid'

import Fade from '../../components/Fade'
import Accordion from '../../components/Accordion'
import Container from '../../components/Container'
import { ServicesStatus, PrismicText } from '../../utils/types'

type Section = {
  key: number
  height: number
  open: boolean
}

type Service = {
  status: ServicesStatus
  service_title: string
  service_textarea: PrismicText
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

  return (
    <Container
      section
      id="skills"
      sx={{ width: ['full', 'full', 'blog', 'blog'], maxWidth: 'full' }}
    >
      <Fade>
        <div
          sx={{
            bg: 'blue',
            py: [5, 6],
            px: [4, 5],
            width: 'full',
            boxShadow: 1,
            maxWidth: 'fit-content'
          }}
        >
          <Styled.h2 sx={{ lineHeight: 1, pb: 4 }}>{title}</Styled.h2>
          {items.map(
            ({ service_title, service_textarea, status }, i: number) =>
              status !== 'hide' && (
                <Accordion
                  key={uuid()}
                  title={service_title}
                  content={service_textarea}
                  open={sections[i].open}
                  toggle={h => toggleClick(i, h)}
                  height={sections[i].height}
                  status={status}
                />
              )
          )}
        </div>
      </Fade>
    </Container>
  )
}
