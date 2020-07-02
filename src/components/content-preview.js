import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const ContentPreview = ({ content }) => {
  const { title, image, tags } = content.frontmatter
  const breakpoints = useBreakpoint()

  let tags_string
  if (tags) {
    const reducer = (accumulator, currentValue) =>
      accumulator + ", " + currentValue
    tags_string = tags.reduce(reducer)
  }

  return (
    <>
      {breakpoints.sm ? (
        <MobileWrapper>
          <StyledTitleBox>
            <h1>{title}</h1>
            {tags && <i>{tags_string}</i>}
          </StyledTitleBox>
          <Link to={content.fields.slug}>
            <StyledImgMobile fluid={image.sharp.fluid} alt={title} />
          </Link>
        </MobileWrapper>
      ) : (
        <div
          css={css`
            position: relative;
            text-decoration: none;
            img {
              border: 6px solid white;
            }
          `}
        >
          <Link
            to={content.fields.slug}
            css={css`
              text-decoration: inherit;
              color: inherit;
            `}
          >
            <Img
              alt={title}
              fluid={image.sharp.fluid}
              css={css`
                display: block;
                width: 100%;
                height: auto;
              `}
            />
            <Hover>
              <AnimatedTitle>{title}</AnimatedTitle>
              {tags && <AnimatedParagraph>{tags_string}</AnimatedParagraph>}
            </Hover>
          </Link>
        </div>
      )}
    </>
  )
}

const MobileWrapper = styled.div`
  padding-bottom: 5px;
  margin-bottom: 20px;
  background-color: #efece4;
  text-align: center;
  img {
    margin-bottom: 0;
  }
`

const Hover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 6px solid white;
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
  margin: 5px 10vw 20px 10vw;
`

const StyledTitleBox = styled.div`
  padding: 10px 10vw 0 10vw;
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
export default ContentPreview
