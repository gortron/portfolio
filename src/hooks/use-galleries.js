import { graphql, useStaticQuery } from "gatsby"

const useGalleries = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "galleries" } }
        sort: {
          fields: [childMarkdownRemark___frontmatter___date]
          order: DESC
        }
      ) {
        galleries: nodes {
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
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              galleryImages {
                sharp: childImageSharp {
                  fluid {
                    aspectRatio
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allFile.galleries
}

export default useGalleries
