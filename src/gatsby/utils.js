module.exports.getPostTags = allPosts => {
  // 1. Get each tag for each post like
  // { tag: string uid, post: string uid }
  const tagsAndPost = []

  allPosts.forEach(({ node: post }) => {
    const relations = !!post.data && post.data.relations
    if (relations && relations.length > 0) {
      // Pour chaque Tag
      relations.forEach(({ tech_tags }) => {
        if (tech_tags && tech_tags.document) {
          const el = tech_tags.document[0]
          if (el) {
            tagsAndPost.push({
              tag: el.uid,
              data: el.data,
              post: post.uid
            })
          }
        }
      })
    }
  })

  // 2. From the last array
  // Return Reduced tag array of
  // { tag: uid, data: Tag, posts: [post]}
  const tmp = tagsAndPost.reduce((prev, curr) => {
    // Base output
    const output = {
      uid: curr.tag,
      data: curr.data,
      posts: [curr.post]
    }

    // First element
    const isNotEmpty = prev && prev.length > 0
    if (isNotEmpty) {
      const thisTag = prev.filter(({ uid }) => uid === curr.tag)[0]
      const otherTag = prev.filter(({ uid }) => uid !== curr.tag)

      // If tag doesn't exists in prev
      if (!thisTag) {
        return !otherTag ? [output] : [...prev, output]
      }

      // Here thisTag exists
      const posts = thisTag.posts || []
      thisTag.posts = [...posts, curr.post]

      return otherTag && otherTag.length > 0
        ? [...otherTag, thisTag]
        : [thisTag]
    }

    return [output]
  }, [])

  // 3. Normalize, format
  // - Calculate posts count
  return tmp.map(tag => {
    return {
      node: {
        ...tag,
        count: tag.posts.length || 0
      }
    }
  })
}
