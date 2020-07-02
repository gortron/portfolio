import React from "react"
import usePosts from "../hooks/use-posts"
import useGalleries from "../hooks/use-galleries"
import DisplayContent from "../components/display-content"

const IndexPage = () => {
  const posts = usePosts()
  const galleries = useGalleries()
  const allContent = posts.concat(galleries)
  return <DisplayContent content={allContent} />
}

export default IndexPage
