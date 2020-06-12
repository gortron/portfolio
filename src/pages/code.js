import React from "react"
import usePosts from "../hooks/use-posts"
import DisplayPosts from "../components/display-posts"

const CodingShowcase = () => {
  const allPosts = usePosts()
  const relevantPosts = allPosts.filter(post =>
    post.frontmatter.tags.includes("coding")
  )
  return <DisplayPosts posts={relevantPosts} />
  // return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default CodingShowcase
