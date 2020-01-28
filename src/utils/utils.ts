import { PrismicRelationsOfTechTags as RelationsOfTG } from './types'

// eslint-disable-next-line import/prefer-default-export
export function getTagsFromRelation(relations: RelationsOfTG) {
  return relations.map(({ tech_tags }) => tech_tags.document[0].data)
}

export const capitalize = (word: string): string => {
  const [first, ...rest] = word.split('')
  return first ? first.toUpperCase() + rest.join('') : ''
}

/**
 * Transform snake_case to PascalCase
 * @param word
 */
export const snakeToPascalCase = (word: string): string =>
  word
    .split('_')
    .map(w => capitalize(w))
    .join('')
