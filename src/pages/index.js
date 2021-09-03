import * as React from "react"

import Logo from '../components/Logo'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Logo />
      <Logo large />

      <div style={{ backgroundColor: "#2B2D42 " }}>
        <Logo inverted />
        <Logo inverted large />
      </div>
    </main>
  )
}

export default IndexPage
