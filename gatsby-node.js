exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Tried querying for Markdown, but failed!", result.errors)
  }

  // console.log(result.data.allFile.nodes)
  const posts = result.data.allFile.nodes

  posts.forEach(post => {
    // console.log(post.childMarkdownRemark.frontmatter.slug)
    actions.createPage({
      path: post.childMarkdownRemark.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.childMarkdownRemark.frontmatter.slug,
      },
    })
  })
}
