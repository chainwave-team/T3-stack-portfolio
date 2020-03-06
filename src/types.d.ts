import { FixedObject, FluidObject } from 'gatsby-image'

// Specifics types

export type ContainerSize = 'blog' | 'container' | 'full'
export type SlicesTypes = 'text' | 'quote' | 'code' | 'image_with_caption'
export type ServicesStatus = 'default' | 'soon' | 'hide' | 'new'

// Prismic Atomic types

export interface PrismicLink {
  link_type: string
  url: string
  target?: string
}

export interface PrismicText {
  text?: string
  html?: string
}

export interface PrismicTextAndRaw extends PrismicText {
  raw?: {
    label?: string
  }
}

export interface PrismicTechTag {
  uid: string
  data: {
    title?: PrismicText
    description?: PrismicText
  }
}

export interface PrismicTechTagRelation {
  tech_tags: {
    document: PrismicTechTag[]
  }
}

interface PrismicTechTagQuery {
  edges: Array<{
    node: PrismicTechTag
  }>
}

export interface PrismicImage {
  alt?: string
  url?: string
  localFile?: {
    childImageSharp: {
      fluid?: FluidObject
      fixed?: FixedObject
    }
  }
}

// Slices Types

export interface PrismicSliceText {
  text?: PrismicText
}

export interface PrismicSliceQuote {
  quote?: PrismicText
  source_name?: string
  source_link?: PrismicLink
}

export interface PrismicSliceCode {
  code?: PrismicTextAndRaw
}

export interface PrismicSliceImageWithCaption {
  image?: PrismicImage
  caption?: string
}

export type SliceContent =
  | PrismicSliceText
  | PrismicSliceQuote
  | PrismicSliceCode
  | PrismicSliceImageWithCaption

export interface Slice {
  slice_type: SlicesTypes
  slice_label?: ContainerSize
  primary?: SliceContent
}

// Posts Types

export interface PrismicPost {
  uid: string
  last_publication_date: string
  first_publication_date: string
  data: {
    title?: PrismicText
    thumbnail?: PrismicImage
    canonical?: Array<{
      data: {
        title?: PrismicText
      }
    }>
    published_date?: string
    relations?: PrismicTechTagRelation[]
    body?: Slice[] // Slices
  }
}

interface PrismicPostQuery {
  edges: Array<{ node: PrismicPost }>
}

// Pages & Templates types

// export interface Page {}

export interface Template {
  location: Location
  pageContext: PrismicPost
}

export interface ForTemplatePostTag extends PrismicTechTag {
  count: number
  posts: string[]
}

export interface TemplatePost extends Template {
  pageContext: {
    currentPost: PrismicPost
    allPosts: Array<{
      node: PrismicPost
    }>
    postTags: Array<{
      node: ForTemplatePostTag
    }>
  }
}

export interface TemplatePostTag extends Template {
  pageContext: {
    currentTag: ForTemplatePostTag
    posts: Array<{
      node: PrismicPost
    }>
  }
}

// Modules declaration
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.otf' {
  const content: string
  export default content
}
