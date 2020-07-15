import React from "react"
import { graphql } from "gatsby"
import DisplayContent from "../components/display-content"

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { ne: "about" } } }
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

const IndexPage = ({ data }) => {
  const allContent = data.allMarkdownRemark.nodes
  return <DisplayContent content={allContent} />
}

export default IndexPage
