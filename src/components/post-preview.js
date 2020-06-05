import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  const { title, date, description, slug } = post.frontmatter
  return (
    <>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <h3>{title}</h3>
      <p>{post.excerpt}</p>
      <Link to={slug}>Read</Link>
    </>
  )
}

export default PostPreview
