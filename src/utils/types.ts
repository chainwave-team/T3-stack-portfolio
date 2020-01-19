import { ReactChild, ReactFragment, ReactPortal } from 'react'

export type Children =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined
  | string

export type ContainerSize = 'blog' | 'container' | 'full'

export type PrismicLink = {
  link_type: string
  url: string
  target?: string
}

export type PrismicText = {
  text?: string
  html?: string
}

export type PrismicImage = {
  alt?: string
  url?: string
  localFile?: {
    childImageSharp: {
      fluid: object
      fixed: object
    }
  }
}

export type PrismicTechTag = {
  title: PrismicText
  description?: PrismicText
}

export type PrismicTechType = {
  title: PrismicText
}

export type PrismicRelationsOfTechTags = Array<{
  tech_tags: {
    document: Array<{
      // uid: string
      // id: string
      data: PrismicTechTag
    }>
  }
}>

export type PrismicProject = {
  title: PrismicText
  demo_link?: PrismicLink
  source_link?: PrismicLink
  full_screen?: PrismicImage
  html?: PrismicText
  project_type?: {
    document: Array<{ data: PrismicTechType }>
  }
  relations: PrismicRelationsOfTechTags
}

export type Slice = {
  slice_type: string
  slice_label?: ContainerSize
  primary: any
}

export type PrismicPost = {
  uid: string
  last_publication_date: string
  first_publication_date: string
  data: {
    title: PrismicText
    thumbnail?: PrismicImage
    canonical?: Array<{
      data: {
        title: PrismicText
      }
    }>
    published_date?: string
    relations: PrismicRelationsOfTechTags
  }
}

export type ServicesStatus = 'default' | 'soon' | 'hide'
