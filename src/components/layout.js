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

          img {
            cursor: pointer;
          }

          /* For prismjs */
          .gatsby-highlight {
            font-size: 14px;
          }

          /* For react-hamburger-menu */

          /* Position and sizing of burger button */
          .bm-burger-button {
            position: absolute;
            width: 4vh;
            height: 24px;
            right: 10vw;
            top: 5vh;
          }

          /* Color/shape of burger icon bars */
          .bm-burger-bars {
            background: black;
            height: 3px !important;
          }

          main {
            padding-top: 13vh;
          }

          .srlImage {
            width: 100vw !important;
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
