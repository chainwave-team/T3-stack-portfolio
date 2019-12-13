import { ReactChild, ReactFragment, ReactPortal } from 'react'

export type Children =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined
  | string

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

export type PrismicProject = {
  title: PrismicText
  demo_link?: PrismicLink
  source_link?: PrismicLink
  full_screen?: PrismicImage
  html?: PrismicText
  project_type?: {
    document: Array<{ data: PrismicTechType }>
  }
  relations: Array<{ tech_tags: { document: { data: PrismicTechTag } } }>
}

export type Slice = {
  slice_type: string
  primary: any
}
