import React from "react"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
// import Header from './header'
import useSiteMetadata from "../hooks/use-sitemetadata"

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default Layout
