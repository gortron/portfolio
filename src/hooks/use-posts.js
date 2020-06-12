import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        posts: nodes {
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
          excerpt(pruneLength: 280)
        }
      }
    }
  `)
  return data.allMarkdownRemark.posts
}

export default usePosts
