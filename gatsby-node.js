exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              description
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Tried querying for Markdown, but failed!", result.errors)
  }

  // console.log(result.data.allMarkdownRemark.edges[0])
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(post => {
    // console.log(post.node.frontmatter)
    actions.createPage({
      path: post.node.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.node.frontmatter.slug,
      },
    })
  })
}
