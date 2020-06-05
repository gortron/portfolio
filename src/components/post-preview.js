import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  const { title, date, description, slug } = post.frontmatter
  return (
    <>
      <h3>{title}</h3>
      <p>{post.excerpt}</p>
      <Link to={post.slug}>Read</Link>
    </>
  )
}

export default PostPreview
