/** @jsx jsx */
import { jsx, Styled, Flex, Container } from 'theme-ui'
import { FC, useState, Fragment } from 'react'
import loadable from '@loadable/component'

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
        <Container sx={{ py: 5, mb: 5, maxWidth: 1080 }}>
          <Styled.h2 sx={{ textAlign: 'center', mb: 4 }}>
            Qu&apos;en avez-vous pensé ?
          </Styled.h2>

          {visible ? (
            <AsyncComments
              shortname="juliencaron"
              identifier={uid}
              title={title}
              url={url}
            />
          ) : (
            <Flex sx={{ justifyContent: 'center' }}>
              <Button sx={{ my: 3, mx: 'auto' }} onClick={toggleVisibility}>
                Ouvrir les commentaires
              </Button>
            </Flex>
          )}
        </Container>
      )}
    </Fragment>
  )
}

export default Comments
