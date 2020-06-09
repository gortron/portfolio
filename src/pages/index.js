import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import { css } from "@emotion/core"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export const query = graphql`
  {
    allMarkdownRemark {
      posts: nodes {
        frontmatter {
          title
          date
          slug
          tags
          image {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt(pruneLength: 280)
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: stretch;
        margin: 0 10vw 0 10vw;
      `}
    >
      {data.allMarkdownRemark.posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  </Layout>
)

export default IndexPage
