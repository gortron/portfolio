import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../containers/layout"

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: $slug } } }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export default PostTemplate
