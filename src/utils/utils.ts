import { PrismicTechTagRelation } from '../types'

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
