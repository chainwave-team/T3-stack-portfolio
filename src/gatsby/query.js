const dateFormat = `DD/MM/YYYY`

const GatsbyFluid_withWebp = `
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
`

const PrismicLink = `
    link_type
    url
    target
`

const PrismicText = `
    text
    html
`

const PostBodyText = `
    ... on PrismicPostBodyText {
        id
        slice_type
        primary {
            text {
                ${PrismicText}
            }
        }
    }
`

const PostBodyQuote = `
    ... on PrismicPostBodyQuote {
        id
        slice_type
        primary {
            quote {
                ${PrismicText}
            }
            source_name
            source_link {
                ${PrismicLink}
            }
        }
    }
`

const PostBodyCode = `
    ... on PrismicPostBodyCode {
        id
        slice_type
        primary {
            code {
                ${PrismicText}
                raw {
                    label
                }
            }
        }
    }
`

const PostBodyImageWithCaption = `
    ... on PrismicPostBodyImageWithCaption {
        id
        slice_type
        slice_label
        prismicId
        primary {
            image {
                alt
                localFile {
                    childImageSharp {
                        fluid(
                            jpegQuality: 100
                            pngQuality: 100
                            quality: 100
                            maxWidth: 1920
                        ) {
                            ${GatsbyFluid_withWebp}
                        }
                    }
                }
            }
            caption
        }
    }
`

const PostThumbnail = `
    thumbnail {
        url
        localFile {
            size
            ext
            extension
            url
            publicURL
            childImageSharp {
                fluid(
                    maxWidth: 1180
                    jpegQuality: 100
                    pngQuality: 100
                    quality: 100
                ) {
                    ${GatsbyFluid_withWebp}
                }
            }
        }
    }
`

const TechTag = `
    uid
    data {
        title {
            ${PrismicText}
        }
        description {
            ${PrismicText}
        }
    }
`

const TechTagRelations = `
    relations {
        tech_tags {
            uid
            document {
                ${TechTag}
            }
        }
    }
`

const PostCanonical = `
    canonical {
        uid
        url
        document {
            data {
                title {
                    ${PrismicText}
                }
            }
        }
    }
`

const Project = `
    uid
    data {
        isfeatured
        demo_link {
            ${PrismicLink}
        }
        full_screen {
            alt
            url
            localFile {
                medium: childImageSharp {
                    fluid(quality: 85, maxWidth: 720) {
                        ${GatsbyFluid_withWebp}
                    }
                }
                small: childImageSharp {
                    fluid(quality: 85, maxWidth: 250) {
                        ${GatsbyFluid_withWebp}
                    }
                }
            }
        }
        html {
            ${PrismicText}
        }
        project_type {
            document {
                data {
                    title {
                        ${PrismicText}
                    }
                }
            }
        }
        
        ${TechTagRelations}

        source_link {
            ${PrismicLink}
        }
        title {
            ${PrismicText}
        }
        video {
            ${PrismicLink}
            name
            kind
            size
        }
    }
`

const Homepage = `
    type
    data {
        introduction {
            ${PrismicText}
        }
        title {
            ${PrismicText}
        }
        header_contact_button_label
        services_introduction {
            ${PrismicText}
        }
        services {
            status
            service_title
            service_textarea {
                ${PrismicText}
            }
        }
        featured_projects {
            project {
                document {
                    ${Project}
                }
            }
        }
    }

`

const Post = `
    uid
    first_publication_date(formatString: "${dateFormat}")
    data {
        published_date(formatString: "${dateFormat}")
        meta_title
        meta_description
        title {
            ${PrismicText}
        }

        ${PostThumbnail}
        ${PostCanonical}
        ${TechTagRelations}

        body {
            ${PostBodyImageWithCaption}
            ${PostBodyQuote}
            ${PostBodyCode}
            ${PostBodyText}
        }
    }
`

const postsQuery = `
    posts: allPrismicPost(
        filter: { 
            lang: { eq: "fr-fr" },
            uid: {ne: "bonjour-cher-visiteur-bienvenue-sur-mon-article-demo"}
        }
        sort: { fields: first_publication_date, order: DESC }
    ) {
        edges {
            node {
                ${Post}
            }
        }
    }
`

const tagsQuery = `
    tags: allPrismicTechTags {
        edges {
            node {
                ${TechTag}
            }
        }
    }
`

const homeQuery = `
    homepage: prismicHomepage(lang: { eq: "fr-fr" }) {
        ${Homepage}
    }
`

const projectsQuery = `
    projects: allPrismicProject(filter: { lang: { eq: "fr-fr" } }) {
        edges {
            node {
                ${Project}
            }
        }
    }
`

const query = `{
    ${postsQuery}
    ${tagsQuery}
    ${homeQuery}
    ${projectsQuery}
}`

module.exports = {
  query,
  postsQuery,
  tagsQuery,
  projectsQuery,
  homeQuery,
  dateFormat
}
