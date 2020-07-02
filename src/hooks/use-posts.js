import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "posts" } }
        sort: {
          fields: [childMarkdownRemark___frontmatter___date]
          order: DESC
        }
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
              image {
                sharp: childImageSharp {
                  fluid(quality: 100) {
                    aspectRatio
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt(pruneLength: 280)
          }
        }
      }
    }
  `)

  // Remove the single "about" post
  const relevantPosts = data.allFile.nodes.filter(
    post => !post.childMarkdownRemark.frontmatter.tags.includes("about")
  )

  return relevantPosts
}

export default usePosts
