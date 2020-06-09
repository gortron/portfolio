import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const StyledImgDesktop = styled(Img)`
  width: 37vw;
`

const StyledImgMobile = styled(Img)`
  width: 80vw;
`

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
`

const WrappedImg = props => {
  const { slug, fluid, alt } = { ...props }
  const breakpoints = useBreakpoint()
  return (
    <Wrapper>
      <Link to={slug}>
        {breakpoints.sm ? (
          <StyledImgMobile fluid={fluid} alt={alt} />
        ) : (
          <StyledImgDesktop fluid={fluid} alt={alt} />
        )}
      </Link>
    </Wrapper>
  )
}

const PostPreview = ({ post }) => {
  const { title, slug, image } = post.frontmatter
  return <WrappedImg fluid={image.sharp.fluid} alt={title} slug={slug} />
}

export default PostPreview
