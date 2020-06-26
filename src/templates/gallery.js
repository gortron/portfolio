import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { chunk, sum, uniqueId } from "lodash"
import Img from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "dddd, MMMM D, YYYY-D/M/Y")
        slug
        tags
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        galleryImages {
          sharp: childImageSharp {
            fluid {
              aspectRatio
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const GalleryTemplate = ({ data }) => {
  const { galleryImages } = data.markdownRemark.frontmatter
  const breakpoints = useBreakpoint()
  const itemsPerRow = breakpoints.sm ? 1 : 3
  const rows = chunk(galleryImages, itemsPerRow)

  // return <pre>{JSON.stringify(rows, null, 2)}</pre>
  return (
    <Layout>
      <div
        css={css`
          margin: 0 10vw 0 10vw;

          img {
            border-left: 4px solid white;
            border-right: 4px solid white;
          }
        `}
      >
        {rows.map(row => {
          const rowAspectRatioSum = sum(
            row.map(image => image.sharp.fluid.aspectRatio)
          )

          return row.map(image => (
            <Img
              key={uniqueId()}
              fluid={image.sharp.fluid}
              css={css`
                width: ${(image.sharp.fluid.aspectRatio / rowAspectRatioSum) *
                100}%;
                display: inline-block;
              `}
            />
          ))
        })}
      </div>
    </Layout>
  )
}

export default GalleryTemplate
