import * as React from "react"
import SEO from "../components/SEO"

import illustration from "../images/105.svg"
import logoLarge from "../images/logo-large.svg"

const NotFoundPage = () => (
    <main>
      <SEO title="Page not found" />
      <div className="container mx-auto h-screen flex flex-col items-center justify-center">
        <img className="max-w-6xl w-full" src={illustration} alt="" />
        <img className="max-w-xs w-full" src={logoLarge} alt="" />
      </div>
    </main>
  )

export default NotFoundPage
