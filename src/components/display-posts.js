import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import { css } from "@emotion/core"

const DisplayPosts = ({ posts }) => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: stretch;
        margin: 0 10vw 0 10vw;
      `}
    >
      {posts.map(post => (
        <PostPreview key={post.slug} post={post.childMarkdownRemark} />
      ))}
    </div>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
  </Layout>
)

export default DisplayPosts
