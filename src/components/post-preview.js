import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const PostPreview = ({ post }) => {
  // const { title, date, description, slug, tags, image } = post.frontmatter
  const { title, slug, image } = post.frontmatter
  return (
    <div
      css={css`
        width: 40vw;
        margin: 0 1vw 0 1vw;
      `}
    >
      {/* <pre>{JSON.stringify(image, null, 2)}</pre> */}
      {/* <h3>{title}</h3> */}
      {/* <p>{post.excerpt}</p> */}
      <Link to={slug}>
        <Img fluid={image.sharp.fluid} alt={title} />
      </Link>
    </div>
  )
}

export default PostPreview
