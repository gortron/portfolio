import React from "react"
import usePosts from "../hooks/use-posts"
import DisplayPosts from "../components/display-posts"

const IndexPage = () => {
  const posts = usePosts()
  return <DisplayPosts posts={posts} />
}

export default IndexPage
