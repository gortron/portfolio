import React from "react"
import SEO from "./seo"
import Layout from "./layout"
import ContentPreview from "./content-preview"
import { css } from "@emotion/core"
import { chunk, sum } from "lodash"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const DisplayContent = ({ content }) => {
  const breakpoints = useBreakpoint()
  const itemsPerRow = breakpoints.sm ? 1 : 2
  const rows = chunk(content, itemsPerRow)
  // return <pre>{JSON.stringify(posts, null, 2)}</pre>
  return (
    <Layout>
      <SEO title="Home" />
      <div
        css={css`
          margin: 0 10vw 0 10vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: stretch;
        `}
      >
        {rows.map(row => {
          const rowAspectRatioSum = sum(
            row.map(
              content =>
                content.childMarkdownRemark.frontmatter.image.sharp.fluid
                  .aspectRatio
            )
          )
          return row.map(content => {
            const {
              fluid,
            } = content.childMarkdownRemark.frontmatter.image.sharp
            return (
              <div
                css={css`
                  width: ${(fluid.aspectRatio / rowAspectRatioSum) * 100}%;
                  display: inline-block;
                `}
              >
                <ContentPreview
                  key={content.childMarkdownRemark.fields.slug}
                  content={content.childMarkdownRemark}
                />
              </div>
            )
          })
        })}
      </div>
    </Layout>
  )
}

export default DisplayContent
