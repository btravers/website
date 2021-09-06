import * as React from "react"

import logo from "../images/logo.svg"
import logoLarge from "../images/logo-large.svg"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <img src={logo} alt="logo" />
      <img src={logoLarge} alt="logo" />
    </main>
  )
}

export default IndexPage
