import { NodeArrayOf, ServicesStatus } from './index'
import { PrismicText } from './prismicField'
import { PrismicTechTag, PrismicPost, PrismicProject } from './postsType'

// Pages
export interface PrismicTechTagRelation {
  tech_tags: {
    uid: string
    document: PrismicTechTag[]
  }
}

export interface ForTemplatePostTag extends PrismicTechTag {
  count: number
  posts: string[]
}

export interface Homepage {
  type: string
  data: {
    header_contact_button_label: string
    title: PrismicText
    introduction: PrismicText
    services_introduction: PrismicText
    services: Array<{
      status: ServicesStatus
      service_title: string
      service_textarea: PrismicText
    }>
    featured_projects: Array<{
      project: {
        document: PrismicProject[]
      }
    }>
  }
}

// Templates types

export interface Template {
  location: Location
  pageContext: any
}

export interface TemplatePost extends Template {
  pageContext: {
    currentPost: PrismicPost
    relatedPosts: NodeArrayOf<PrismicPost>
    postTags: NodeArrayOf<ForTemplatePostTag>
  }
}

export interface TemplatePostTag extends Template {
  pageContext: {
    currentTag: ForTemplatePostTag
    posts: NodeArrayOf<PrismicPost>
    postTags: NodeArrayOf<ForTemplatePostTag>
  }
}

export interface TemplateBlog extends Template {
  pageContext: {
    posts: NodeArrayOf<PrismicPost>
    postTags: NodeArrayOf<ForTemplatePostTag>
  }
}

export interface TemplateHome extends Template {
  pageContext: {
    lastPosts: NodeArrayOf<PrismicPost>
    homepage: Homepage
  }
}
