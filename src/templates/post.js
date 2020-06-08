import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      html
      excerpt
      rawMarkdownBody
    }
  }
`

const PostTemplate = ({ data }) => {
  // const { title, date, description } = data.markdownRemark.frontmatter
  // const { excerpt, html, rawMarkdownBody } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
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
