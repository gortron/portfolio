exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
            description
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Tried querying for Markdown, but failed!", result.errors)
  }

  console.log(result.data.allMarkdownRemark.nodes)
  const posts = result.data.allMarkdownRemark.nodes

  posts.forEach(post => {
    // console.log(post.node.frontmatter)
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
