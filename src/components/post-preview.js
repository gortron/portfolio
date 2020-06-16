import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import BackgroundImage from "gatsby-background-image"

const StyledImgDesktop = styled(BackgroundImage)`
  width: 33vw;
  height: 33vw;
  margin: 2vw 2vw 2vw 2vw;
`

const Hover = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: opacity 300ms ease;
  -moz-transition: opacity 300ms ease;
  -webkit-transition: opacity 300ms ease;

  opacity: 0;
  &:hover {
    opacity: 1;
    background-color: #efece4;
    transition: opacity 300ms ease;
    -moz-transition: opacity 300ms ease;
    -webkit-transition: opacity 300ms ease;
  }
`

const AnimatedTitle = styled.h2`
  transform: translate3d(0, 50px, 0);
  transition: transform 300ms ease;
  // color: white;
  text-align: center;
  margin-bottom: 0;
`

const StyledTitleBox = styled.div`
  padding: 2vh 10vw 2vh 10vw;
  width: 80vw;
  text-align: center;

  i {
    font-size: 12px;
    color: grey;
  }

  h1 {
    font-size: 6vw;
    margin-bottom: 0;
  }
`

const StyledImgMobile = styled(Img)`
  width: 60vw;
  margin: 5vh 10vw 0 10vw;
`

const Wrapper = styled.figure`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
  background-color: #efece4;
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
        <div>
          <Link to={slug}>
            <StyledImgMobile fluid={fluid} alt={alt} />
          </Link>
          <StyledTitleBox>
            <h1>{title}</h1>
            {tags && <i>{tags_string}</i>}
          </StyledTitleBox>
        </div>
      ) : (
        <StyledImgDesktop fluid={fluid} alt={alt}>
          <Hover>
            <AnimatedTitle>{title}</AnimatedTitle>
          </Hover>
        </StyledImgDesktop>
      )}
    </Wrapper>
  )
}

const PostPreview = ({ post }) => {
  const { title, slug, image } = post.frontmatter
  return <WrappedImg fluid={image.sharp.fluid} alt={title} post={post} />
}

export default PostPreview
