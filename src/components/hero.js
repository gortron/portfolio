import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

// const Hero = ({ image }) => (
//   <BackgroundImage
//     css={css`
//       background-size: cover;
//       background-position: top 20% center;
//       height: 40vh;
//       margin: 0 10vw 0 10vw;

//       + * {
//         margin-top: 0;
//       }
//     `}
//     fluid={image.sharp.fluid}
//   ></BackgroundImage>
// )

const BgMobile = styled(BackgroundImage)`
  background-size: contain;
  margin: 0 10vw 0 10vw;
  height: 25vh;
  + * {
    margin-top: 0;
  }
`

const BgDesktop = styled(BackgroundImage)`
  background-size: contain;
  margin: 0 10vw 0 10vw;
  height: 40vh;
  + * {
    margin-top: 0;
  }
`

const Hero = ({ image }) => {
  const breakpoints = useBreakpoint()
  return breakpoints.sm ? (
    <BgMobile fluid={image.sharp.fluid}></BgMobile>
  ) : (
    <BgDesktop fluid={image.sharp.fluid}></BgDesktop>
  )
}

export default Hero
