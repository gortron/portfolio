import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { chunk, sum } from "lodash"
import Img from "gatsby-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import options from "../utils/lightbox-config"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "dddd, MMMM D, YYYY-D/M/Y")
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
  const itemsPerRow = breakpoints.sm ? 1 : 2
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
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            {rows.map(row => {
              const rowAspectRatioSum = sum(
                row.map(image => image.sharp.fluid.aspectRatio)
              )
              return row.map(image => {
                const splitPath = image.sharp.fluid.src.split("/")
                const title = splitPath[splitPath.length - 1]
                return (
                  <Img
                    key={title}
                    alt={title}
                    fluid={image.sharp.fluid}
                    css={css`
                      width: ${(image.sharp.fluid.aspectRatio /
                        rowAspectRatioSum) *
                      100}%;
                      display: inline-block;
                    `}
                  />
                )
              })
            })}
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </Layout>
  )
}

export default GalleryTemplate
