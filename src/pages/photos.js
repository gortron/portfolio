import React from "react"
import useGalleries from "../hooks/use-galleries"
import DisplayPosts from "../components/display-posts"

const PhotosShowcase = () => {
  const allGalleries = useGalleries()
  // const relevantPosts = allPosts.filter(post =>
  //   post.childMarkdownRemark.frontmatter.tags.includes("photography")
  // )
  // return <DisplayPosts posts={allGalleries} />
  return <pre>{JSON.stringify(allGalleries, null, 2)}</pre>
}

export default PhotosShowcase
