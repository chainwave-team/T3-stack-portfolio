import {
  PrismicPost,
  PrismicPostQuery,
  PrismicTechTagRelation,
  PrismicTechTagQuery
} from '../types.d'

export function getTagsFromRelation(relations: PrismicTechTagRelation[]) {
  return relations
    .map(({ tech_tags }) => tech_tags?.document[0].data || null)
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

// From posts list & tags list,
// Excluse un-used tags in posts

export function getPostsTags(
  posts: PrismicPostQuery,
  tags: PrismicTechTagQuery
): PrismicTechTagQuery {
  const hasPosts = posts?.edges && posts?.edges.length > 0
  const hasTags = tags?.edges && tags?.edges.length > 0

  if (!hasPosts || !hasTags) {
    return { edges: [] }
  }

  // Make an array of active tags uid
  const tagUidInPosts: string[] = []

  posts.edges.forEach(({ node }) => {
    const relations = node?.data?.relations
    if (relations && relations.length > 0) {
      relations.forEach(({ tech_tags }) => {
        const el = tech_tags?.document[0]

        if (el && !tagUidInPosts.includes(el.uid)) {
          tagUidInPosts.push(el.uid)
        }
      })
    }
  })

  return {
    edges: tags.edges.filter(({ node }) => !!tagUidInPosts.includes(node.uid))
  }
}

// "Algorithm" of "Related Posts"
// Todo : Develop more ;)
export function getRelatedPosts(
  currentPost: PrismicPost,
  posts: PrismicPostQuery
) {
  const excludes = [
    currentPost.uid,
    'bonjour-cher-visiteur-bienvenue-sur-mon-article-demo'
  ]

  return posts.edges.filter(({ node }) => !excludes.includes(node.uid))
}
