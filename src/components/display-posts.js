import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { chunk, sum } from "lodash"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

// const DisplayPosts = ({ posts }) => (
//   <Layout>
//     <SEO title="Home" />
//     <div
//       css={css`
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;
//         align-content: stretch;
//         margin: 0 10vw 0 10vw;
//       `}
//     >
//       {posts.map(post => (
//         <PostPreview key={post.slug} post={post.childMarkdownRemark} />
//       ))}
//     </div>
//     {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
//   </Layout>
// )

const DisplayPosts = ({ content }) => {
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
                <PostPreview
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

export default DisplayPosts
