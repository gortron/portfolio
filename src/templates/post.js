import React from "react"
import { graphql } from "gatsby"
// import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      }
      html
      rawMarkdownBody
    }
  }
`

const TitleBox = styled.div`
  padding: 3rem 10vw 0 10vw;
  text-align: center;
`

const TitleText = styled.h1`
  font-size: 8vw;
`
const DateAndTagText = styled.p`
  font-size: 12px;
  padding-bottom: 0;
  color: grey;
`

const TagLink = styled(Link)`
  font-size: 12px;
  padding-bottom: 0;
  color: grey;
  padding-bottom: 1.5rem;
  text-decoration: none;
  font-style: italic;
`

const ContentBox = styled.div`
  padding: 1.5rem 10vw 0 10vw;
`

const PostTemplate = ({ data }) => {
  const { title, image, date, tags } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  let date_string
  if (date) {
    let dates = date.split("-")
    date_string = dates[0]
  }

  const renderTags = () => {
    return (
      <DateAndTagText>
        Tags:{" "}
        {tags.map((tag, idx) => {
          if (idx < tags.length - 1) {
            return <TagLink to={`/tags/${tag}`}>{tag + ", "}</TagLink>
          } else {
            return <TagLink to={`/tags/${tag}`}>{tag}</TagLink>
          }
        })}
      </DateAndTagText>
    )
  }

  return (
    <Layout>
      {image && <Hero image={image} />}
      <TitleBox>
        <TitleText>
          <i>{title}</i>
        </TitleText>
        {date && <DateAndTagText>{date_string}</DateAndTagText>}
        {tags && renderTags()}
      </TitleBox>
      <ContentBox>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </ContentBox>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )
}

export default PostTemplate
