import React from "react"
import { css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ image }) => (
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
  ></BackgroundImage>
)

export default Hero
