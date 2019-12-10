/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Container from '../components/ui/Container'

type Props = {
  data: {
    prismicPost: any
  }
}

export default function PostTemplate({ data: { prismicPost } }: Props) {
  const { data } = prismicPost
  return (
    <Layout>
      <Container section>
        <Styled.h1>{data.title.text}</Styled.h1>
      </Container>
      {/*
        // TODO : Hero (title & meta)
        // TODO : Slices 
      */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
      }
    }
  }
`
