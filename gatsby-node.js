const { get, uniq, kebabCase } = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const postsResult = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  if (postsResult.errors) {
    reporter.panic(
      "Tried querying for posts Markdown, but failed!",
      postsResult.errors
    )
  }

  const posts = postsResult.data.allFile.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.childMarkdownRemark.fields.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.childMarkdownRemark.fields.slug,
        id: post.childMarkdownRemark.id,
      },
    })
  })

  const galleriesResult = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "galleries" } }) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (galleriesResult.errors) {
    reporter.panic(
      "Tried querying for galleries Markdown, but failed!",
      galleriesResult.errors
    )
  }

  const galleries = galleriesResult.data.allFile.nodes

  galleries.forEach(gallery => {
    actions.createPage({
      path: gallery.childMarkdownRemark.fields.slug,
      component: require.resolve("./src/templates/gallery.js"),
      context: {
        slug: gallery.childMarkdownRemark.fields.slug,
      },
    })
  })

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (get(edge, `childMarkdownRemark.frontmatter.tags`)) {
      tags = tags.concat(edge.childMarkdownRemark.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = uniq(tags)

  console.log("tags: ", tags)

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${kebabCase(tag)}/`

    console.log(tag)
    actions.createPage({
      path: tagPath,
      component: require.resolve("./src/templates/tags.js"),
      context: {
        tag,
      },
    })
  })
}

const returnFirstTruthy = (arr, cb) => {
  if (!arr) return null
  for (const item of arr) {
    const postsResult = cb(item)
    if (postsResult) return postsResult
  }
}

// This is used to conver the file name to a slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// This is used for the gallery component's list of images
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
