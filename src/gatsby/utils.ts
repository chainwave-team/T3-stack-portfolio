import { PrismicPost, PrismicTechTag } from '../types'

type Posts = Array<{ node: PrismicPost }>
interface A extends PrismicTechTag {
  post: string
}

// eslint-disable-next-line import/prefer-default-export
export const getPostTags = (allPosts: Posts) => {
  // 1. Get each tag for each post like
  const tagsAndPost: A[] = []

  allPosts.forEach(({ node: post }) => {
    const relations = post?.data?.relations
    if (relations && relations.length > 0) {
      // Pour chaque Tag
      relations.forEach(({ tech_tags }) => {
        if (tech_tags?.document) {
          const el = tech_tags.document[0]
          if (el) {
            tagsAndPost.push({
              ...el,
              post: post.uid
            })
          }
        }
      })
    }
  })

  interface B extends A {
    posts: string[]
  }

  // 2. From the last array
  const tmp: B[] = tagsAndPost.reduce((prev, curr) => {
    const output: B = {
      ...curr,
      posts: [curr.post]
    }

    // First element
    const isNotEmpty = prev && prev.length > 0
    if (isNotEmpty) {
      const thisTag = prev.filter(({ uid }) => uid === curr.uid)[0]
      const otherTag = prev.filter(({ uid }) => uid !== curr.uid)

      // If tag doesn't exists in prev
      if (!thisTag) {
        return !otherTag ? [output] : [...prev, output]
      }

      // Here thisTag exists
      const posts = thisTag?.posts || []
      thisTag.posts = [...posts, curr.post]

      return otherTag && otherTag.length > 0
        ? [...otherTag, thisTag]
        : [thisTag]
    }

    return [output]
  }, [] as B[])

  // 3. Normalize, format
  return tmp.map(tag => {
    const { uid, data, posts } = tag
    return {
      node: {
        uid,
        data,
        posts,
        count: tag.posts.length || 0
      }
    }
  })
}
