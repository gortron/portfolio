import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const StyledImgDesktop = styled(Img)`
  width: 33vw;
  margin: 2vw; 2vw 0 2vw;
  height: 33vw;
  // object-fit: cover;
`

const StyledTitleBox = styled.div`
  padding-right: 2vw;
  width: 37vw;
  height: 4rem;
  color: white;
  text-align: right;
`

const StyledImgMobile = styled(Img)`
  width: 80vw;
`

const Wrapper = styled.figure`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
  background-color: #efece4;
  border-radius: 10px;
`

const WrappedImg = props => {
  const { post, fluid, alt } = { ...props }
  const { title, slug, image, tags } = post.frontmatter
  const breakpoints = useBreakpoint()

  let tags_string
  if (tags) {
    const reducer = (accumulator, currentValue) =>
      accumulator + ", " + currentValue
    tags_string = tags.reduce(reducer)
  }

  return (
    <Wrapper>
      {breakpoints.sm ? (
        <StyledImgMobile fluid={fluid} alt={alt} />
      ) : (
        <div>
          <Link to={slug}>
            <StyledImgDesktop fluid={fluid} alt={alt} />
          </Link>
          <StyledTitleBox>
            {tags && <i>{tags_string}</i>}
            <h1>{title}</h1>
          </StyledTitleBox>
        </div>
      )}
    </Wrapper>
  )
}

const PostPreview = ({ post }) => {
  const { title, slug, image } = post.frontmatter
  return <WrappedImg fluid={image.sharp.fluid} alt={title} post={post} />
}

export default PostPreview
