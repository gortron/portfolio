import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"

export const query = graphql`
  {
    allMarkdownRemark {
      posts: nodes {
        frontmatter {
          title
          date
          description
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
    <h1>Home Page</h1>
    {data.allMarkdownRemark.posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  </Layout>
)

export default IndexPage
