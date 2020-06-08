import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const PostPreview = ({ post }) => {
  const { title, date, description, slug, tags, image } = post.frontmatter
  return (
    <>
      {/* <pre>{JSON.stringify(image, null, 2)}</pre> */}
      <h3>{title}</h3>
      <Img fluid={image.sharp.fluid} alt={title} />
      <p>{post.excerpt}</p>
      <Link to={slug}>Read</Link>
    </>
  )
}

export default PostPreview
