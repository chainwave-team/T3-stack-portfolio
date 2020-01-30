import { PrismicProject } from '../../../utils/types'

export interface ProjectNode {
  data: PrismicProject
  uid: string
}

export interface ProjectState {
  featured: ProjectNode[]
  others: ProjectNode[]
}

export interface Props {
  nodes: ProjectNode[]
}
