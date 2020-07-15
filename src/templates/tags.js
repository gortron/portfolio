import React from "react"
import { graphql } from "gatsby"
import DisplayContent from "../components/display-content"

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "dddd, MMMM D, YYYY-D/M/Y")
          tags
          image {
            sharp: childImageSharp {
              fluid(quality: 100) {
                aspectRatio
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const TagsPage = ({ data }) => {
  const allContent = data.allMarkdownRemark.nodes
  // return <pre>{JSON.stringify(data, null, 2)}</pre>
  return <DisplayContent content={allContent} />
}

export default TagsPage
