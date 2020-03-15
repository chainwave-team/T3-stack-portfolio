import { PrismicPost, PrismicTechTagRelation } from '../types'

export function getTagsFromRelation(relations?: PrismicTechTagRelation[]) {
  if (!relations) {
    return undefined
  }
  return relations
    .map(({ tech_tags }) => tech_tags?.document[0] || null)
    .filter(techTag => !!techTag)
}

export const capitalize = (word: string): string => {
  const [first, ...rest] = word.split('')
  return first ? first.toUpperCase() + rest.join('') : ''
}

export const snakeToPascalCase = (word: string): string =>
  word
    .split('_')
    .map(w => capitalize(w))
    .join('')

export function getRandomItem(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)]
}

type Posts = Array<{ node: PrismicPost }>

export const filterPostsByTag = (
  posts: Posts,
  techTagUid: string
): Posts | false => {
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
 * ? Can be placed in node part
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
