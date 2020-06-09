import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const StyledImg = styled(Img)`
  width: 40vw;
  margin: 1vw 1vw 1vw 1vw;
`

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WrappedImg = props => (
  <Wrapper>
    <StyledImg {...props} />
  </Wrapper>
)

const PostPreview = ({ post }) => {
  const { title, slug, image } = post.frontmatter
  return <WrappedImg fluid={image.sharp.fluid} alt={title} />
}

// const PostPreview = ({ post }) => {
//   const { title, slug, image } = post.frontmatter
//   return <WrappedImg fluid={image.sharp.fluid} alt={title} />
// }

// const PostPreview = ({ post }) => {
//   // const { title, date, description, slug, tags, image } = post.frontmatter
//   const { title, slug, image } = post.frontmatter
//   return (
//     <div
//       css={css`
//         width: 40vw;
//         margin: 1vw 1vw 1vw 1vw;
//       `}
//     >
//       <Link to={slug}>
//         <Img fluid={image.sharp.fluid} alt={title} />
//       </Link>
//     </div>
//   )
// }

export default PostPreview
