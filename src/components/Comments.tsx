/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FC } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import Container from './Container'

interface CommentsProps {
  uid: string
  title: string
}

const Comments: FC<CommentsProps> = ({ uid, title }) => {
  if (typeof window === 'undefined') {
    return null
  }

  const url = window?.location?.href
  if (!url) {
    return null
  }

  return (
    <Container sx={{ mb: 5 }}>
      <ReactDisqusComments
        shortname="juliencaron"
        identifier={uid}
        title={title}
        url={url}
        // category_id={post.category_id}
        // onNewComment={() => console.log('new comment')}
      />
    </Container>
  )
}

export default Comments
