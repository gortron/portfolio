import React from "react"
import usePosts from "../hooks/use-posts"
import DisplayPosts from "../components/display-posts"

const PhotosShowcase = () => {
  const allPosts = usePosts()
  const relevantPosts = allPosts.filter(post =>
    post.childMarkdownRemark.frontmatter.tags.includes("photography")
  )
  return <DisplayPosts posts={relevantPosts} />
  // return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default PhotosShowcase
