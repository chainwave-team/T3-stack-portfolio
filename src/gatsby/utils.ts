import {
  PrismicPost,
  PrismicTechTag,
  PrismicTechTagRelation,
  NodeArrayOf,
  ForTemplatePostTag
} from '../types'

type Posts = NodeArrayOf<PrismicPost>
interface TechTagAndPostsUid extends PrismicTechTag {
  posts: string[]
}

type ExtractsPostTagsFn = (posts: Posts) => NodeArrayOf<ForTemplatePostTag>

export const getPostTagsFromPosts: ExtractsPostTagsFn = posts => {
  const tagsAndPost: TechTagAndPostsUid[] = []

  // 1. Extracts tags from posts
  posts.forEach(({ node: post }) => {
    const relations = post?.data?.relations
    if (relations && relations.length > 0) {
      relations.forEach(({ tech_tags }) => {
        if (tech_tags?.document) {
          const el = tech_tags.document[0]
          if (el) {
            const tagExists = tagsAndPost.filter(({ uid }) => uid === el.uid)[0]

            if (tagExists) {
              tagsAndPost.map(tag => {
                if (tag.uid === el.uid) {
                  return {
                    ...tag,
                    posts: [...tag.posts, post.uid]
                  }
                }
                return tag
              })
            } else {
              tagsAndPost.push({
                ...el,
                posts: [post.uid]
              })
            }
          }
        }
      })
    }
  })

  // 2. Normalize & format
  return tagsAndPost.map(tag => {
    return {
      node: {
        ...tag,
        count: tag.posts.length || 0
      }
    }
  })
}

type FilterPostsByTag = (posts: Posts, tagUID: string) => Posts | false

export const filterPostsByTag: FilterPostsByTag = (posts, techTagUid) => {
  const filteredPosts = posts.filter(({ node }) => {
    let matches = false
    const relations = node?.data?.relations
    if (relations && relations.length > 0) {
      const arr = relations.filter(
        ({ tech_tags }: PrismicTechTagRelation) => tech_tags.uid === techTagUid
      )
      if (arr && arr.length > 0) {
        matches = true
      }
    }
    return matches
  })

  return filteredPosts.length > 0 ? filteredPosts : false
}

/**
 * Algorithm of Related Posts
 *
 * Push matched posts in an array hierarchically
 * By canonical (first category)
 * By Tags
 * Default by latest date
 * Then remove excluded posts
 *
 * @param currentPost PrismicPost
 * @param posts 3 posts
 */
export function getRelatedPosts(currentPost: PrismicPost, posts: Posts): Posts {
  const excludes = [currentPost.uid]
  const relatedPosts: Posts = []

  // If has canonical techTag, filter by tags
  const canonical = currentPost.data?.canonical
  if (canonical) {
    const postsIn = filterPostsByTag(posts, canonical.uid)
    if (postsIn) {
      relatedPosts.push(...postsIn)
    }
  }

  // Same as step 1, but filter for each relation and push matched posts
  const relations = currentPost.data?.relations
  if (relations) {
    relations.forEach(({ tech_tags }) => {
      const postsIn = filterPostsByTag(posts, tech_tags.uid)
      if (postsIn) {
        relatedPosts.push(...postsIn)
      }
    })
  }

  // Merge & remove doubles
  const allPosts = [...relatedPosts, ...posts].reduce((acc, curr) => {
    const hasMatch =
      acc && acc.filter(({ node }) => node.uid === curr.node.uid).length > 0
    return hasMatch ? acc : [...acc, curr]
  }, [] as Posts)

  // Last return posts without excluded
  return allPosts.filter(({ node }) => !excludes.includes(node.uid)).slice(0, 3)
}
