import React from "react"
import usePosts from "../hooks/use-posts"
import useGalleries from "../hooks/use-galleries"
import DisplayPosts from "../components/display-posts"

const IndexPage = () => {
  const posts = usePosts()
  const galleries = useGalleries()
  const allContent = posts.concat(galleries)
  return <DisplayPosts content={allContent} />
}

export default IndexPage
