/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'
import { SFC } from 'react'

import Fade from '../../components/Fade'
import AccordionItem from '../../components/AccordionItem'
import Accordion from '../../components/Accordion'
import Container from '../../components/Container'
import Html from '../../components/Html'
import { ServicesStatus, PrismicText } from '../../utils/types'

const style = {
  container: {
    width: ['full', 'full', 'blog', 'blog'],
    maxWidth: 'full'
  },
  bg: {
    bg: 'blue',
    py: [5, 6],
    px: [4, 5],
    width: 'full',
    boxShadow: 1,
    maxWidth: 'fit-content'
  },
  titleLink: {
    borderBottom: '1px solid',
    py: 3,
    width: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    m: 0
  },
  status: {
    color: 'secondary',
    fontFamily: 'mono',
    m: 0
  },
  content: {
    py: 2
  }
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

const Title: SFC<{ title: string; status: ServicesStatus }> = ({
  title,
  status
}) => (
  <Styled.a sx={style.titleLink}>
    <Styled.h4 sx={style.title}>{title}</Styled.h4>
    {status === 'soon' && (
      <Styled.p sx={style.status}>Prochainement !</Styled.p>
    )}
    {status === 'new' && <Styled.p sx={style.status}>New !</Styled.p>}
  </Styled.a>
)

export default function ServicesSection({ title, items }: Props) {
  const services = items
    .filter(item => item.status !== 'hide')
    .map(item => ({
      ...item,
      label: item.service_title,
      textarea: item.service_textarea
    }))
  return (
    <Container section id="skills" sx={style.container}>
      <Fade>
        <div sx={style.bg}>
          <Styled.h2 sx={{ lineHeight: 1, pb: 4 }}>{title}</Styled.h2>
          {console.log(services)}
          <Accordion>
            {services.map(({ label, textarea, status }, i) => (
              <AccordionItem
                key={uuid()}
                index={i}
                title={<Title title={label} status={status} />}
                content={<Html html={textarea.html} style={style.content} />}
              />
            ))}
          </Accordion>
        </div>
      </Fade>
    </Container>
  )
}
