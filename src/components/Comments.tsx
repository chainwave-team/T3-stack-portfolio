/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui'
import { FC, useState, Fragment } from 'react'
import loadable from '@loadable/component'

import Container from './Container'
import Button from './Button'

const AsyncComments = loadable(() => import(`react-disqus-comments`))

interface CommentsProps {
  uid: string
  title: string
}

const Comments: FC<CommentsProps> = ({ uid, title }) => {
  const [visible, setVisible] = useState(false)

  let url = ''
  if (typeof window !== 'undefined') {
    url = window?.location?.href
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <Fragment>
      {!!url && (
        <Container sx={{ py: 5, mb: 5 }} size="blog">
          <Styled.h2 sx={{ textAlign: 'center', mb: 4 }}>
            Qu'en avez-vous pensé ?
          </Styled.h2>

          {visible ? (
            <AsyncComments
              shortname="juliencaron"
              identifier={uid}
              title={title}
              url={url}
            />
          ) : (
            <Fragment>
              <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button sx={{ m: 3 }} onClick={toggleVisibility}>
                  Laisser un commentaire
                </Button>
                <Button sx={{ m: 3 }} onClick={toggleVisibility}>
                  Voir les commentaires
                </Button>
              </Flex>
            </Fragment>
          )}
        </Container>
      )}
    </Fragment>
  )
}

export default Comments
