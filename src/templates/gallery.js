import React from "react"
import { graphql } from "gatsby"
// import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Hero from "../components/hero"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
        galleryImages {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
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
const DateText = styled.p`
  font-size: 12px;
  padding-bottom: 0;
  color: grey;
  padding-bottom: 1.5rem;
`
const ContentBox = styled.div`
  padding: 0 10vw 0 10vw;
`

const GalleryTemplate = ({ data }) => {
  const { title, image, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  let date_string
  if (date) {
    let dates = date.split("-")
    date_string = dates[0]
  }

  return (
    <Layout>
      {image && <Hero image={image} />}
      <TitleBox>
        <TitleText>
          <i>{title}</i>
        </TitleText>
        {date && <DateText>{date_string}</DateText>}
      </TitleBox>
      <ContentBox>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </ContentBox>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )
}

export default GalleryTemplate
