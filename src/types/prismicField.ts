import { FixedObject, FluidObject } from 'gatsby-image'

import { SlicesTypes, ContainerSize } from './index'

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

export interface PostCanonical {
  uid: string
  url: string
  document: Array<{
    data: {
      title?: PrismicText
    }
  }>
}
