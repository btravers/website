import * as React from "react"

import logoLarge from "../images/logo-large-inverted.svg"

const Header = () => (
    <header className="container mx-auto py-6 hidden xl:block">
        <img className="h-8" src={logoLarge} alt="" />
    </header>
)

export default Header