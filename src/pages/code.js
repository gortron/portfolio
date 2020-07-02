import React from "react"
import usePosts from "../hooks/use-posts"
import DisplayContent from "../components/display-content"

const CodingShowcase = () => {
  const allPosts = usePosts()
  const relevantPosts = allPosts.filter(post =>
    post.childMarkdownRemark.frontmatter.tags.includes("coding")
  )
  return <DisplayContent content={relevantPosts} />
  // return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default CodingShowcase
