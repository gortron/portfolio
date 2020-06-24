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

const returnFirstTruthy = (arr, cb) => {
  if (!arr) return null
  for (const item of arr) {
    const result = cb(item)
    if (result) return result
  }
}

exports.createSchemaCustomization = ({ actions: { createTypes }, schema }) => {
  createTypes(
    schema.buildObjectType({
      name: "MarkdownRemarkFrontmatter",
      fields: {
        images: {
          type: `[ImageSharp]`,
          resolve: async (source, args, context, info) => {
            // Get the original contents of the frontmatter filename array
            const originalArray = context.defaultFieldResolver(
              source,
              args,
              context,
              info
            )
            // If there's no original contents, bail out early
            if (!originalArray) return null
            if (originalArray.length === 0) return []

            // Try running the query for files matching the provided names
            const query = await context.nodeModel.runQuery({
              query: {
                filter: {
                  sourceInstanceName: { eq: "assets" },
                  relativePath: { in: originalArray },
                },
              },
              type: "File",
            })

            if (query) {
              // Map resolved nodes to their filenames so we can return them in original order
              const filenameSharpMap = {}

              for (const fileNode of query) {
                const imageSharpNode = returnFirstTruthy(
                  fileNode.children,
                  id =>
                    context.nodeModel.getNodeById({
                      id,
                      type: "ImageSharp",
                    })
                )
                if (imageSharpNode) {
                  filenameSharpMap[fileNode.relativePath] = imageSharpNode
                }
              }

              return originalArray.map(filename => filenameSharpMap[filename])
            } else {
              return null
            }
          },
        },
      },
    })
  )
}
