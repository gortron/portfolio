import React from "react"
import { graphql } from "gatsby"
import DisplayContent from "../components/display-content"

export const query = graphql`
  query($tag: [String!]) {
    allFile(
      filter: { childMarkdownRemark: { frontmatter: { tags: { in: $tag } } } }
      sort: { fields: [childMarkdownRemark___frontmatter___date], order: DESC }
    ) {
      nodes {
        childMarkdownRemark {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "dddd, MMMM D, YYYY-D/M/Y")
            tags
          }
        }
      }
    }
  }
`

const TagsPage = ({ data }) => {
  const allContent = data.allFile.nodes
  return <pre>{JSON.stringify(data, null, 2)}</pre>
  // return <DisplayContent content={allContent} />
}

export default TagsPage
