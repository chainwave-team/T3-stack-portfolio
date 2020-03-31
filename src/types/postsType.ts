import { FluidObject } from 'gatsby-image'
import {
  PrismicText,
  PrismicImage,
  PostCanonical,
  Slice,
  PrismicLink
} from './prismicField'
import { PrismicTechTagRelation } from './templates'

export interface PrismicTechTag {
  uid: string
  data: {
    title?: PrismicText
    description?: PrismicText
  }
}

export interface PrismicPost {
  uid: string
  last_publication_date: string
  first_publication_date: string
  data: {
    title: PrismicText
    meta_title: string
    meta_description: string
    thumbnail?: PrismicImage
    canonical?: PostCanonical
    published_date?: string
    relations?: PrismicTechTagRelation[]
    body?: Slice[]
  }
}

export interface PrismicProject {
  uid: string
  data: {
    title: PrismicText
    isfeatured?: 'yes' | 'no'
    demo_link?: PrismicLink
    source_link?: PrismicLink
    full_screen?: {
      alt: string
      url: string
      localFile?: {
        medium: { fluid: FluidObject }
        small: { fluid: FluidObject }
      }
    }
    html?: PrismicText
    project_type?: {
      document: Array<{ data: { title: PrismicText } }>
    }
    relations?: PrismicTechTagRelation[]
  }
}
