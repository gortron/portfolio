import React from "react"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
// import { Link } from "gatsby"
// import styled from "@emotion/styled"

import Header from "./header"
// import Menu from "react-burger-menu/lib/menus/stack"
import useSiteMetadata from "../hooks/use-sitemetadata"

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata()
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            background-color: #white;
            margin: 0;
          }

          h1 {
            font-size: 24px;
          }

          blockquote {
            background: #f9f9f9;
            border-left: 10px solid black;
            padding: 0.5em 10px;
            margin: 0 0 0 0;
            text-align: center;
            font-style: italic;
            font-family: Lora;
          }

          blockquote p {
            display: inline;
            font-size: 20px;
          }

          /* For prismjs */
          .gatsby-highlight {
            font-size: 14px;
          }

          /* For react-hamburger-menu */
          .bm-burger-button {
            position: absolute;
            width: 36px;
            height: 30px;
            right: 36px;
            top: 36px;
          }

          .bm-burger-bars {
            background: black;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
