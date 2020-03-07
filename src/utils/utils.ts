import { PrismicPost, PrismicTechTagRelation } from '../types.d'

export function getTagsFromRelation(relations?: PrismicTechTagRelation[]) {
  if (!relations) {
    return undefined
  }
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

// "Algorithm" of "Related Posts"
// Todo : Develop more ;)
export function getRelatedPosts(
  currentPost: PrismicPost,
  posts: Array<{
    node: PrismicPost
  }>
) {
  const excludes = [
    currentPost.uid,
    'bonjour-cher-visiteur-bienvenue-sur-mon-article-demo'
  ]

  return posts.filter(({ node }) => !excludes.includes(node.uid))
}
