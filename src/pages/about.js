import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is an about page</p>
      <Link to="/"> &larr; Go Home</Link>
    </Layout>
  )
}

export default About
