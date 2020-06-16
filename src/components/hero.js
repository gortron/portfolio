import React from "react"
import { css } from "@emotion/core"
import { styled } from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ image, content }) => (
  <BackgroundImage
    css={css`
      background-size: cover;
      background-position: top 20% center;
      height: 40vh;
      margin: 0 10vw 0 10vw;

      + * {
        margin-top: 0;
      }
    `}
    fluid={image.sharp.fluid}
  >
    {content}
  </BackgroundImage>
)

export default Hero