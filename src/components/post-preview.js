import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const PostPreview = ({ post }) => {
  const { title, image } = post.frontmatter
  return <WrappedImg fluid={image.sharp.fluid} alt={title} post={post} />
}

const WrappedImg = props => {
  const { post, fluid, alt } = { ...props }
  const { title, tags } = post.frontmatter
  const { slug } = post.fields
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
        <Link
          to={slug}
          css={css`
            text-decoration: inherit;
            color: inherit;
          `}
        >
          <StyledImgDesktop fluid={fluid} alt={alt}>
            <Hover>
              <AnimatedTitle>{title}</AnimatedTitle>
              {tags && <AnimatedParagraph>{tags_string}</AnimatedParagraph>}
            </Hover>
          </StyledImgDesktop>
        </Link>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.figure`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
  background-color: #efece4;
`
// Styling and Animation for Desktop
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

  background-color: #efece4;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.95;
    transition: opacity 300ms ease-in-out;
  }

  &:hover > * {
    transform: translate3d(0, 0, 0);
  }
`

const AnimatedTitle = styled.h2`
  transform: translate3d(0, 50px, 0);
  transition: transform 300ms ease;
  text-align: center;
  margin-bottom: 10px;
`
const AnimatedParagraph = styled.p`
  transform: translate3d(0, 50px, 0);
  transition: transform 300ms ease;
  text-align: center;
  margin-bottom: 0;
  font-size: 12px;
  font-style: italic;
`
// Styling for Mobile
const StyledImgMobile = styled(Img)`
  width: 60vw;
  margin: 5vh 10vw 0 10vw;
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
export default PostPreview
