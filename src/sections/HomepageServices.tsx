/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import uuid from 'uuid'
import { FC } from 'react'

import Fade from '../components/Fade'
import AccordionItem from '../components/tmp/AccordionItem'
import Accordion from '../components/tmp/Accordion'
import Container from '../components/Container'
import Html from '../components/Html'
import { ServicesStatus, PrismicText } from '../types'

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
  }
}

export interface Service {
  status: ServicesStatus
  service_title: string
  service_textarea: PrismicText
}

export interface HomepageServicesProps {
  title: string
  items: Array<Service>
}

export interface TitleProps {
  title: string
  status: ServicesStatus
}

const Title: FC<TitleProps> = ({ title, status }) => (
  <Styled.a sx={style.titleLink}>
    <Styled.h3 sx={style.title}>{title}</Styled.h3>
    {status === 'soon' && (
      <Styled.p sx={style.status}>Prochainement !</Styled.p>
    )}
    {status === 'new' && <Styled.p sx={style.status}>New !</Styled.p>}
  </Styled.a>
)

const HomepageServices: FC<HomepageServicesProps> = ({ title, items }) => {
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
          <Accordion>
            {services.map(({ label, textarea, status }, i) => (
              <AccordionItem
                key={uuid()}
                index={i + 1}
                title={<Title title={label} status={status} />}
                content={<Html html={textarea.html} style={{ py: 2 }} />}
              />
            ))}
          </Accordion>
        </div>
      </Fade>
    </Container>
  )
}

export default HomepageServices
