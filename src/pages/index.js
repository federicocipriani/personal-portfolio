import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I am Federico, a front-end developer living in the UK.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default HomePage
