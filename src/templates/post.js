import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Hero from "../components/hero"

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
      }
      html
      rawMarkdownBody
    }
  }
`

const PostTemplate = ({ data }) => {
  const { title, image } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      {image && <Hero image={image} />}
      <div
        css={css`
          padding: 0 10vw 0 10vw;
        `}
      >
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )
}

export default PostTemplate
