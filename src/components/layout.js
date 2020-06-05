import React from "react"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import Header from "./header"
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

          * + * {
            margin-top: 1rem;
          }

          > div {
            margin-top: 0;
          }

          html,
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
          }
          font-size: 18px;
          line-height: 1.4;
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
