import { PrismicRelationsOfTechTags as RelationsOfTG } from './types'

// eslint-disable-next-line import/prefer-default-export
export function getTagsFromRelation(relations: RelationsOfTG) {
  return relations.map(({ tech_tags }) => tech_tags.document[0].data)
}
